import React, { useEffect, useRef } from 'react';

// Enhanced particle structure for more advanced properties
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number; // For the "return home" behavior
  originalY: number;
  baseRadius: number;
  color: string;
  pulseOffset: number; // To desynchronize the "breathing" effect
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const particles: Particle[] = [];
    const particleCount = 70; // Slightly fewer for larger, more detailed particles
    const maxDistance = 140;
    const returnForce = 0.0003; // Strength of the pull back to origin
    const damping = 0.98; // Friction for smoother, more fluid motion

    // A vibrant, modern color palette
    const colorPalette = ['#a855f7', '#ec4899', '#3b82f6', '#14b8a6'];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles.length = 0; // Clear particles on resize
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
          baseRadius: Math.random() * 3 + 2, // Larger base radius
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = (time = 0) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Update and draw each particle ---
      particles.forEach((p) => {
        // Organic Motion: Gently pull the particle back to its origin
        const dxOrigin = p.originalX - p.x;
        const dyOrigin = p.originalY - p.y;
        p.vx += dxOrigin * returnForce;
        p.vy += dyOrigin * returnForce;

        // Add a small amount of random motion for a "jitter" effect
        p.vx += (Math.random() - 0.5) * 0.01;
        p.vy += (Math.random() - 0.5) * 0.01;

        // Apply damping (friction) to make movement fluid
        p.vx *= damping;
        p.vy *= damping;

        p.x += p.vx;
        p.y += p.vy;

        // **Designed Particle**: A glowing core with a soft outer halo
        const pulse = Math.sin(time * 0.0005 + p.pulseOffset);
        const coreRadius = p.baseRadius + pulse * 1.5;
        const haloRadius = coreRadius * 4;

        // Draw outer halo
        const haloGradient = ctx.createRadialGradient(p.x, p.y, coreRadius, p.x, p.y, haloRadius);
        haloGradient.addColorStop(0, `${p.color}33`); // Semi-transparent at center
        haloGradient.addColorStop(1, `${p.color}00`); // Fully transparent at edge
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
      
      ctx.shadowBlur = 0; // Reset shadow for lines

      // --- Draw dynamic connections ---
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.lineWidth = 0.5 + opacity;
            ctx.strokeStyle = `rgba(236, 72, 153, ${opacity * 0.5})`; // Pinkish connection lines
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    setup();
    animate();
    
    window.addEventListener('resize', setup);

    return () => {
      window.removeEventListener('resize', setup);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]" // Set to -1 to be behind everything
      style={{ background: 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)' }}
    />
  );
}
