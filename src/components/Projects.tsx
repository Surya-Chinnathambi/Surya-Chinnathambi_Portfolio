import React, { useCallback, useMemo } from "react";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt";

/**
 * Enhanced Projects component
 *
 * Enhancements included:
 * - Interactive particle background using react-tsparticles (tsParticles)
 * - 3D tilt effect per card using react-parallax-tilt
 * - Staggered & advanced framer-motion animations for entrance, hover and floating decorations
 * - Animated tag pills and image shimmer overlay
 *
 * Notes:
 * - This file expects the following additional dependencies:
 *   - react-tsparticles and tsparticles
 *   - react-parallax-tilt
 *   - framer-motion (already used)
 *
 * Install with:
 *   npm i react-tsparticles tsparticles react-parallax-tilt
 *
 * or
 *
 *   yarn add react-tsparticles tsparticles react-parallax-tilt
 */

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 160, damping: 18 } },
};

export function Projects() {
  // A small curated list of projects. Descriptions expanded to avoid truncation errors.
  const projects = useMemo(
    () => [
      {
        title: "Digital On-Duty Forms",
        description:
          "Developed a secure digital platform for student leave applications with role-based access. Implemented user authentication, form validation, and server-side access control using PHP and MySQL while focusing on secure data handling and input sanitization.",
        image:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&auto=format&fit=crop&q=80",
        tags: ["PHP", "MySQL", "Security"],
        link: "https://github.com/Surya-Chinnathambi/odform",
      },
      {
        title: "Vulnerability Assessment on Local Network",
        description:
          "Performed comprehensive internal network scans using Nmap, validated exploits via Metasploit on isolated lab VMs, and analyzed packet captures with Wireshark to produce prioritized remediation recommendations.",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&auto=format&fit=crop&q=80",
        tags: ["Nmap", "Metasploit", "Wireshark"],
        link: "https://github.com/Surya-Chinnathambi/odform",
      },
      {
        title: "Wild Boar Detection & Sound Alert System",
        description:
          "Built an edge ML solution using YOLOv8 on an ESP32-CAM pipeline to detect wild boars in farmland, triggering configurable sound alerts via an ESP32 controller to reduce crop damage with low latency.",
        image:
          "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200&h=800&auto=format&fit=crop&q=80",
        tags: ["YOLOv8", "ESP32", "Machine Learning"],
        link: "https://github.com/Surya-Chinnathambi/odform",
      },
      {
        title: "Indian Sign Language Learning Platform",
        description:
          "Created an intuitive web application with gesture recognition, interactive quizzes and progress tracking to help users learn Indian Sign Language with accessibility-first design principles.",
        image:
          "https://images.unsplash.com/photo-1584697964403-b49a2918aa08?w=1200&h=800&auto=format&fit=crop&q=80",
        tags: ["React", "ML", "Accessibility"],
        link: "https://github.com/Surya-Chinnathambi/odform",
      },
      {
        title: "HackToolkit – Web Hacking Toolkit",
        description:
          "A centralized hub for offensive security tooling and curated learning resources covering recon, fuzzing, XSS, SQLi and OWASP Top 10 patterns with hands-on examples and labs.",
        image:
          "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1200&h=800&auto=format&fit=crop&q=80",
        tags: ["Web Hacking", "OWASP", "Toolkit"],
        link: "https://hackingtoolsinfo.netlify.app/",
      },
    ],
    []
  );

  // tsParticles init
  const particlesInit = useCallback(async (engine: any) => {
    // load all tsparticles features
    await loadFull(engine);
  }, []);

  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false }, // we will place particles inside a container div
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: ["grab", "repulse"] },
          onClick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.2 } },
          repulse: { distance: 130, duration: 0.4 },
          push: { quantity: 3 },
        },
      },
      particles: {
        number: { value: 40, density: { enable: true, area: 800 } },
        color: { value: ["#22d3ee", "#60a5fa", "#7c3aed", "#06b6d4"] },
        shape: { type: "circle" },
        opacity: { value: 0.7, random: { enable: true, minimumValue: 0.3 } },
        size: { value: { min: 2, max: 6 } },
        links: {
          enable: true,
          distance: 160,
          color: "#0ea5a4",
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.9,
          direction: "none",
          random: true,
          outModes: { default: "out" },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="relative">
      {/* Particles background positioned absolutely behind content */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full">
          <Particles init={particlesInit} options={particlesOptions} className="w-full h-full" />
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="container mx-auto px-4 py-20"
      >
        {/* Header with a subtle floating decoration */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-12 relative">
          <motion.div
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: [ -6, 6, -6 ], opacity: [0, 1, 1] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10"
            aria-hidden
          >
            {/* Decorative floating ring */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-30">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="24" stroke="url(#g)" strokeWidth="2" strokeOpacity="0.9" />
            </svg>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-6 text-white"
            title="Featured Projects"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-center text-gray-300"
            aria-hidden
          >
            A selection of hand-built projects showcasing security engineering, machine learning, and web tooling.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#22d3ee"
                scale={1.02}
                transitionSpeed={2500}
                className="rounded-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  initial={{ boxShadow: "0px 6px 20px rgba(2,6,23,0.6)" }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ type: "spring", stiffness: 210, damping: 20 }}
                  className="bg-gradient-to-br from-[#0b1220] via-[#071024] to-[#07102a] rounded-2xl shadow-lg overflow-hidden border border-transparent hover:border-cyan-500/30"
                >
                  {/* Image area with shimmer overlay */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      initial={{ scale: 1.05, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 + index * 0.04 }}
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* animated radial highlight */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0 pointer-events-none mix-blend-screen"
                      style={{
                        background:
                          "radial-gradient(600px 200px at 10% 20%, rgba(6,182,212,0.08), transparent 10%, transparent 100%)",
                      }}
                    />

                    {/* shimmer bar */}
                    <div
                      aria-hidden
                      className="absolute left-[-120%] top-0 h-full w-1/2 bg-white/6 blur-xl"
                      style={{
                        transform: "skewX(-18deg)",
                        animation: "shimmer 2.2s linear infinite",
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{ scale: 1.08, rotate: -2 }}
                          transition={{ type: "spring", stiffness: 300, damping: 18 }}
                          className="px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-white flex items-center gap-2 font-medium"
                        >
                          <FileText size={18} /> View Report
                        </a>
                      ) : (
                        <span className="text-gray-500 text-sm">No link available</span>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white/6 hover:bg-white/10 text-white px-3 py-1.5 rounded-md text-sm"
                        onClick={() => {
                          // subtle CTA: scroll to top of project or open link — keeps component purely presentational
                          if (project.link) window.open(project.link, "_blank", "noopener,noreferrer");
                        }}
                      >
                        Open
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Inline keyframes for shimmer - using a small style tag to avoid touching global tailwind config */}
      <style>{`
        @keyframes shimmer {
          0% { left: -120% }
          50% { left: 120% }
          100% { left: 120% }
        }
      `}</style>
    </div>
  );
}

export default Projects;
