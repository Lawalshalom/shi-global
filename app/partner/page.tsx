"use client";
import { useState } from "react";
import Link from "next/link";

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    (window as any).__showToast?.("✅ Partnership inquiry received! We'll respond within 48 hours.");
  };

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "var(--cream)" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #1c3a5a, #2d6a4f)",
          padding: "4rem 1.5rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <span style={{ fontSize: "3rem" }}>🤝</span>
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 5vw, 3.2rem)", marginTop: "0.5rem" }}>
          Partner With SHI
        </h1>
        <p style={{ opacity: 0.8, marginTop: "0.5rem", maxWidth: 520, margin: "0.75rem auto 0" }}>
          Organisations, government bodies, and foundations — let's build something impactful together.
        </p>
      </div>

      <div className="container" style={{ maxWidth: 680, margin: "0 auto", padding: "3rem 1.5rem" }}>
        {submitted ? (
          <div
            style={{
              background: "white",
              borderRadius: "var(--radius-lg)",
              padding: "3rem",
              textAlign: "center",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div style={{ fontSize: "4rem" }}>🤝</div>
            <h2 style={{ fontFamily: "var(--font-playfair)", marginTop: "1rem" }}>
              Inquiry Submitted!
            </h2>
            <p style={{ color: "var(--neutral-mid)", marginTop: "0.75rem" }}>
              Thank you for your interest in partnering with SHI. Our partnerships team will get back
              to you within 48 hours.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <button onClick={() => setSubmitted(false)} className="btn btn-green">
                Submit Another
              </button>
              <Link href="/" className="btn btn-outline-green">Back to Home</Link>
            </div>
          </div>
        ) : (
          <div
            style={{
              background: "white",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h2 style={{ fontFamily: "var(--font-playfair)", marginBottom: "1.5rem" }}>
              Partnership Inquiry
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="org-name">Organisation Name</label>
                <input id="org-name" type="text" placeholder="Your organisation" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-name">Contact Person</label>
                <input id="contact-name" type="text" placeholder="Full name" required autoComplete="name" />
              </div>
              <div className="form-group">
                <label htmlFor="partner-email">Email Address</label>
                <input id="partner-email" type="email" placeholder="contact@org.com" required autoComplete="email" />
              </div>
              <div className="form-group">
                <label htmlFor="partner-phone">Phone Number</label>
                <input id="partner-phone" type="tel" placeholder="+234 000 000 0000" />
              </div>
              <div className="form-group">
                <label htmlFor="partner-type">Partnership Type</label>
                <select id="partner-type">
                  <option value="">Select partnership type</option>
                  <option value="funding">Funding & Grants</option>
                  <option value="logistics">Logistics & Supplies</option>
                  <option value="media">Media & Visibility</option>
                  <option value="research">Research & Capacity Building</option>
                  <option value="other">Other Collaboration</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="partner-message">Partnership Proposal</label>
                <textarea
                  id="partner-message"
                  rows={5}
                  placeholder="Describe the collaboration you have in mind..."
                  style={{ resize: "vertical" }}
                  required
                />
              </div>
              <button type="submit" className="btn btn-green" style={{ width: "100%", justifyContent: "center" }}>
                🤝 Submit Partnership Inquiry
              </button>
            </form>
            <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--neutral-mid)", textAlign: "center" }}>
              Or email us directly:{" "}
              <a href="mailto:partnerships@support-humanity.org" style={{ color: "var(--green)", fontWeight: 600 }}>
                partnerships@support-humanity.org
              </a>
            </p>
          </div>
        )}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/" className="btn btn-outline-green">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
