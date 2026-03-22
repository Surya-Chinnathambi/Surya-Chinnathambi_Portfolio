import React from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
      className="container mx-auto px-4 py-20 min-h-screen flex items-center"
    >
      <div className="w-full">
        <motion.h2
          variants={item}
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          variants={item}
          className="text-center text-gray-400 mb-12 text-lg"
        >
          Let's connect and discuss opportunities in cybersecurity
        </motion.p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <motion.div
            variants={item}
            className="relative"
          >
            {/* Pulsing glow effect */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 60px rgba(168, 85, 247, 0.3)',
                  '0 0 80px rgba(236, 72, 153, 0.5)',
                  '0 0 60px rgba(168, 85, 247, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl blur-xl opacity-30"
            />

            <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 shadow-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: 'Phone',
                    value: '(+91) 8870752656',
                    color: 'text-green-400',
                    bgColor: 'bg-green-400/10',
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    value: 'suryag.chinnathambi@gmail.com',
                    href: 'mailto:suryag.chinnathambi@gmail.com',
                    color: 'text-blue-400',
                    bgColor: 'bg-blue-400/10',
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    value: 'Kallakurichi, Tamil Nadu',
                    color: 'text-red-400',
                    bgColor: 'bg-red-400/10',
                  },
                  {
                    icon: Linkedin,
                    title: 'LinkedIn',
                    value: 'Surya C',
                    href: 'http://www.linkedin.com/in/surya-c-a4627725a/',
                    color: 'text-cyan-400',
                    bgColor: 'bg-cyan-400/10',
                  },
                  {
                    icon: Github,
                    title: 'GitHub',
                    value: 'Suryzz',
                    href: 'https://github.com/Suryzz',
                    color: 'text-purple-400',
                    bgColor: 'bg-purple-400/10',
                  },
                ].map((contact, i) => {
                  const Icon = contact.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={item}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className={`${contact.bgColor} p-3 rounded-xl`}
                        >
                          <Icon className={contact.color} size={24} />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-400 text-sm">{contact.title}</h4>
                          {contact.href ? (
                            <a
                              href={contact.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-purple-400 transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-white">{contact.value}</p>
                          )}
                        </div>
                        {contact.href && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className="text-purple-400"
                          >
                            <Send size={18} />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-sm font-medium text-gray-400 mb-4">Connect on Social Media</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/Suryzz', color: 'hover:text-purple-400' },
                    { icon: Linkedin, href: 'http://www.linkedin.com/in/surya-c-a4627725a/', color: 'hover:text-blue-400' },
                    { icon: Mail, href: 'mailto:suryag.chinnathambi@gmail.com', color: 'hover:text-pink-400' },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 bg-gray-800 rounded-xl ${social.color} text-gray-400 transition-colors`}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Availability Card */}
          <motion.div
            variants={item}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Availability</h3>
              <p className="text-gray-300 mb-4">
                Currently seeking a 6-month internship in Network Security or Penetration Testing
              </p>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full text-green-400 font-medium"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for Opportunities
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Interests</h3>
              <ul className="space-y-3">
                {[
                  'Penetration Testing',
                  'Ethical Hacking',
                  'Network Security',
                  'Web Application Security',
                  'Vulnerability Assessment'
                ].map((interest, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
                    {interest}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Let's Collaborate</h3>
              <p className="text-gray-300 mb-4">
                Open to collaborating on cybersecurity projects, research, and innovative security solutions
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:suryag.chinnathambi@gmail.com'}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-orange-500/50 transition-shadow flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
