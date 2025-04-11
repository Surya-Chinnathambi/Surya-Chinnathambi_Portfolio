import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <Contact />}

      <footer className="text-center py-8 text-gray-400">
        <p>© 2024 Surya C. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;