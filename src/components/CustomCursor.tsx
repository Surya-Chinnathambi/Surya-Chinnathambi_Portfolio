import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver, true);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver, true);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Smooth out the cursor's movement using spring physics
  const smoothOptions = { stiffness: 400, damping: 30, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mousePosition.x, smoothOptions),
    y: useSpring(mousePosition.y, smoothOptions),
  };

  const cursorVariants = {
    default: {
      scale: 1,
      opacity: 1,
      backgroundColor: "rgba(168, 85, 247, 0.1)",
      border: "2px solid #a855f7",
    },
    hover: {
      scale: 1.5,
      backgroundColor: "rgba(168, 85, 247, 0.4)",
      border: "2px solid #ec4899",
    },
    click: {
      scale: 0.8,
      borderColor: "#f472b6",
    },
  };

  const dotVariants = {
    default: { scale: 1, opacity: 1 },
    hover: { scale: 0, opacity: 0 },
    click: { scale: 1.2 },
  };

  const currentVariant = isClicking ? "click" : isHovering ? "hover" : "default";

  return (
    <>
      {/* SVG filter for the "gooey" effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      
      {/* The main cursor element container with the filter applied */}
      <div style={{ filter: 'url(#gooey)', pointerEvents: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}>
        {/* Outer Follower (creates the trail) */}
        <motion.div
          variants={cursorVariants}
          animate={currentVariant}
          style={{
            x: smoothMouse.x,
            y: smoothMouse.y,
            position: 'fixed',
            top: -16, // Offset to center
            left: -16, // Offset to center
            width: '32px',
            height: '32px',
            borderRadius: '50%',
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        />

        {/* Inner Dot (follows the mouse directly) */}
        <motion.div
          variants={dotVariants}
          animate={currentVariant}
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
            position: 'fixed',
            top: -4, // Offset to center
            left: -4, // Offset to center
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#ec4899',
            boxShadow: '0 0 10px #ec4899',
          }}
          transition={{ type: 'spring', stiffness: 800, damping: 30 }}
        />
      </div>
    </>
  );
}
