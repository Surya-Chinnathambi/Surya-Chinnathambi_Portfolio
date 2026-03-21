import React from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, Briefcase, Code, ExternalLink, FileText, Shield } from 'lucide-react';

import aiEssentialsPdf from '../aset/aiessentials.pdf';
import courseraCybersecurityPdf from '../aset/coursera.pdf';
import ecCouncilPdf from '../aset/eccouncil.pdf';
import ciscoPdf from '../aset/cisco.pdf';
import dliPdf from '../aset/dli.pdf';
import jetsonNanoPdf from '../aset/nano.pdf';

const technologies = [
  'Kali Linux',
  'Nmap',
  'Metasploit',
  'Wireshark',
  'Burp Suite',
  'TCP/IP',
  'React',
  'JavaScript',
  'Java',
  'Spring Boot',
  'MySQL',
  'Git',
];

const highlights = [
  'Completed 95+ rooms on TryHackMe to practice real-world cybersecurity labs.',
  'Built and tested multiple cybersecurity tools in personal and academic projects.',
  'Regularly practice with Capture the Flag challenges to sharpen offensive and defensive skills.',
];

const certificates = [
  { name: 'Google AI Essentials', issuer: 'Coursera', date: '2023', icon: Brain, link: aiEssentialsPdf },
  { name: 'Foundations of Cybersecurity', issuer: 'Coursera', date: '2023', icon: Shield, link: courseraCybersecurityPdf },
  { name: 'Ethical Hacking Essentials', issuer: 'EC-Council', date: '2023', icon: Code, link: ecCouncilPdf },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', date: '2023', icon: Shield, link: ciscoPdf },
  { name: 'Fundamentals of Deep Learning', issuer: 'NVIDIA DLI', date: '2023', icon: Brain, link: dliPdf },
  { name: 'Getting Started with AI on Jetson Nano', issuer: 'NVIDIA DLI', date: '2023', icon: Brain, link: jetsonNanoPdf },
];

export function About() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--brand)] mb-3">About</p>
        <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text)]">Security-first developer with product instincts.</h2>
        <p className="text-[var(--muted)] mt-4 leading-relaxed">
          I combine secure engineering practices with frontend craftsmanship to build products that are dependable, intuitive, and fast.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8"
        >
          <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">Cybersecurity Engagement</h3>
          <ul className="space-y-3 text-[var(--muted)] leading-relaxed">
            {highlights.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-[var(--brand)]">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://tryhackme.com/p/SuryaChinnathambi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-5 items-center gap-2 text-sm text-[var(--brand)] hover:text-[var(--brand-strong)] transition-colors"
          >
            TryHackMe Profile
            <ExternalLink size={14} />
          </a>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-[var(--text)] mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-full border border-[var(--line)] text-sm text-[var(--text)] bg-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="space-y-4"
        >
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
            <div className="flex items-center gap-2 mb-2">
              <Award size={18} className="text-[var(--brand)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">Education</h4>
            </div>
            <p className="text-[var(--text)]">Sri Ramakrishna Engineering College</p>
            <p className="text-sm text-[var(--muted)]">M.Tech CSE (5-Year Integrated) • CGPA 7.96</p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={18} className="text-[var(--brand)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">Experience</h4>
            </div>
            <p className="text-[var(--text)]">CyberSecurity-Nxxt, Coimbatore</p>
            <p className="text-sm text-[var(--muted)]">CyberSecurity Intern • July 2025 - Jan 2026</p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
            <div className="flex items-center gap-2 mb-3">
              <FileText size={18} className="text-[var(--brand)]" />
              <h4 className="text-lg font-semibold text-[var(--text)]">Certifications</h4>
            </div>
            <div className="space-y-2">
              {certificates.map((cert) => {
                const Icon = cert.icon;
                return (
                  <a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-[var(--line)] p-3 hover:border-[var(--brand)]/45 transition-colors"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Icon size={16} className="text-[var(--brand)] shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm text-[var(--text)] truncate">{cert.name}</p>
                        <p className="text-xs text-[var(--muted)]">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-[var(--muted)] shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
