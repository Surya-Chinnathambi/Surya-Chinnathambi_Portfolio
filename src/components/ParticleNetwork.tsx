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
  // Use a ref for the mouse position to avoid re-renders in the animation loop
  const mouse = useRef({ x: -200, y: -200, radius: 120 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const particles: Particle[] = [];
    const particleCount = 100; // Increased particle count for a denser network
    const maxDistance = 120; // Max distance for lines between particles

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
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: radius,
          originalX: x,
          originalY: y,
        });
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const handleResize = () => {
      setCanvasSize();
      initParticles(); // Re-initialize particles on resize for new dimensions
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // --- Mouse Interaction ---
        const dxMouse = particle.x - mouse.current.x;
        const dyMouse = particle.y - mouse.current.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceMouse < mouse.current.radius) {
          // Push particles away from the mouse
          const forceDirectionX = dxMouse / distanceMouse;
          const forceDirectionY = dyMouse / distanceMouse;
          const force = (mouse.current.radius - distanceMouse) / mouse.current.radius;
          const directionX = forceDirectionX * force * 2; // Increased push force
          const directionY = forceDirectionY * force * 2;
          
          particle.vx += directionX;
          particle.vy += directionY;
        }

        // Apply friction/damping to slow particles down
        particle.vx *= 0.96;
        particle.vy *= 0.96;

        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
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
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(236, 72, 153, ${opacity * 0.6})`;
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
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]" // Set z-index to -1 to be behind all content
      style={{ background: 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)' }} // Added a subtle gradient background
    />
  );
}
