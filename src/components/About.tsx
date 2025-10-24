import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Award, Code, Shield, Brain, Briefcase, Activity } from 'lucide-react'; // Added Activity icon

// --- Import your certificate PDFs ---
import aiEssentialsPdf from '../aset/aiessentials.pdf';
import courseraCybersecurityPdf from '../aset/coursera.pdf';
import ecCouncilPdf from '../aset/eccouncil.pdf';
import ciscoPdf from '../aset/cisco.pdf';
import dliPdf from '../aset/dli.pdf';
import jetsonNanoPdf from '../aset/nano.pdf';


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const techColors = {
  'Kali Linux': 'bg-blue-500',
  'Nmap': 'bg-green-500',
  'Metasploit': 'bg-red-500',
  'Wireshark': 'bg-purple-500',
  'Burp Suite': 'bg-yellow-500',
  'TCP/IP': 'bg-indigo-500',
  'Firewalls': 'bg-pink-500',
  'Java': 'bg-orange-500',
  'JavaScript': 'bg-yellow-400',
  'React': 'bg-cyan-500',
  'Spring Boot': 'bg-green-400',
  'MySQL': 'bg-blue-400',
  'Git': 'bg-red-400',
};

const experiences = [
  {
    company: "CyberSecurity-Nxxt",
    location: "Coimbatore",
    role: "CyberSecurity Intern",
    duration: "July 2025 - Jan 2026"
  }
];

const certificates = [
  {
    name: "Google AI Essentials",
    issuer: "Coursera",
    date: "2023",
    icon: Brain,
    link: aiEssentialsPdf
  },
  {
    name: "Foundations of Cybersecurity",
    issuer: "Coursera",
    date: "2023",
    icon: Shield,
    link: courseraCybersecurityPdf
  },
  {
    name: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    date: "2023",
    icon: Code,
    link: ecCouncilPdf
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2023",
    icon: Shield,
    link: ciscoPdf
  },
  {
    name: "Fundamentals of Deep Learning",
    issuer: "NVIDIA DLI",
    date: "2023",
    icon: Brain,
    link: dliPdf
  },
  {
    name: "Getting Started with AI on Jetson Nano",
    issuer: "NVIDIA DLI",
    date: "2023",
    icon: Brain,
    link: jetsonNanoPdf
  }
];

export function About() {
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="container mx-auto px-4 py-20"
    >
      <motion.h2 
        variants={item} 
        className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
      >
        About Me
      </motion.h2>
      
      <motion.p
        variants={item}
        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Passionate cybersecurity professional with expertise in penetration testing and secure development
      </motion.p>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          variants={item} 
          className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 shadow-2xl border border-purple-500/20"
        >
          <motion.p variants={item} className="text-gray-300 mb-8 leading-relaxed text-lg">
            A passionate and motivated cybersecurity enthusiast with a strong foundation in networking, programming,
            and security principles. Demonstrated hands-on experience with tools like Kali Linux, Nmap, Metasploit, and
            Wireshark, alongside a solid understanding of penetration testing, ethical hacking, and network defense
            mechanisms.
          </motion.p>

          <div className="space-y-10">

            {/* START: New Cybersecurity Engagement Section */}
            <motion.div variants={item}>
              <div className="flex items-center gap-3 mb-4">
                <Activity className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-semibold">Cybersecurity Engagement</h3>
              </div>
              <ul className="space-y-3 text-gray-300 list-disc list-inside bg-[#0f172a] p-5 rounded-lg border border-cyan-500/10">
                <li>Completed 95+ rooms on TryHackMe to practice real-world cybersecurity labs.</li>
                <li>Built and tested multiple cybersecurity tools in personal and academic projects.</li>
                <li>Continuously learning and practicing cybersecurity skills using Capture the Flag (CTF) platforms.</li>
                <li>
                  <a 
                    href="https://tryhackme.com/p/SuryaChinnathambi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline inline-flex items-center gap-1.5 transition-colors"
                  >
                    CTF Practice - TryHackMe <ExternalLink size={14} />
                  </a>
                </li>
              </ul>
            </motion.div>
            {/* END: New Section */}

            {/* Technologies */}
            <motion.div variants={item}>
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-400" size={28} />
                <h3 className="text-2xl font-semibold">Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {Object.entries(techColors).map(([tech, color], index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`${color} px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg cursor-pointer`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* ... other sections ... */}
            {/* Skills */}
            <motion.div variants={item}>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-blue-400" size={28} />
                <h3 className="text-2xl font-semibold">Skills</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Security & Networking", skills: "Kali Linux, Nmap, Metasploit, Wireshark, Burp Suite, TCP/IP, Firewalls" },
                  { title: "Programming & Scripting", skills: "C, Python, JavaScript, Bash" },
                  { title: "Backend & DB", skills: "PHP, MongoDB, MySQL" },
                  { title: "Frontend", skills: "HTML, CSS, JavaScript, React" }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-[#0f172a] p-4 rounded-lg border border-purple-500/10"
                  >
                    <p className="font-medium text-purple-400 mb-2">{category.title}</p>
                    <p className="text-sm text-gray-400">{category.skills}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={item}>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-green-400" size={28} />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    school: "Sri Ramakrishna Engineering College",
                    degree: "M.Tech CSE (5-Year Integrated)",
                    info: "CGPA: 7.96 (Expected 2025)"
                  },
                  {
                    school: "Government Higher Secondary School, Kallakurichi",
                    degree: "12th Standard",
                    info: "Completed May 2022"
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-[#0f172a] p-5 rounded-lg border border-green-500/10"
                  >
                    <h4 className="font-medium text-lg text-white">{edu.school}</h4>
                    <p className="text-gray-400">{edu.degree}</p>
                    <p className="text-sm text-green-400 mt-1">{edu.info}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Experience */}
            <motion.div variants={item}>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-orange-400" size={28} />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-[#0f172a] p-5 rounded-lg border border-orange-500/10"
                  >
                    <h4 className="font-medium text-lg text-white">{exp.role}</h4>
                    <p className="text-gray-400">{exp.company} - {exp.location}</p>
                    <p className="text-sm text-orange-400 mt-1">{exp.duration}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={item}>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-pink-400" size={28} />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificates.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <a 
                      href={cert.link} 
                      key={index} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)",
                          rotate: 2
                        }}
                        className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] h-full p-5 rounded-xl border border-pink-500/20 cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="text-pink-400" size={24} />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-medium text-white mb-1">{cert.name}</h4>
                            <p className="text-sm text-gray-400">{cert.issuer}</p>
                            <p className="text-xs text-pink-400 mt-2">{cert.date}</p>
                          </div>
                          <ExternalLink size={16} className="text-gray-500" />
                        </div>
                      </motion.div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
