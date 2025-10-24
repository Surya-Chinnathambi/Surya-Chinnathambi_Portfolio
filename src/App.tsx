import React, { useEffect, useRef } from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

/**
 * App.tsx
 * - Adds global custom cursor + trail
 * - Adds particle network canvas background
 * - Enables smooth scroll and glass morphism on scroll state
 *
 * Drop this at src/app.tsx
 */

const App: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Glass morphism toggle on scroll (applies class to body)
    const onScroll = () => {
      if (window.scrollY > 40) document.body.classList.add("scrolled");
      else document.body.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);

    // Cursor and trail implementation
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      // grow cursor if hovering interactive element
      let t = (e.target as HTMLElement);
      const interactive = t.closest && (t.closest('a, button, [role="button"], label, input, textarea') );
      if (interactive) cursor.classList.add("cursor--grow");
      else cursor.classList.remove("cursor--grow");
    };

    document.addEventListener("mousemove", onMove);

    const frame = () => {
      // trail lerp for a smooth tail
      trailX += (mouseX - trailX) * 0.16;
      trailY += (mouseY - trailY) * 0.14;
      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Particle canvas sits behind content */}
      <ParticleCanvas />

      {/* Custom cursor elements */}
      <div
        ref={trailRef}
        style={{
          position: "fixed",
          left: -10,
          top: -10,
          width: 28,
          height: 28,
          borderRadius: "50%",
          pointerEvents: "none",
          mixBlendMode: "screen",
          background:
            "radial-gradient(circle at 30% 30%, rgba(180,120,255,0.95), rgba(140,80,255,0.55) 40%, rgba(140,80,255,0.18) 70%)",
          transform: "translate3d(-50%, -50%,0)",
          transition: "width 200ms ease, height 200ms ease, opacity 200ms",
          zIndex: 9998,
          boxShadow: "0 6px 18px rgba(140,80,255,0.18)",
        }}
      />

      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: -6,
          top: -6,
          width: 12,
          height: 12,
          borderRadius: "50%",
          pointerEvents: "none",
          background: "#fff",
          transform: "translate3d(-50%, -50%,0)",
          zIndex: 9999,
          transition: "transform 120ms ease, width 120ms ease, height 120ms ease",
          boxShadow: "0 0 8px rgba(140,80,255,0.9)",
        }}
        className="custom-cursor"
      />

      <Navbar />

      <main style={{ position: "relative", zIndex: 2 }}>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Some minimal global styles injected so components behave as previewed */}
      <style>{globalStyles}</style>
    </>
  );
};

export default App;

/* Minimal global CSS used by components for consistent visuals */
const globalStyles = `
:root{
  --accent-1: #7c4dff;
  --accent-2: #9b6bff;
  --glass-bg: rgba(255,255,255,0.06);
  --glass-border: rgba(255,255,255,0.08);
}

/* Body base */
body{
  margin:0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #eae7ff;
  background: linear-gradient(180deg, #070617 0%, #0b0520 100%);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  overflow-x:hidden;
}

/* glass effect when scrolled (applies to navbar) */
.scrolled .glass {
  background: linear-gradient(120deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  backdrop-filter: blur(8px) saturate(1.1);
  box-shadow: 0 6px 24px rgba(2,2,15,0.6);
  border: 1px solid var(--glass-border);
}

/* Utility center section */
.section {
  padding: 96px 20px;
  min-height: 80vh;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
}

/* Interactive element hover */
a, button { cursor: pointer; }

/* cursor grow */
.custom-cursor.cursor--grow {
  width: 32px !important;
  height: 32px !important;
  background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,0.85));
}

/* basic card styling */
.card {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius: 12px;
  padding: 18px;
  border: 1px solid rgba(255,255,255,0.04);
}
`;

/* ParticleCanvas component below */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(DPR, DPR);

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; hue: number };
    const particles: Particle[] = [];
    const COUNT = Math.max(80, Math.floor((width * height) / 20000)); // responsive count

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: 1 + Math.random() * 2,
        hue: 260 + Math.random() * 40,
      });
    }

    let raf = 0;
    function loop() {
      ctx.clearRect(0, 0, width, height);

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 9000) {
            const alpha = 0.12 - d2 / 9000 / 10;
            ctx.strokeStyle = `rgba(150,110,255,${Math.max(0, alpha)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        g.addColorStop(0, `hsla(${p.hue},85%,70%,0.95)`);
        g.addColorStop(0.35, `hsla(${p.hue},70%,60%,0.55)`);
        g.addColorStop(1, "rgba(16,12,30,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(DPR, DPR);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        mixBlendMode: "screen",
        opacity: 0.9,
      }}
    />
  );
}
