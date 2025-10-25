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
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-x-hidden">
      <CustomCursor />
      <ParticleNetwork />
      
      {/* Wrapper with higher z-index for content */}
      <div className="relative z-10">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          {activeSection === 'home' && <Home />}
          {activeSection === 'about' && <About />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'contact' && <Contact />}
        </main>
        <footer className="text-center py-8 text-gray-400">
          <p>© 2024 Surya C. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
