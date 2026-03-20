import Link from "next/link";

export default function TermsPage() {
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
          Terms of Use
        </h1>
        <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>Last updated: March 2025</p>
      </div>

      <div
        className="container"
        style={{
          maxWidth: 780,
          margin: "2rem auto",
          padding: "3rem 1.5rem",
          background: "white",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing or using the SHI website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.",
          },
          {
            title: "2. Use of Website",
            content:
              "You may use our website solely for lawful purposes and in accordance with these Terms. You agree not to misuse our website, interfere with its operation, or attempt to access it using automated means.",
          },
          {
            title: "3. Donations",
            content:
              "All donations are voluntary and non-refundable. SHI uses donations to fund its humanitarian programs. We are committed to using your contribution efficiently and transparently.",
          },
          {
            title: "4. Intellectual Property",
            content:
              "All content on this website, including text, images, and graphics, is owned by Support Humanity Initiatives and protected by Nigerian and international copyright laws. You may not reproduce or distribute content without prior written permission.",
          },
          {
            title: "5. Disclaimer",
            content:
              "Our website is provided 'as is' without any warranties. SHI does not guarantee that the website will always be available or free from errors. We reserve the right to modify or discontinue the website at any time.",
          },
          {
            title: "6. Limitation of Liability",
            content:
              "SHI shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.",
          },
          {
            title: "7. Governing Law",
            content:
              "These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.",
          },
          {
            title: "8. Contact",
            content:
              "For questions about these terms, contact us at info@support-humanity.org.",
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.2rem",
                color: "var(--green-dark)",
                marginBottom: "0.5rem",
              }}
            >
              {section.title}
            </h2>
            <p style={{ color: "var(--neutral-mid)", lineHeight: 1.8 }}>{section.content}</p>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/" className="btn btn-outline-green">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
