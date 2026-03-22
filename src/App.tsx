import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';

const About = lazy(() => import('./components/About').then((m) => ({ default: m.About })));
const Projects = lazy(() => import('./components/Projects').then((m) => ({ default: m.Projects })));
const Contact = lazy(() => import('./components/Contact').then((m) => ({ default: m.Contact })));
const CustomCursor = lazy(() => import('./components/CustomCursor').then((m) => ({ default: m.CustomCursor })));
const ParticleNetwork = lazy(() => import('./components/ParticleNetwork').then((m) => ({ default: m.ParticleNetwork })));

const seoBySection: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Surya C | Cybersecurity Enthusiast & Web Developer',
    description:
      'Portfolio of Surya C showcasing cybersecurity projects, penetration testing practice, and web development work.',
  },
  about: {
    title: 'About Surya C | Cybersecurity Skills & Experience',
    description:
      'Learn about Surya C, cybersecurity experience, technical skills, certifications, and practical training.',
  },
  projects: {
    title: 'Projects | Surya C Portfolio',
    description:
      'Explore cybersecurity and software projects built by Surya C, including security tools and web applications.',
  },
  contact: {
    title: 'Contact Surya C | Cybersecurity Opportunities',
    description:
      'Connect with Surya C for internships, cybersecurity collaborations, and project opportunities.',
  },
};

const ensureMetaTag = (name: 'description' | 'robots') => {
  let tag = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement('meta');
    tag.name = name;
    document.head.appendChild(tag);
  }

  return tag;
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [enableHeavyEffects, setEnableHeavyEffects] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateEffectsFlag = () => {
      const isSmallViewport = window.innerWidth < 1024;
      setEnableHeavyEffects(!mediaQuery.matches && !isSmallViewport);
    };

    updateEffectsFlag();

    window.addEventListener('resize', updateEffectsFlag);
    mediaQuery.addEventListener('change', updateEffectsFlag);

    return () => {
      document.documentElement.style.scrollBehavior = '';
      window.removeEventListener('resize', updateEffectsFlag);
      mediaQuery.removeEventListener('change', updateEffectsFlag);
    };
  }, []);

  useEffect(() => {
    const seo = seoBySection[activeSection] ?? seoBySection.home;
    document.title = seo.title;

    const descriptionTag = ensureMetaTag('description');
    descriptionTag.content = seo.description;

    const robotsTag = ensureMetaTag('robots');
    robotsTag.content = 'index, follow, max-image-preview:large';
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-x-hidden">
      <Suspense fallback={null}>
        {enableHeavyEffects && <CustomCursor />}
        {enableHeavyEffects && <ParticleNetwork />}
      </Suspense>

      {/* Wrapper with higher z-index for content */}
      <div className="relative z-10">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          {activeSection === 'home' && <Home />}
          <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center text-gray-400">Loading section...</div>}>
            {activeSection === 'about' && <About />}
            {activeSection === 'projects' && <Projects />}
            {activeSection === 'contact' && <Contact />}
          </Suspense>
        </main>
        <footer className="text-center py-8 text-gray-400">
          <p>© 2024 Surya C. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
