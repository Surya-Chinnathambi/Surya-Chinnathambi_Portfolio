import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import aiessentials from '../aset/aiessentials.pdf';
import cisco from '../aset/cisco.pdf';

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

const certificates = [
  {
    name: "Google AI Essentials",
    issuer: "Coursera",
   <li><a href={aiessentials} target="_blank" rel="noopener noreferrer">AI Essentials</a></li>,
    date: "2023"
  },
  {
    name: "Foundations of Cybersecurity",
    issuer: "Coursera",
    pdfUrl:"src/aset/coursera.pdf",
    date: "2023"
  },
  {
    name: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    pdfUrl: "src/aset/eccouncil.pdf",
    date: "2023"
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    pdfUrl: "src/aset/cisco.pdf",
    date: "2023"
  },
  {
    name: "Fundamentals of Deep Learning",
    issuer: "NVIDIA DLI",
    pdfUrl: "src/aset/dli.pdf",
    date: "2023"
  },
  {
    name: "Getting Started with AI on Jetson Nano",
    issuer: "NVIDIA DLI",
    pdfUrl: "src/aset/nano.pdf",
    date: "2023"
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
      <motion.h2 variants={item} className="text-3xl font-bold text-center mb-12">About Me</motion.h2>
      <div className="max-w-3xl mx-auto">
        <motion.div variants={item} className="bg-[#1e293b] rounded-lg p-8">
          <motion.p variants={item} className="text-gray-300 mb-6">
            A passionate and motivated cybersecurity enthusiast with a strong foundation in networking, programming,
            and security principles. Demonstrated hands-on experience with tools like Kali Linux, Nmap, Metasploit, and
            Wireshark, alongside a solid understanding of penetration testing, ethical hacking, and network defense
            mechanisms. Seeking a 6-month internship in Network Security or Penetration Testing to apply skills in
            real-world scenarios and contribute to secure and resilient systems.
          </motion.p>

          <div className="space-y-8">
            <motion.div variants={item}>
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(techColors).map(([tech, color]) => (
                  <motion.span
                    key={tech}
                    className={`${color} px-3 py-1 rounded-full text-white text-sm`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Security & Networking:</span> Kali Linux, Nmap, Metasploit, Wireshark, Burp Suite, TCP/IP, Firewalls</p>
                <p><span className="font-medium">Programming & Scripting:</span> C, Python, JavaScript, Bash</p>
                <p><span className="font-medium">Backend & DB:</span> PHP,MongoDB, MySQL</p>
                <p><span className="font-medium">Frontend:</span> HTML, CSS, JavaScript</p>
                <p><span className="font-medium">Others:</span> Git, GitHub, Firebase</p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Sri Ramakrishna Engineering College</h4>
                  <p className="text-gray-400">M.Tech CSE (5-Year Integrated) - CGPA: 7.96 (Expected 2025)</p>
                </div>
                <div>
                  <h4 className="font-medium">Government Higher Secondary School, Kallakurichi</h4>
                  <p className="text-gray-400">12th Standard - Completed May 2022</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#0f172a] p-4 rounded-lg flex items-start gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FileText className="text-blue-400 mt-1" size={20} />
                    <div className="flex-1">
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-sm text-gray-400">{cert.issuer} - {cert.date}</p>
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm mt-1"
                      >
                        View Certificate <ExternalLink size={14} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
