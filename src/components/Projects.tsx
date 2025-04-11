import React from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export function Projects() {
  const projects = [
    {
      title: "Digital On-Duty Forms",
      description: "Developed a secure digital platform for student leave applications with role-based access. Focused on user authentication and access control using PHP and MySQL. Emphasized secure data handling and basic encryption techniques.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&auto=format&fit=crop&q=80",
      tags: ["PHP", "MySQL", "Security"],
      link: "https://github.com/Surya-Chinnathambi/odform"
    },
    {
      title: "Vulnerability Assessment on Local Network",
      description: "Used Nmap to scan devices and ports on a simulated internal network. Employed Metasploit for exploit testing on Metasploitable 2 and Kali Linux VM lab. Analyzed packet traffic using Wireshark to detect suspicious activities.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&auto=format&fit=crop&q=80",
      tags: ["Nmap", "Metasploit", "Wireshark"],
      link: "https://github.com/Surya-Chinnathambi/odform"
    },
    {
      title: "Wild Boar Detection & Sound Alert System",
      description: "Built a smart system using YOLOv8 and ESP32-CAM for detecting wild boars in farmlands. Integrated sound alerts via ESP32 board and trained ML models for accurate identification and minimal false positives.",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=600&h=400&auto=format&fit=crop&q=80",
      tags: ["YOLOv8", "ESP32", "Machine Learning"],
      link: "https://github.com/Surya-Chinnathambi/odform"
    },
    {
      title: "Indian Sign Language Learning Platform",
      description: "Created an intuitive web-based platform to help users learn Indian Sign Language. Included gesture recognition, visual examples, quizzes, and progress tracking for better learning outcomes.",
      image: "https://images.unsplash.com/photo-1584697964403-b49a2918aa08?w=600&h=400&auto=format&fit=crop&q=80",
      tags: ["React", "ML", "Accessibility"],
      link: "https://github.com/Surya-Chinnathambi/odform"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="container mx-auto px-4 py-20"
    >
      <motion.h2
        variants={item}
        className="text-4xl font-bold text-center mb-16 text-white"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.04 }}
            className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl group"
          >
            <div className="overflow-hidden">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-white flex items-center gap-2 font-medium"
                >
                  <FileText size={18} /> View Report
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
