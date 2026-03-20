"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
    (window as any).__showToast?.("✅ Message sent! We'll respond within 24 hours.");
  };

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "var(--cream)" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #1a3d2b, #2d6a4f)",
          padding: "4rem 1.5rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <span style={{ fontSize: "3rem" }}>📬</span>
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 5vw, 3.2rem)", marginTop: "0.5rem" }}>
          Contact Us
        </h1>
        <p style={{ opacity: 0.8, marginTop: "0.5rem", maxWidth: 520, margin: "0.75rem auto 0" }}>
          Reach out with questions, media inquiries, or to learn more about our work.
        </p>
      </div>

      <div className="container" style={{ padding: "3rem 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.5rem",
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {/* Contact Info */}
          <div>
            <h2 style={{ fontFamily: "var(--font-playfair)", marginBottom: "1.5rem", fontSize: "1.6rem" }}>
              Get in Touch
            </h2>
            <ul style={{ listStyle: "none" }}>
              {[
                { icon: "📍", label: "Address", value: "Secretariat Dr, Agodi, Ibadan 200285, Oyo, Nigeria" },
                { icon: "📞", label: "Phone", value: "+234 703 341 5564", href: "tel:+2347033415564" },
                { icon: "✉️", label: "Email", value: "info@support-humanity.org", href: "mailto:info@support-humanity.org" },
                { icon: "💬", label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/2347033415564", external: true },
              ].map((c) => (
                <li
                  key={c.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1rem 0",
                    borderBottom: "1px solid #eee",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "var(--neutral-soft)", marginBottom: "0.2rem" }}>
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        style={{ color: "var(--green)", fontWeight: 600, textDecoration: "none" }}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span style={{ color: "var(--neutral-dark)" }}>{c.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div
              style={{
                marginTop: "1.5rem",
                background: "var(--green-pale)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              <h4 style={{ fontFamily: "var(--font-playfair)", marginBottom: "0.75rem", color: "var(--green-dark)" }}>
                Follow Us
              </h4>
              {[
                { label: "📸 Instagram", handle: "@supporthumanityinitiatives", href: "https://instagram.com/supporthumanityinitiatives" },
                { label: "f Facebook", handle: "@supporthumanityinitiatives", href: "https://facebook.com/supporthumanityinitiatives" },
                { label: "𝕏 Twitter/X", handle: "@SHInitiatives", href: "https://twitter.com/SHInitiatives" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "var(--green-dark)",
                    textDecoration: "none",
                    padding: "0.4rem 0",
                    fontSize: "0.9rem",
                    borderBottom: "1px solid rgba(45,106,79,0.1)",
                  }}
                >
                  <span>{s.label}</span>
                  <span style={{ fontWeight: 600 }}>{s.handle}</span>
                </a>
              ))}
            </div>

            {/* Map embed */}
            <div style={{ marginTop: "1.5rem", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0!2d3.8877!3d7.3775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d00000000%3A0x0!2sSecretariat+Dr%2C+Agodi%2C+Ibadan+200285%2C+Oyo%2C+Nigeria!5e0!3m2!1sen!2sng!4v1000000000000!5m2!1sen!2sng"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SHI Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              background: "white",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {status === "sent" ? (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "4rem" }}>📬</div>
                <h3 style={{ fontFamily: "var(--font-playfair)", marginTop: "1rem" }}>Message Sent!</h3>
                <p style={{ color: "var(--neutral-mid)", marginTop: "0.75rem" }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-green"
                  style={{ marginTop: "1.5rem" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "var(--font-playfair)", marginBottom: "1.5rem", fontSize: "1.5rem" }}>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="ct-name">Full Name</label>
                    <input id="ct-name" type="text" placeholder="Your full name" required autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ct-email">Email Address</label>
                    <input id="ct-email" type="email" placeholder="you@email.com" required autoComplete="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ct-subject">Subject</label>
                    <select id="ct-subject">
                      <option value="">Select a subject</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media / Press</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="ct-message">Message</label>
                    <textarea id="ct-message" rows={5} placeholder="Your message..." required style={{ resize: "vertical" }} />
                  </div>
                  <button type="submit" className="btn btn-green" style={{ width: "100%", justifyContent: "center" }}>
                    📩 Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/" className="btn btn-outline-green">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
