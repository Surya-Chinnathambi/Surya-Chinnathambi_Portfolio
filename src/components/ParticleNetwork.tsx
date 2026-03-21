import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
  baseRadius: number;
  color: string;
  pulseOffset: number;
}

interface LightStreak {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  color: string;
}

interface FloatingOrb {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
  pulseSpeed: number;
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let isVisible = document.visibilityState === 'visible';

    const particles: Particle[] = [];
    const lightStreaks: LightStreak[] = [];
    const floatingOrbs: FloatingOrb[] = [];

    const particleCount = 36;
    const maxDistance = 110;
    const returnForce = 0.0003;
    const damping = 0.98;
    const streakCount = 4;
    const orbCount = 3;

    const colorPalette = ['#a855f7', '#ec4899', '#3b82f6', '#14b8a6', '#f59e0b'];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Initialize particles
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x: x,
          y: y,
          vx: 0,
          vy: 0,
          originalX: x,
          originalY: y,
          baseRadius: Math.random() * 3 + 2,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }

      // Initialize light streaks
      lightStreaks.length = 0;
      for (let i = 0; i < streakCount; i++) {
        lightStreaks.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 200 + 100,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 3 + 2,
          opacity: Math.random() * 0.5 + 0.3,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)]
        });
      }

      // Initialize floating orbs
      floatingOrbs.length = 0;
      for (let i = 0; i < orbCount; i++) {
        floatingOrbs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 80 + 40,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          pulseSpeed: Math.random() * 0.002 + 0.001
        });
      }
    };

    const animate = (time = 0) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      // Create motion blur effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated gradient waves
      const gradient1 = ctx.createLinearGradient(
        Math.sin(time * 0.0003) * canvas.width,
        0,
        Math.cos(time * 0.0003) * canvas.width,
        canvas.height
      );
      gradient1.addColorStop(0, 'rgba(168, 85, 247, 0.03)');
      gradient1.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
      gradient1.addColorStop(1, 'rgba(236, 72, 153, 0.03)');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating orbs with glow
      floatingOrbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off edges
        if (orb.x < 0 || orb.x > canvas.width) orb.vx *= -1;
        if (orb.y < 0 || orb.y > canvas.height) orb.vy *= -1;

        const pulse = Math.sin(time * orb.pulseSpeed) * 0.3 + 0.7;
        const orbRadius = orb.radius * pulse;

        const orbGradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orbRadius);
        orbGradient.addColorStop(0, `${orb.color}15`);
        orbGradient.addColorStop(0.5, `${orb.color}08`);
        orbGradient.addColorStop(1, `${orb.color}00`);

        ctx.fillStyle = orbGradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orbRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw light streaks
      lightStreaks.forEach((streak) => {
        streak.x += Math.cos(streak.angle) * streak.speed;
        streak.y += Math.sin(streak.angle) * streak.speed;

        // Wrap around screen
        if (streak.x < -100) streak.x = canvas.width + 100;
        if (streak.x > canvas.width + 100) streak.x = -100;
        if (streak.y < -100) streak.y = canvas.height + 100;
        if (streak.y > canvas.height + 100) streak.y = -100;

        const endX = streak.x + Math.cos(streak.angle) * streak.length;
        const endY = streak.y + Math.sin(streak.angle) * streak.length;

        const streakGradient = ctx.createLinearGradient(streak.x, streak.y, endX, endY);
        streakGradient.addColorStop(0, `${streak.color}00`);
        streakGradient.addColorStop(0.3, `${streak.color}${Math.floor(streak.opacity * 255).toString(16).padStart(2, '0')}`);
        streakGradient.addColorStop(1, `${streak.color}00`);

        ctx.strokeStyle = streakGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(streak.x, streak.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      });

      // Draw sine wave patterns
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 - i * 0.03})`;
        ctx.lineWidth = 2;

        for (let x = 0; x < canvas.width; x += 5) {
          const y = canvas.height / 2 +
            Math.sin(x * 0.01 + time * 0.002 + i * 2) * 50 +
            Math.sin(x * 0.02 + time * 0.001 + i) * 30;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p) => {
        const dxOrigin = p.originalX - p.x;
        const dyOrigin = p.originalY - p.y;
        p.vx += dxOrigin * returnForce;
        p.vy += dyOrigin * returnForce;

        p.vx += (Math.random() - 0.5) * 0.01;
        p.vy += (Math.random() - 0.5) * 0.01;

        p.vx *= damping;
        p.vy *= damping;

        p.x += p.vx;
        p.y += p.vy;

        const pulse = Math.sin(time * 0.0005 + p.pulseOffset);
        const coreRadius = p.baseRadius + pulse * 1.5;
        const haloRadius = coreRadius * 4;

        // Draw outer halo
        const haloGradient = ctx.createRadialGradient(p.x, p.y, coreRadius, p.x, p.y, haloRadius);
        haloGradient.addColorStop(0, `${p.color}33`);
        haloGradient.addColorStop(1, `${p.color}00`);
        ctx.fillStyle = haloGradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, haloRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw glowing core
        ctx.beginPath();
        ctx.arc(p.x, p.y, coreRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 20;
        ctx.fill();
      });

      ctx.shadowBlur = 0;

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.lineWidth = 0.5 + opacity;
            ctx.strokeStyle = `rgba(236, 72, 153, ${opacity * 0.5})`;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Add random sparkles
      if (Math.random() > 0.95) {
        const sparkleX = Math.random() * canvas.width;
        const sparkleY = Math.random() * canvas.height;
        const sparkleColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];

        ctx.fillStyle = sparkleColor;
        ctx.shadowColor = sparkleColor;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(sparkleX, sparkleY, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
    };

    setup();
    animate();

    window.addEventListener('resize', setup);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('resize', setup);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)',
        zIndex: 0
      }}
    />
  );
}
