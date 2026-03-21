import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '15+' },
  { label: 'Core Stack', value: 'React + Node' },
  { label: 'Focus', value: 'AI and UX' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/yourprofile', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
];

export function Home({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  return (
    <section className="min-h-screen flex items-center px-4 py-28 md:py-20">
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
            <Sparkles size={14} className="text-[var(--brand)]" />
            Open to Full-Stack Roles
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[var(--text)]">
              Building thoughtful digital products that feel fast and human.
            </h2>
            <p className="text-base md:text-lg max-w-xl text-[var(--muted)] leading-relaxed">
              I am Surya Chinnathambi, a developer focused on React, Node.js, and practical AI integrations. I design interfaces and systems that are clear, performant, and easy to scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--brand)]/50 transition-colors"
              >
                <link.icon size={16} />
                <span className="text-sm">{link.label}</span>
                <ArrowUpRight size={14} className="text-[var(--muted)]" />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() => setActiveSection('projects')}
              className="px-7 py-3 rounded-xl bg-[var(--brand)] text-[var(--bg)] font-semibold shadow-[0_10px_30px_rgba(255,110,64,0.28)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
            </motion.button>
            <motion.button
              onClick={() => setActiveSection('contact')}
              className="px-7 py-3 rounded-xl border border-[var(--line-strong)] text-[var(--text)] bg-[var(--surface)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="space-y-5"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface-strong)] p-6 md:p-8">
            <div className="absolute -top-8 -right-10 w-40 h-40 rounded-full bg-[var(--brand)]/18 blur-3xl" />
            <img
              src="/profileimage.jpg"
              alt="Surya"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-24 h-24 rounded-2xl object-cover border border-[var(--line-strong)]"
            />
            <h3 className="mt-5 text-2xl font-semibold text-[var(--text)]">Full-Stack Engineer</h3>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              Blending product thinking with engineering execution to ship reliable web experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
                <p className="text-2xl font-semibold text-[var(--text)]">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)] mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => setActiveSection('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={28} />
      </motion.button>
    </section>
  );
}
