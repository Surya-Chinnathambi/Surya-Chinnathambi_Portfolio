import React, { useEffect, useState } from "react";

/**
 * Navbar.tsx
 * - Responsive nav with glass morphism and animated underline
 * - Smooth slide-down mobile menu
 */

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`glass ${scrolled ? "scrolled" : ""}`}
        style={{
          position: "fixed",
          left: 20,
          right: 20,
          top: 18,
          zIndex: 10,
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          gap: 12,
          transition: "all 260ms cubic-bezier(.2,.9,.2,1)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Logo />
          <div style={{ fontWeight: 700, color: "white" }}>Surya</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div className="nav-links" style={{ display: "none" /* shown via CSS in large screens - kept minimal here */ }}>
            {/* Desktop links - if you add global CSS show these on larger viewports */}
            <NavLinks />
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            style={{
              width: 44,
              height: 44,
              display: "grid",
              placeItems: "center",
              borderRadius: 10,
              border: "none",
              background: open ? "linear-gradient(90deg,var(--accent-1),var(--accent-2))" : "transparent",
              color: "#fff",
            }}
            className="card"
          >
            <div style={{ transform: open ? "rotate(45deg)" : "none", transition: "all 240ms ease" }}>
              {/* simple hamburger */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 7h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity={open ? 0 : 1} />
                <path d="M3 17h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            right: 18,
            width: open ? 220 : 0,
            overflow: "hidden",
            transition: "width 300ms cubic-bezier(.2,.9,.2,1)",
            borderRadius: 12,
            boxShadow: "0 10px 40px rgba(2,2,10,0.6)",
          }}
          aria-hidden={!open}
        >
          <div style={{ padding: 12 }}>
            <NavLinks stacked onClickLink={() => setOpen(false)} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const NavLinks: React.FC<{ stacked?: boolean; onClickLink?: () => void }> = ({ stacked, onClickLink }) => {
  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <div style={{ display: "flex", gap: stacked ? 8 : 18, flexDirection: stacked ? "column" : "row" }}>
      {items.map((it) => (
        <a
          key={it.id}
          href={`#${it.id}`}
          onClick={() => onClickLink && onClickLink()}
          style={{
            color: "#e7e5ff",
            textDecoration: "none",
            position: "relative",
            padding: "6px 4px",
            borderRadius: 6,
            transition: "transform 160ms ease",
          }}
        >
          <span style={{ fontWeight: 600 }}>{it.label}</span>
          <span
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: -6,
              height: 2,
              background: "linear-gradient(90deg,var(--accent-1),var(--accent-2))",
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 200ms ease",
            }}
            className="underline"
          />
        </a>
      ))}
    </div>
  );
};

const Logo = () => (
  <div style={{ width: 38, height: 38, borderRadius: 10, display: "grid", placeItems: "center", background: "linear-gradient(135deg,#2a134f,#7c4dff)" }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="rgba(255,255,255,0.12)" />
      <path d="M7 12h10" stroke="#fff" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  </div>
);
