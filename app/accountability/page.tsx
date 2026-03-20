import Link from "next/link";

export default function AccountabilityPage() {
  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "var(--cream)" }}>
      <div
        style={{
          background: "linear-gradient(135deg, var(--green-dark), var(--green))",
          padding: "3rem 1.5rem",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
          Financial Accountability
        </h1>
        <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>
          Transparency is at the core of everything we do.
        </p>
      </div>

      <div className="container" style={{ padding: "3rem 1.5rem", maxWidth: 900, margin: "0 auto" }}>
        <div
          style={{
            background: "white",
            borderRadius: "var(--radius-lg)",
            padding: "2.5rem",
            boxShadow: "var(--shadow-card)",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--green-dark)", marginBottom: "1rem" }}>
            Our Commitment to Transparency
          </h2>
          <p style={{ color: "var(--neutral-mid)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Support Humanity Initiatives is committed to the highest standards of financial
            accountability and transparency. We are a registered Nigerian NGO and operate in full
            compliance with the Corporate Affairs Commission (CAC) requirements and NGO regulations.
          </p>

          {/* Allocation breakdown */}
          <h3 style={{ fontFamily: "var(--font-playfair)", marginBottom: "1.25rem", color: "var(--neutral-dark)" }}>
            How We Use Funds
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
            {[
              { pct: "75%", label: "Field Programs & Outreaches", color: "var(--green)" },
              { pct: "12%", label: "Medical Supplies & Aid", color: "var(--orange)" },
              { pct: "8%", label: "Operational & Admin", color: "#2d6a9f" },
              { pct: "5%", label: "Advocacy & Communications", color: "#9f4f2d" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "var(--cream)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                  textAlign: "center",
                  border: `3px solid ${item.color}20`,
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: item.color,
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  {item.pct}
                </div>
                <p style={{ color: "var(--neutral-mid)", fontSize: "0.85rem", marginTop: "0.3rem" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "var(--font-playfair)", marginBottom: "1rem", color: "var(--neutral-dark)" }}>
            Registration & Compliance
          </h3>
          <ul style={{ listStyle: "none" }}>
            {[
              "✅ Registered with the Corporate Affairs Commission (CAC) as an NGO",
              "✅ Annual financial reports filed with regulatory authorities",
              "✅ Regular internal audits conducted by independent auditors",
              "✅ Board of Directors overseeing financial decisions",
              "✅ Donor funds tracked and reported through our project management system",
            ].map((item) => (
              <li key={item} style={{ padding: "0.5rem 0", color: "var(--neutral-mid)", borderBottom: "1px solid #eee" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            background: "var(--green-pale)",
            borderRadius: "var(--radius-lg)",
            padding: "2rem",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <h3 style={{ fontFamily: "var(--font-playfair)", color: "var(--green-dark)", marginBottom: "0.75rem" }}>
            Request Financial Reports
          </h3>
          <p style={{ color: "var(--neutral-mid)", marginBottom: "1rem" }}>
            Donors, partners, and the public can request our annual financial reports and
            project impact statements.
          </p>
          <a
            href="mailto:accountability@support-humanity.org"
            className="btn btn-green"
          >
            📊 Request Report
          </a>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/" className="btn btn-outline-green">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
