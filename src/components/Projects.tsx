import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Digital On-Duty Forms',
    description:
      'A role-based platform for students and staff to manage on-duty leave approvals with secure authentication and streamlined workflows.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1000&auto=format',
    tags: ['PHP', 'MySQL', 'Authentication'],
    link: 'https://github.com/Surya-Chinnathambi/odform',
  },
  {
    title: 'Wild Boar Detection and Alert System',
    description:
      'A solar-powered IoT setup that detects wildlife movement and sends live alerts to reduce crop damage in rural areas.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1000&auto=format',
    tags: ['ESP32', 'IoT', 'ML'],
    link: 'https://github.com/Suryzz',
  },
  {
    title: 'SecurePulse PenTesting Tool Guide',
    description:
      'A categorized toolkit that helps learners and practitioners discover the right penetration testing tools and payload flows quickly.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1000&auto=format',
    tags: ['Pentesting', 'CTF', 'Security'],
    link: 'https://hackingtoolsinfo.netlify.app/',
  },
  {
    title: 'ISL Learning Platform',
    description:
      'An AI-powered platform that supports Indian Sign Language learning through browser-based real-time gesture recognition.',
    image: 'https://images.unsplash.com/photo-1584697964403-b49a2918aa08?w=1000&auto=format',
    tags: ['AI', 'Gesture Recognition', 'Web'],
    link: 'https://github.com/Suryzz',
  },
  {
    title: 'Web Vulnerability Scanner',
    description:
      'A crawler-driven scanner that detects common vulnerabilities and provides actionable severity-based remediation reports.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1000&auto=format',
    tags: ['XSS', 'SQLi', 'CSRF'],
    link: 'https://github.com/Suryzz',
  },
  {
    title: 'FashionChatBot E-commerce',
    description:
      'A shopping experience enhanced with conversational AI for smart recommendations, support, and order insights.',
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=1000&auto=format',
    tags: ['React', 'Python', 'Chatbot'],
    link: 'https://fashionchatbot.netlify.app/',
  },
];

export function Projects() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
          <Sparkles size={14} className="text-[var(--brand)]" />
          Portfolio Work
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text)] mt-4">Selected projects with real-world impact</h2>
        <p className="text-[var(--muted)] mt-4">
          Projects across cybersecurity, machine learning, and full-stack product development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>

            <div className="p-5 flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold text-[var(--text)]">{project.title}</h3>
                <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full border border-[var(--line)] text-xs text-[var(--text)] bg-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--brand)] text-[var(--bg)] text-sm font-medium"
                >
                  View
                  <ExternalLink size={15} />
                </a>
                <a
                  href={project.link.includes('github') ? project.link : 'https://github.com/Surya-Chinnathambi'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--line)] text-[var(--text)]"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
