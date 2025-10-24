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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md bg-[#1e293b]/90 shadow-xl shadow-purple-500/10' 
          : 'backdrop-blur-sm bg-[#1e293b]/60'
      } py-4 px-4`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-white text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          whileHover={{ scale: 1.05 }}
        >
          Surya
        </motion.h1>

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
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon size={18} />
                </motion.div>
                {name}
              </button>
              
              {/* Animated underline */}
              {activeSection === name.toLowerCase() && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-gradient-to-r from-purple-400 to-pink-600"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Hover underline */}
              <div className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gray-400 rounded-full" />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-white"
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 flex flex-col space-y-4 items-center bg-[#1e293b]/95 rounded-xl py-6 backdrop-blur-lg"
          >
            {navItems.map(({ name, icon: Icon }) => (
              <motion.li 
                key={name} 
                whileTap={{ scale: 0.95 }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
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
