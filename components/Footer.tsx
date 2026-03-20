"use client";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #1a3d2b 0%, #0f2419 100%)",
        color: "rgba(255,255,255,0.75)",
        padding: "4rem 0 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            paddingBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
                marginBottom: "1.2rem",
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
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  Support Humanity Initiatives
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem" }}>
                  Empowering the Destitute &amp; Displaced
                </div>
              </div>
            </Link>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              A Nigerian-registered NGO committed to delivering compassionate, impactful
              humanitarian aid to the most vulnerable communities in Nigeria and across West Africa.
            </p>
            {/* Social Links */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {[
                { href: "https://twitter.com/SHInitiatives", label: "𝕏", title: "X (Twitter)" },
                {
                  href: "https://facebook.com/supporthumanityinitiatives",
                  label: "f",
                  title: "Facebook",
                },
                {
                  href: "https://instagram.com/supporthumanityinitiatives",
                  label: "📸",
                  title: "Instagram",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.title}
                  style={{
                    width: 38,
                    height: 38,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(224,122,40,0.7)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,0.1)")
                  }
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 700,
                marginBottom: "1.2rem",
                fontSize: "0.95rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Our Outreaches", href: "/#our-work" },
                { label: "Our Impact", href: "/#impact" },
                { label: "Stories", href: "/#testimonials" },
                { label: "Get Involved", href: "/#get-involved" },
                { label: "Contact", href: "/contact" },
                { label: "Donate", href: "/donate" },
              ].map((l) => (
                <li key={l.label} style={{ marginBottom: "0.6rem" }}>
                  <a
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#74c69d")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")
                    }
                  >
                    → {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 700,
                marginBottom: "1.2rem",
                fontSize: "0.95rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Contact Us
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[
                { icon: "📍", text: "Secretariat Dr, Agodi, Ibadan 200285, Oyo, Nigeria" },
                { icon: "📞", text: "+234 703 341 5564", href: "tel:+2347033415564" },
                {
                  icon: "✉️",
                  text: "info@support-humanity.org",
                  href: "mailto:info@support-humanity.org",
                },
                {
                  icon: "💬",
                  text: "WhatsApp Us",
                  href: "https://wa.me/2347033415564",
                  external: true,
                },
              ].map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "0.9rem",
                    alignItems: "flex-start",
                    fontSize: "0.88rem",
                  }}
                >
                  <span style={{ flexShrink: 0, marginTop: 2 }}>{c.icon}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
                    >
                      {c.text}
                    </a>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.65)" }}>{c.text}</span>
                  )}
                </li>
              ))}
            </ul>
            {/* Social handles */}
            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                background: "rgba(255,255,255,0.05)",
                borderRadius: 10,
                fontSize: "0.82rem",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "0.3rem" }}>
                Follow us:
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
                📸 Instagram &amp; Facebook: @supporthumanityinitiatives
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>𝕏 Twitter: @SHInitiatives</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 700,
                marginBottom: "1.2rem",
                fontSize: "0.95rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Stay Updated
            </h4>
            <p style={{ fontSize: "0.88rem", marginBottom: "1rem" }}>
              Get monthly impact reports and outreach updates delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "1.5rem 0",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.82rem",
          }}
        >
          <p>© {year} Support Humanity Initiatives. All rights reserved.</p>
          <div
            style={{
              background: "rgba(116,198,157,0.15)",
              color: "#74c69d",
              padding: "0.3rem 0.9rem",
              borderRadius: 20,
              fontSize: "0.78rem",
            }}
          >
            ✅ Registered Nigerian NGO — CAC No. NGO/XYZ/2018
          </div>
          <nav style={{ display: "flex", gap: "1rem" }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Accountability", href: "/accountability" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.82rem" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        (window as any).__showToast?.("✅ You've been subscribed! Thank you.");
        (e.target as HTMLFormElement).reset();
      }}
    >
      <input
        type="text"
        placeholder="Your name"
        required
        style={{
          width: "100%",
          padding: "0.65rem 1rem",
          borderRadius: 8,
          border: "1.5px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          fontSize: "0.88rem",
          marginBottom: "0.6rem",
          outline: "none",
          fontFamily: "inherit",
        }}
      />
      <input
        type="email"
        placeholder="Your email address"
        required
        style={{
          width: "100%",
          padding: "0.65rem 1rem",
          borderRadius: 8,
          border: "1.5px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          fontSize: "0.88rem",
          marginBottom: "0.75rem",
          outline: "none",
          fontFamily: "inherit",
        }}
      />
      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%", justifyContent: "center" }}
      >
        Subscribe 📩
      </button>
      <p style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.3)", marginTop: "0.5rem" }}>
        Privacy protected. Unsubscribe anytime.
      </p>
    </form>
  );
}
