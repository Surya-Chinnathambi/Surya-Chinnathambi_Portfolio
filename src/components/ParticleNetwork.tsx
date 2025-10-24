import React, { useEffect, useRef } from 'react';



interface Particle {

  x: number;

  y: number;

  vx: number;

  vy: number;

  radius: number;

}



export function ParticleNetwork() {

  const canvasRef = useRef<HTMLCanvasElement>(null);



  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;



    const ctx = canvas.getContext('2d');

    if (!ctx) return;



    // Set canvas size

    const setCanvasSize = () => {

      canvas.width = window.innerWidth;

      canvas.height = window.innerHeight;

    };

    setCanvasSize();

    window.addEventListener('resize', setCanvasSize);



    // Create particles

    const particles: Particle[] = [];

    const particleCount = 80;

    const maxDistance = 150;



    for (let i = 0; i < particleCount; i++) {

      particles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        vx: (Math.random() - 0.5) * 0.5,

        vy: (Math.random() - 0.5) * 0.5,

        radius: Math.random() * 2 + 1,

      });

    }



    // Animation

    const animate = () => {

      ctx.clearRect(0, 0, canvas.width, canvas.height);



      // Update and draw particles

      particles.forEach((particle) => {

        particle.x += particle.vx;

        particle.y += particle.vy;



        // Bounce off edges

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;

        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;



        // Draw particle

        ctx.beginPath();

        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

        ctx.fillStyle = 'rgba(168, 85, 247, 0.6)';

        ctx.fill();

      });



      // Draw connections

      particles.forEach((particle, i) => {

        particles.slice(i + 1).forEach((otherParticle) => {

          const dx = particle.x - otherParticle.x;

          const dy = particle.y - otherParticle.y;

          const distance = Math.sqrt(dx * dx + dy * dy);



          if (distance < maxDistance) {

            const opacity = (1 - distance / maxDistance) * 0.3;

            ctx.beginPath();

            ctx.moveTo(particle.x, particle.y);

            ctx.lineTo(otherParticle.x, otherParticle.y);

            ctx.strokeStyle = `rgba(236, 72, 153, ${opacity})`;

            ctx.lineWidth = 1;

            ctx.stroke();

          }

        });

      });



      requestAnimationFrame(animate);

    };



    animate();



    return () => {

      window.removeEventListener('resize', setCanvasSize);

    };

  }, []);



  return (

    <canvas

      ref={canvasRef}

      className="fixed inset-0 pointer-events-none z-0"

      style={{ opacity: 0.4 }}

    />

  );

}

