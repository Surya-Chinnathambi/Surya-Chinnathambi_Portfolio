import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Code, Shield, Globe } from 'lucide-react'; // Added new icons
import { motion, AnimatePresence } from 'framer-motion';

// Import your image
import profilePic from '../assets/20250224_075405.jpg';

const highlights = [
  "Cybersecurity Enthusiast",
  "Penetration Tester",
  "Web Developer",
  "Ethical Hacker"
];

const FloatingShape = ({ top, left, size, delay, duration }) => {
  return (
    <motion.div
      className="absolute rounded-full filter blur-3xl opacity-20"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
      }}
      initial={{ y: 0, scale: 0.8 }}
      animate={{
        y: [0, 30, 0],
        scale: [0.8, 1.2, 0.8],
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
    <div className="relative overflow-hidden min-h-screen text-white">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-[-2]"
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

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-[-1]">
        <FloatingShape top="10%" left="5%" size={300} delay={0} duration={10} />
        <FloatingShape top="50%" left="70%" size={250} delay={2} duration={12} />
        <FloatingShape top="70%" left="20%" size={200} delay={4} duration={15} />
        <FloatingShape top="30%" left="85%" size={280} delay={1} duration={8} />
      </div>

      <div className="container mx-auto px-4 py-20 flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
              >
                Surya C
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="h-16 mb-6"
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentHighlight}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-2xl text-gray-300 font-light"
                  >
                    {highlights[currentHighlight]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-gray-400 mb-8"
              >
                <MapPin size={20} className="text-purple-400" />
                <span>Kallakurichi, Tamil Nadu</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-4 mb-8"
              >
                <motion.div
                  whileHover={{ x: 10, scale: 1.05 }}
                  className="flex items-center gap-3 text-gray-400 cursor-pointer"
                >
                  <Phone size={20} className="text-green-400" />
                  <span>(+91) 8870752656</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 10, scale: 1.05 }}
                  className="flex items-center gap-3 text-gray-400 cursor-pointer"
                >
                  <Mail size={20} className="text-blue-400" />
                  <span>suryag.chinnathambi@gmail.com</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-6"
              >
                {[
                  { icon: Github, href: "https://github.com/Suryzz", color: "hover:text-purple-400" },
                  { icon: Linkedin, href: "http://www.linkedin.com/in/surya-c-a4627725a/", color: "hover:text-blue-400" },
                  { icon: Mail, href: "mailto:suryag.chinnathambi@gmail.com", color: "hover:text-pink-400" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    className={`${social.color} transition-colors text-gray-400`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={32} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 60px rgba(168, 85, 247, 0.4)',
                    '0 0 80px rgba(236, 72, 153, 0.6)',
                    '0 0 60px rgba(168, 85, 247, 0.4)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative rounded-2xl overflow-hidden"
              >
                <div className="w-full aspect-square bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-1 rounded-2xl">
                  <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
                    {/* Your Profile Picture */}
                    <img
                      src={profilePic}
                      alt="Surya C Profile"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Featured Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-500 text-transparent bg-clip-text">
              Featured Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid for better spacing */}
              {[
                { title: "Penetration Testing", glow: "from-purple-500 to-pink-500", icon: Shield, description: "Identifying vulnerabilities and securing systems." },
                { title: "Ethical Hacking", glow: "from-blue-500 to-cyan-500", icon: Code, description: "Simulating attacks to find and fix security flaws." },
                { title: "Web Development", glow: "from-orange-500 to-red-500", icon: Globe, description: "Building responsive and scalable web applications." }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, // Slightly less aggressive scale
                    rotate: 0, // Removed rotate for a cleaner hover
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)", // More pronounced shadow
                    y: -10 // Lift the card slightly
                  }}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${skill.glow} text-white text-center shadow-2xl cursor-pointer transform transition-all duration-300 border border-transparent hover:border-white/20`}
                >
                  <skill.icon size={48} className="mx-auto mb-4 text-white/80" /> {/* Icon added */}
                  <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-lg text-white/70">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
