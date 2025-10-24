import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  pulseOffset: number;
  glowPhase: number;
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    const particleCount = 100;
    const maxDistance = 180;

    // Resize canvas and reset particles
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 3 + 2.5,
        hue: Math.random() * 360,
        pulseOffset: Math.random() * Math.PI * 2,
        glowPhase: Math.random() * Math.PI * 2,
      }));
    };

    // Particle motion with wave-like energy
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle gradient background refresh
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(1, "#020617");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate each particle
      particles.forEach((p) => {
        // Organic movement with sine wave jitter
        p.x += p.vx + Math.sin(time * 0.001 + p.pulseOffset) * 0.2;
        p.y += p.vy + Math.cos(time * 0.0015 + p.pulseOffset) * 0.2;

        // Wrap around screen edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulsing size for glowing effect
        const pulse = Math.sin(time * 0.002 + p.pulseOffset) * 0.5 + 1.5;
        const radius = p.size * pulse;

        // Glowing aura
        const hueShift = (p.hue + time * 0.02) % 360;
        const color = `hsl(${hueShift}, 80%, 65%)`;

        const glowGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 4);
        glowGradient.addColorStop(0, `${color}aa`);
        glowGradient.addColorStop(1, `${color}00`);
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core glow
        ctx.shadowColor = color;
        ctx.shadowBlur = 20 + pulse * 10;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Glowing connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const opacity = 1 - dist / maxDistance;
            const gradientLine = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradientLine.addColorStop(0, `hsla(${p1.hue}, 100%, 70%, ${opacity * 0.6})`);
            gradientLine.addColorStop(1, `hsla(${p2.hue}, 100%, 70%, ${opacity * 0.6})`);
            ctx.strokeStyle = gradientLine;
            ctx.lineWidth = 1.2 + opacity * 1.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Flowing energy wave overlay
      const waveCount = 2;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height / 2 +
            Math.sin(x * 0.008 + time * 0.002 + w * Math.PI) * 50;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `hsla(${200 + w * 50}, 100%, 60%, 0.1)`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate(0);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{
        background: "radial-gradient(circle at center, #0f172a 0%, #020617 100%)",
      }}
    />
  );
}
