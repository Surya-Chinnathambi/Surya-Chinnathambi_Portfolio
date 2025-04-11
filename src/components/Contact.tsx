import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Contact() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="container mx-auto px-4 py-20"
    >
      <motion.h2
        variants={item}
        className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        variants={item}
        whileHover={{ scale: 1.02 }}
        className="max-w-xl mx-auto relative rounded-2xl overflow-hidden"
      >
        {/* Glowing Aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-2xl opacity-25 animate-spin-slower rounded-2xl z-0"></div>

        {/* Main Card */}
        <div className="relative z-10 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-xl shadow-pink-500/20 p-8 rounded-2xl backdrop-blur-sm space-y-6">
          {[
            {
              icon: <Phone size={24} className="text-blue-400 group-hover:animate-pulse" />,
              title: 'Phone',
              value: '(+91) 8870752656',
            },
            {
              icon: <Mail size={24} className="text-green-400 group-hover:animate-spin" />,
              title: 'Email',
              value: (
                <a
                  href="mailto:suryag.chinnathambi@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  suryag.chinnathambi@gmail.com
                </a>
              ),
            },
            {
              icon: <Linkedin size={24} className="text-blue-500 group-hover:animate-pulse" />,
              title: 'LinkedIn',
              value: (
                <a
                  href="http://www.linkedin.com/in/surya-c-a4627725a/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Surya C
                </a>
              ),
            },
            {
              icon: <Github size={24} className="text-purple-400 group-hover:animate-spin" />,
              title: 'GitHub',
              value: (
                <a
                  href="https://github.com/Suryzz"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suryzz
                </a>
              ),
            },
          ].map((contact, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 group"
            >
              {contact.icon}
              <div>
                <h3 className="font-medium text-white">{contact.title}</h3>
                <p>{contact.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
