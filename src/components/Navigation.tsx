import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, FolderKanban, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home },
  { name: 'About', icon: User },
  { name: 'Projects', icon: FolderKanban },
  { name: 'Contact', icon: Mail }
];

export function Navigation({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section: string) => {
    setActiveSection(section.toLowerCase());
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${scrolled
          ? 'backdrop-blur-xl bg-[var(--surface-strong)]/90 border-[var(--line-strong)] shadow-[0_10px_30px_rgba(0,0,0,0.28)]'
          : 'backdrop-blur-sm bg-[var(--surface)]/65 border-[var(--line)]'
        } py-4 px-4 md:px-6`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => handleClick('home')} className="text-left">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Portfolio</p>
          <h1 className="text-xl md:text-2xl font-semibold text-[var(--text)]">Surya C</h1>
        </button>

        <ul className="hidden md:flex items-center gap-2 p-1 rounded-full bg-[var(--surface)] border border-[var(--line)]">
          {navItems.map(({ name, icon: Icon }) => (
            <li key={name} className="relative">
              <button
                onClick={() => handleClick(name)}
                className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === name.toLowerCase()
                    ? 'text-[var(--text)]'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                  }`}
              >
                <Icon size={16} />
                {name}
              </button>

              {activeSection === name.toLowerCase() && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-[var(--brand)]/20 border border-[var(--brand)]/40"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--text)] p-2 rounded-xl border border-[var(--line)] bg-[var(--surface)]"
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-3 p-3 space-y-2 rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)]/95 backdrop-blur-xl"
          >
            {navItems.map(({ name, icon: Icon }) => (
              <motion.li
                key={name}
                whileTap={{ scale: 0.95 }}
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.04 }}
              >
                <button
                  onClick={() => handleClick(name)}
                  className={`w-full flex items-center justify-center gap-3 text-sm px-4 py-3 rounded-xl ${activeSection === name.toLowerCase()
                      ? 'text-[var(--text)] bg-[var(--brand)]/20 border border-[var(--brand)]/30'
                      : 'text-[var(--muted)] hover:text-[var(--text)] hover:bg-white/5'
                    }`}
                >
                  <Icon size={18} />
                  {name}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
