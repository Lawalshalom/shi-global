"use client";
import { useState } from "react";
import Link from "next/link";

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    (window as any).__showToast?.("✅ Thank you! We'll be in touch soon.");
  };

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "var(--cream)" }}>
      <div
        style={{
          background: "linear-gradient(135deg, var(--green-dark), var(--green-mid))",
          padding: "4rem 1.5rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <span style={{ fontSize: "3rem" }}>🙋</span>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            marginTop: "0.5rem",
          }}
        >
          Volunteer With Us
        </h1>
        <p style={{ opacity: 0.8, marginTop: "0.5rem", maxWidth: 520, margin: "0.75rem auto 0" }}>
          Join our field teams or support from home. Every skill makes a difference.
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
            <div style={{ fontSize: "4rem" }}>🎊</div>
            <h2 style={{ fontFamily: "var(--font-playfair)", marginTop: "1rem" }}>
              Application Received!
            </h2>
            <p style={{ color: "var(--neutral-mid)", marginTop: "0.75rem" }}>
              Thank you for your willingness to serve. Our volunteer coordinator will contact you
              within 3–5 business days.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <button
                onClick={() => setSubmitted(false)}
                className="btn btn-green"
              >
                Submit Another
              </button>
              <Link href="/" className="btn btn-outline-green">
                Back to Home
              </Link>
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
              Volunteer Registration
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label htmlFor="vol-firstname">First Name</label>
                  <input id="vol-firstname" type="text" placeholder="First name" required autoComplete="given-name" />
                </div>
                <div className="form-group">
                  <label htmlFor="vol-lastname">Last Name</label>
                  <input id="vol-lastname" type="text" placeholder="Last name" required autoComplete="family-name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="vol-email">Email Address</label>
                <input id="vol-email" type="email" placeholder="you@email.com" required autoComplete="email" />
              </div>
              <div className="form-group">
                <label htmlFor="vol-phone">Phone Number</label>
                <input id="vol-phone" type="tel" placeholder="+234 000 000 0000" autoComplete="tel" />
              </div>
              <div className="form-group">
                <label htmlFor="vol-skills">Primary Skills</label>
                <select id="vol-skills">
                  <option value="">Select your skill area</option>
                  <option value="medical">Medical / Nursing / Pharmacy</option>
                  <option value="logistics">Logistics & Distribution</option>
                  <option value="teaching">Teaching & Training</option>
                  <option value="media">Media & Communications</option>
                  <option value="fundraising">Fundraising & Advocacy</option>
                  <option value="admin">Administrative Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="vol-location">Preferred Location</label>
                <select id="vol-location">
                  <option value="">Select location</option>
                  <option value="north-ng">Northern Nigeria</option>
                  <option value="sw-ng">Southwest Nigeria</option>
                  <option value="benin">Benin Republic</option>
                  <option value="togo">Togo</option>
                  <option value="cdi">Côte d'Ivoire</option>
                  <option value="remote">Remote / Online</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="vol-message">Why do you want to volunteer?</label>
                <textarea
                  id="vol-message"
                  rows={4}
                  placeholder="Tell us about your motivation..."
                  style={{ resize: "vertical" }}
                />
              </div>
              <button type="submit" className="btn btn-green" style={{ width: "100%", justifyContent: "center" }}>
                🙋 Submit Volunteer Application
              </button>
            </form>
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/" className="btn btn-outline-green">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
