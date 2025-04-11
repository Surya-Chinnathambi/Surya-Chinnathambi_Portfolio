import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import profileImage from '../aset/profileimage.jpg';

const highlights = [
  "Network Security Specialist",
  "Penetration Testing Expert",
  "Cybersecurity Enthusiast",
  "Web Developer"
];

export function Home() {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
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

        {/* Featured Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Network Security", glow: "from-blue-500 to-cyan-400" },
              { title: "Penetration Testing", glow: "from-purple-500 to-pink-400" },
              { title: "Ethical Hacking", glow: "from-green-500 to-emerald-400" },
              { title: "Web Development", glow: "from-orange-500 to-yellow-400" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${skill.glow} text-white text-center shadow-lg transition-transform duration-300`}
              >
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
