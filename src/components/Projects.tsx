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
      description: "Developed a secure digital platform for student leave applications with role-based access. Implemented user authentication, form validation, and server-side access control using PHP and MySQL.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format",
      tags: ["PHP", "MySQL", "Security"],
      link: "https://github.com/Surya-Chinnathambi/odform",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Vulnerability Assessment on Local Network",
      description: "Performed comprehensive internal network scans using Nmap, validated exploits via Metasploit on isolated lab VMs, and analyzed packet captures with Wireshark.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format",
      tags: ["Nmap", "Metasploit", "Wireshark"],
      link: "https://github.com/Suryzz",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Wild Boar Detection & Sound Alert System",
      description: "Built an edge ML solution using YOLOv8 on an ESP32-CAM pipeline to detect wild boars in farmland, triggering configurable sound alerts to reduce crop damage.",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&auto=format",
      tags: ["YOLOv8", "ESP32", "Machine Learning"],
      link: "https://github.com/Suryzz",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Indian Sign Language Learning Platform",
      description: "Created an intuitive web application with gesture recognition, interactive quizzes and progress tracking to help users learn Indian Sign Language.",
      image: "https://images.unsplash.com/photo-1584697964403-b49a2918aa08?w=800&auto=format",
      tags: ["React", "ML", "Accessibility"],
      link: "https://github.com/Suryzz",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "HackToolkit – Web Hacking Toolkit",
      description: "A centralized hub for offensive security tooling and curated learning resources covering recon, fuzzing, XSS, SQLi and OWASP Top 10 patterns.",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&auto=format",
      tags: ["Web Hacking", "OWASP", "Toolkit"],
      link: "https://hackingtoolsinfo.netlify.app/",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Network Security Monitoring Dashboard",
      description: "Real-time network traffic analysis dashboard with threat detection capabilities, built with modern web technologies and security best practices.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
      tags: ["React", "Security", "Dashboard"],
      link: "https://github.com/Suryzz",
      gradient: "from-indigo-500 to-purple-500"
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
                className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20"
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
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
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
                  <div className="flex gap-3">
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
                      href={project.link}
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
