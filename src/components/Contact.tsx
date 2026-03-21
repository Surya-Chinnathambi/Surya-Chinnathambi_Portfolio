import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const contacts = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(+91) 8870752656',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'suryag.chinnathambi@gmail.com',
      href: 'mailto:suryag.chinnathambi@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kallakurichi, Tamil Nadu',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Surya C',
      href: 'http://www.linkedin.com/in/surya-c-a4627725a/',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'Suryzz',
      href: 'https://github.com/Suryzz',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold text-center text-[var(--text)]"
        >
          Let&apos;s Build Something Useful
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="text-center text-[var(--muted)] mb-12 text-base md:text-lg max-w-2xl mx-auto"
        >
          Open to internships, full-time roles, and security-focused collaborations.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold text-[var(--text)] mb-6">Contact Information</h3>

            <div className="space-y-3">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <div key={contact.title} className="flex items-center gap-3 p-3 rounded-xl border border-[var(--line)] bg-[var(--surface-soft)]">
                    <div className="p-2 rounded-lg bg-white/5 border border-[var(--line)]">
                      <Icon size={16} className="text-[var(--brand)]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">{contact.title}</p>
                      {contact.href ? (
                        <a href={contact.href} target="_blank" rel="noopener noreferrer" className="text-[var(--text)] hover:text-[var(--brand)] transition-colors break-all">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-[var(--text)]">{contact.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-4"
          >
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-3 text-[var(--text)]">Availability</h3>
              <p className="text-[var(--muted)] mb-4 leading-relaxed">
                Currently seeking a 6-month internship in network security or penetration testing, and open to high-impact web engineering opportunities.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/35 bg-emerald-400/12 text-emerald-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                Available for Opportunities
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-3 text-[var(--text)]">Primary Interests</h3>
              <ul className="space-y-2">
                {['Penetration Testing', 'Ethical Hacking', 'Network Security', 'Web Security', 'Vulnerability Assessment'].map((interest) => (
                  <li key={interest} className="flex items-center gap-2 text-[var(--muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                    {interest}
                  </li>
                ))}
              </ul>

              <p className="text-[var(--muted)] mt-6 mb-4 leading-relaxed">
                If you are building in security, AI, or product engineering, I would love to collaborate.
              </p>

              <button
                onClick={() => window.location.href = 'mailto:suryag.chinnathambi@gmail.com'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand)] text-[var(--bg)] font-medium"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
