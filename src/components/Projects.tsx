import React, { useState } from "react";
import { ExternalLink, Github, Star, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95, rotateY: -20 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
};

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Digital On-Duty Forms",
      description: "Designed and implemented a digital platform for students to apply for on-duty leave. Built the system using HTML, CSS, JavaScript, PHP, and MySQL, ensuring smooth data handling, user authentication, and role-based access for different approval levels.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format",
      tags: ["PHP", "MySQL", "HTML/CSS", "Authentication"],
      link: "https://github.com/Surya-Chinnathambi/odform",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Wild Boar Detection & Alert System",
      description: "A solar-powered system using an ESP camera to detect wild boars in predefined areas, sending real-time mobile alerts. Designed to be cost-effective and reliable for protecting crops in remote rural areas.",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&auto=format",
      tags: ["ESP32", "Solar Power", "IoT", "ML"],
      link: "https://github.com/Suryzz",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "SecurePulse – PenTesting Tool Guide",
      description: "A categorized penetration testing toolkit for beginners and professionals. Features organized sections for Information Gathering, Vulnerability Analysis, Web App Testing, and curated payloads to increase testing efficiency in real-world scenarios and CTFs.",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&auto=format",
      tags: ["Penetration Testing", "Payloads", "CTF", "Toolkit"],
      link: "https://hackingtoolsinfo.netlify.app/",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "ISL Learning Platform (In-Progress)",
      description: "An interactive, AI-powered web application that helps users learn and practice Indian Sign Language through real-time hand gesture recognition. The platform is lightweight and browser-based, making it accessible without installation.",
      image: "https://images.unsplash.com/photo-1584697964403-b49a2918aa08?w=800&auto=format",
      tags: ["AI", "Gesture Recognition", "Eleventy.js"],
      link: "https://github.com/Suryzz",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Web Vulnerability Scanner (In-Progress)",
      description: "Automatically crawls web applications to identify vulnerabilities like SQL injection, XSS, and CSRF. Generates detailed reports outlining identified vulnerabilities, their severity, and recommended remediation steps.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format",
      tags: ["Vulnerability Scanner", "XSS", "SQLi", "CSRF"],
      link: "https://github.com/Suryzz",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "FashionChatBot E-commerce Platform",
      description: "An e-commerce platform featuring an AI chatbot for product suggestions, order tracking, and customer support. Built with React for the frontend and Python for the backend logic.",
      image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=800&auto=format",
      tags: ["React", "Python", "Chatbot", "E-commerce"],
      link: "https://fashionchatbot.netlify.app/",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            'linear-gradient(225deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
            'linear-gradient(315deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Floating orbs */}
      {[
        { top: '10%', left: '5%', color: '#a855f7' },
        { top: '25%', left: '80%', color: '#ec4899' },
        { top: '65%', left: '12%', color: '#3b82f6' },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full filter blur-3xl opacity-20"
          style={{
            width: 220,
            height: 220,
            top: orb.top,
            left: orb.left,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 16 + i * 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      ))}

      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="text-purple-400" size={32} />
            <motion.h2
              className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Featured Projects
            </motion.h2>
            <Zap className="text-pink-400" size={32} />
          </motion.div>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A collection of innovative projects showcasing security engineering, machine learning, and web development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, z: 50 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20 h-full flex flex-col"
                whileHover={{
                  boxShadow: "0 25px 70px rgba(168, 85, 247, 0.5)",
                  scale: 1.03,
                  rotateY: 5,
                }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: hoveredIndex === index
                      ? [
                        '0 0 20px rgba(168, 85, 247, 0.3)',
                        '0 0 40px rgba(236, 72, 153, 0.5)',
                        '0 0 20px rgba(168, 85, 247, 0.3)',
                      ]
                      : '0 0 0px rgba(0, 0, 0, 0)',
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40`}
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Animated light sweep */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                    animate={{
                      x: hoveredIndex === index ? [-200, 400] : -200,
                      opacity: hoveredIndex === index ? [0, 0.3, 0] : 0,
                    }}
                    transition={{ duration: 1.5 }}
                  />

                  {/* Floating star icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0,
                      rotate: hoveredIndex === index ? 0 : -180,
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="absolute top-4 right-4"
                  >
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                        scale: { duration: 1.5, repeat: Infinity },
                      }}
                    >
                      <Star className="text-yellow-400 fill-yellow-400" size={28} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <motion.h3
                    className="text-2xl font-bold mb-3 text-white"
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(168, 85, 247, 0.8)",
                    }}
                  >
                    <motion.span
                      className={hoveredIndex === index ? `bg-gradient-to-r ${project.gradient} text-transparent bg-clip-text` : ''}
                      animate={{
                        backgroundPosition: hoveredIndex === index ? ['0%', '100%', '0%'] : '0%',
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{ backgroundSize: '200%' }}
                    >
                      {project.title}
                    </motion.span>
                  </motion.h3>

                  <motion.p
                    className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow"
                    animate={{
                      color: hoveredIndex === index ? '#e5e7eb' : '#9ca3af',
                    }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.1 * tagIndex }}
                        whileHover={{
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          boxShadow: "0 5px 15px rgba(168, 85, 247, 0.4)",
                        }}
                        className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.gradient} shadow-lg cursor-pointer`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-purple-500/50 transition-shadow relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <ExternalLink size={16} className="relative z-10" />
                      <span className="relative z-10">View Project</span>
                    </motion.a>
                    <motion.a
                      href={project.link.includes('github') ? project.link : 'https://github.com/Surya-Chinnathambi'}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        backgroundColor: '#4c1d95',
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={20} className="text-gray-300" />
                    </motion.a>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.15 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} blur-2xl -z-10 pointer-events-none`}
                  transition={{ duration: 0.3 }}
                />

                {/* Particle burst on hover */}
                {hoveredIndex === index && [...Array(8)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                    initial={{ x: '50%', y: '50%', opacity: 1 }}
                    animate={{
                      x: `${50 + Math.cos((i * Math.PI * 2) / 8) * 100}%`,
                      y: `${50 + Math.sin((i * Math.PI * 2) / 8) * 100}%`,
                      opacity: 0,
                      scale: [1, 0],
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
