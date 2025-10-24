import React, { useEffect, useRef } from 'react';

// Enhanced particle structure for more dynamic properties
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number; // The particle's original radius
  color: string;
  pulseOffset: number; // For creating a desynchronized "breathing" effect
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0; // A global time variable for orchestrating animations

    const particles: Particle[] = [];
    const particleCount = 100; // Increased for a denser network
    const maxDistance = 130;
    // A vibrant color palette for the particles to choose from
    const colorPalette = ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'];

    // This function sets up the canvas and initializes all particles
    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles.length = 0; // Clear existing particles before re-initializing
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          baseRadius: Math.random() * 2 + 1.5,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          pulseOffset: Math.random() * Math.PI * 2, // Random offset for unique pulsing
        });
      }
    };

    const animate = () => {
      time += 0.01; // Increment time each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Update and draw each particle ---
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce particles off the screen edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // **Pulsating Effect**: Calculate the current radius using a sine wave
        const currentRadius = p.baseRadius + Math.sin(time + p.pulseOffset) * 0.5;
        
        // **Glow Effect**: Draw the particle with a shadow to create a glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 15;
        ctx.fill();
      });
      
      // Reset shadow before drawing the connection lines
      ctx.shadowBlur = 0;

      // --- Draw dynamic connections between particles ---
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            // Lines become thicker and more opaque when particles are closer
            ctx.lineWidth = 0.5 + opacity;
            ctx.strokeStyle = `rgba(236, 72, 153, ${opacity * 0.7})`;
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // --- Initial Setup and Event Listeners ---
    setup();
    animate();
    
    window.addEventListener('resize', setup);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', setup);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]" // Ensure it's behind all other content
      style={{ background: 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)' }}
    />
  );
}
