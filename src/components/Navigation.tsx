import React, { useState } from 'react';
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

  const handleClick = (section: string) => {
    setActiveSection(section.toLowerCase());
    setMenuOpen(false); // Close menu on selection
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="backdrop-blur-md bg-[#1e293b]/80 shadow-lg py-4 px-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Surya</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 relative">
          {navItems.map(({ name, icon: Icon }) => (
            <motion.li key={name} className="group relative">
              <button
                onClick={() => handleClick(name)}
                className={`flex items-center gap-2 text-lg transition-all ${
                  activeSection === name.toLowerCase()
                    ? 'text-white font-semibold'
                    : 'text-gray-400 group-hover:text-white'
                }`}
              >
                <Icon size={18} />
                {name}
              </button>
              {/* Animated underline */}
              <motion.div
                layoutId="underline"
                className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-white ${
                  activeSection === name.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full transition-all duration-300'
                }`}
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-4 flex flex-col space-y-4 items-center bg-[#1e293b]/80 rounded-xl py-4"
          >
            {navItems.map(({ name, icon: Icon }) => (
              <motion.li key={name} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => handleClick(name)}
                  className={`flex items-center gap-3 text-lg ${
                    activeSection === name.toLowerCase()
                      ? 'text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
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
