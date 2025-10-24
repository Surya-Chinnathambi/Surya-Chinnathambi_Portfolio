import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  },
};

export function Projects() {
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
    <div className="relative min-h-screen py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] -z-10" />
      
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of innovative projects showcasing security engineering, machine learning, and web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <motion.div
                className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20 h-full flex flex-col" // Added h-full and flex display
                whileHover={{ 
                  boxShadow: "0 20px 60px rgba(168, 85, 247, 0.4)",
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity`} />
                  
                  {/* Floating star icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <Star className="text-yellow-400 fill-yellow-400" size={24} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow"> {/* Added flex-grow */}
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * tagIndex }}
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.gradient} shadow-lg`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-auto"> {/* Added mt-auto to push to bottom */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-purple-500/50 transition-shadow"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </motion.a>
                    <motion.a
                      href={project.link.includes('github') ? project.link : 'https://github.com/Surya-Chinnathambi'} // Link to specific repo or general profile
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, rotate: 360 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={20} className="text-gray-300" />
                    </motion.a>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 blur-3xl -z-10`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
