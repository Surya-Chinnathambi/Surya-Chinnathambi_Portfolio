import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { ParticleNetwork } from './components/ParticleNetwork';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Set smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'; // Cleanup on unmount
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-x-hidden">
      {/* Background and cursor effects */}
      <CustomCursor />
      <ParticleNetwork />

      {/* Navigation bar that tracks scroll position */}
      <Navigation activeSection={activeSection} />

      {/* Main content, all sections are rendered on one page */}
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-400 border-t border-gray-800/50">
        <p>© {new Date().getFullYear()} Surya C. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
