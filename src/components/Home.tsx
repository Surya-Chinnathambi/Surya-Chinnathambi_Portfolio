import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import profileImage from '../aset/profileimage.jpg'; // Make sure this path is correct

const highlights = [
  "Network Security Specialist",
  "Penetration Testing Expert",
  "Cybersecurity Enthusiast",
  "Web Developer"
];

// New component for the floating shapes in the background
const FloatingShape = ({ top, left, size, delay, duration }) => {
  return (
    <motion.div
      className="absolute rounded-full filter blur-xl opacity-20"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)', // Blue-purple gradient
      }}
      initial={{ y: 0, scale: 0.8 }}
      animate={{
        y: [0, 20, 0],
        scale: [0.8, 1, 0.8],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'mirror',
        delay: delay,
        ease: 'easeInOut'
      }}
    />
  );
};


export function Home() {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Added a relative positioning and overflow-hidden for the new background animations
    <div className="relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-[-1]"
        animate={{
          background: [
            'linear-gradient(135deg, #020617 0%, #111827 50%, #1e293b 100%)',
            'linear-gradient(135deg, #1e293b 0%, #020617 50%, #111827 100%)',
            'linear-gradient(135deg, #111827 0%, #1e293b 50%, #020617 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'linear'
        }}
      />

      {/* Floating Shapes Layer */}
      <div className="absolute inset-0 z-[-1]">
        <FloatingShape top="10%" left="5%" size={200} delay={0} duration={10} />
        <FloatingShape top="50%" left="20%" size={150} delay={2} duration={12} />
        <FloatingShape top="30%" left="80%" size={250} delay={4} duration={15} />
        <FloatingShape top="80%" left="60%" size={180} delay={1} duration={8} />
      </div>

      <div className="container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-medium text-gray-400 mb-2"
              >
                Welcome, I'm
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              >
                Surya C
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="h-12"
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentHighlight}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-xl text-gray-400"
                  >
                    {highlights[currentHighlight]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-gray-400 mt-6"
              >
                <MapPin size={20} />
                <span>Kallakurichi, Tamil Nadu</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 space-y-4"
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <Phone size={20} />
                  <span>(+91) 8870752656</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <Mail size={20} />
                  <span>suryag.chinnathambi@gmail.com</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-6 mt-8"
              >
                {[
                  { icon: Github, href: "https://github.com/Suryzz", color: "hover:text-purple-400" },
                  { icon: Linkedin, href: "http://www.linkedin.com/in/surya-c-a4627725a/", color: "hover:text-blue-400" },
                  { icon: Mail, href: "mailto:suryag.chinnathambi@gmail.com", color: "hover:text-green-400" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href={social.href}
                    className={`${social.color} transition-colors`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.05}
                transitionSpeed={2000}
                className="relative"
              >
                <div className="relative group">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-1"
                  >
                    <img src={profileImage}
                      alt="Profile"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  </motion.div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
