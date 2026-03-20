"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window?.scrollY > 40);
    window?.addEventListener("scroll", onScroll, { passive: true });
    return () => window?.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: isHome ? "#home" : "/" },
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Our Work", href: isHome ? "#our-work" : "/#our-work" },
    { label: "Impact", href: isHome ? "#impact" : "/#impact" },
    { label: "Stories", href: isHome ? "#testimonials" : "/#testimonials" },
    { label: "Get Involved", href: isHome ? "#get-involved" : "/#get-involved" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled || menuOpen ? "rgba(26,71,49,0.97)" : "rgba(26,71,49,0.4)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              background: "linear-gradient(135deg, #e07a28, #f4a261)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "white",
              fontSize: "0.95rem",
              letterSpacing: "-0.5px",
              flexShrink: 0,
            }}
          >
            SHI
          </div>
          <div>
            <div
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: "0.92rem",
                lineHeight: 1.2,
                fontFamily: "var(--font-playfair)",
              }}
            >
              Support Humanity Initiatives
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.7rem",
                letterSpacing: "0.04em",
              }}
            >
              Caring for the Destitute &amp; Displaced
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                padding: "0.5rem 0.85rem",
                borderRadius: 8,
                fontSize: "var(--nav-size)",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "white";
                (e.target as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)";
                (e.target as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/donate"
            className="btn btn-primary"
            style={{ marginLeft: "0.5rem", padding: "0.55rem 1.2rem", fontSize: "var(--nav-size)" }}
          >
            ❤️ Donate Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-btn"
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
          }}
        >
          <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: 2,
                  background: "white",
                  borderRadius: 2,
                  transition: "all 0.3s",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(5px, 5px)"
                        : i === 1
                          ? "scaleX(0)"
                          : "rotate(-45deg) translate(5px, -5px)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(26,71,49,0.98)",
            padding: "1rem 1.5rem 1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/donate"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: "1rem", display: "block", textAlign: "center" }}
          >
            ❤️ Donate Now
          </Link>
        </div>
      )}

      <style>{`
        .hamburger-btn { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; align-items: center; }
        }
      `}</style>
    </header>
  );
}
