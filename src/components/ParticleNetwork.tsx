import React, { useEffect, useRef } from 'react';

// Define the structure for a particle
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  originalX: number;
  originalY: number;
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0; // Time variable for sine wave pulsation

    const particles: Particle[] = [];
    const particleCount = 100;
    const maxDistance = 120;
    const returnForce = 0.0005; // Strength of the pull back to origin
    const damping = 0.96; // Friction to slow particles down

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles.length = 0; // Clear existing particles
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        particles.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: radius,
          originalX: x,
          originalY: y,
        });
      }
    };

    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    const animate = () => {
      time += 0.01; // Increment time for pulsing effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // --- Gravitational pull back to original position ---
        const dxOrigin = particle.originalX - particle.x;
        const dyOrigin = particle.originalY - particle.y;
        
        particle.vx += dxOrigin * returnForce;
        particle.vy += dyOrigin * returnForce;

        // Apply friction/damping
        particle.vx *= damping;
        particle.vy *= damping;

        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Draw particle with a glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, 0.8)`;
        ctx.shadowColor = `rgba(168, 85, 247, 1)`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow blur
      });

      // --- Draw Connections ---
      ctx.lineWidth = 1;
      const pulse = (Math.sin(time) + 1) / 2; // Create a value that oscillates between 0 and 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * (0.4 + pulse * 0.4); // Pulsating opacity
            ctx.strokeStyle = `rgba(236, 72, 153, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // --- Setup and Teardown ---
    setCanvasSize();
    initParticles();
    animate();
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{ background: 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)' }}
    />
  );
}
