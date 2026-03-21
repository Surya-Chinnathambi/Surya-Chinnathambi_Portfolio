import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';

const About = lazy(() => import('./components/About').then((m) => ({ default: m.About })));
const Projects = lazy(() => import('./components/Projects').then((m) => ({ default: m.Projects })));
const Contact = lazy(() => import('./components/Contact').then((m) => ({ default: m.Contact })));

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

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
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
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="relative z-10">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          {activeSection === 'home' && <Home setActiveSection={setActiveSection} />}
          <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center text-[var(--muted)]">Loading section...</div>}>
            {activeSection === 'about' && <About />}
            {activeSection === 'projects' && <Projects />}
            {activeSection === 'contact' && <Contact />}
          </Suspense>
        </main>
        <footer className="text-center py-8 text-sm text-[var(--muted)] border-t border-[var(--line)] mt-8">
          <p>© 2026 Surya Chinnathambi. Designed with intention.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
