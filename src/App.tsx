import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { CustomCursor } from './CustomCursor';
import { ParticleNetwork } from './ParticleNetwork';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Particle Network Background */}
      <ParticleNetwork />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content */}
      <main>
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 border-t border-gray-800">
        <p>© 2024 Surya C. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
