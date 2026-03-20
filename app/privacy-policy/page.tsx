import Link from "next/link";

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>Last updated: March 2025</p>
      </div>

      <div
        className="container"
        style={{
          maxWidth: 780,
          margin: "0 auto",
          padding: "3rem 1.5rem",
          background: "white",
          borderRadius: "var(--radius-lg)",
          marginTop: "2rem",
          marginBottom: "2rem",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {[
          {
            title: "1. Information We Collect",
            content:
              "We collect personal information you voluntarily provide to us when you donate, volunteer, partner with us, or contact us. This may include your name, email address, phone number, and payment details processed securely through Paystack.",
          },
          {
            title: "2. How We Use Your Information",
            content:
              'We use your information to process donations, communicate with you about our programs, send newsletters (if opted-in), and improve our services. We do not sell or share your personal data with third parties except as necessary to process payments and as required by law.',
          },
          {
            title: "3. Data Security",
            content:
              "All payment transactions are processed by Paystack using industry-standard encryption (SSL/TLS). We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse.",
          },
          {
            title: "4. Cookies",
            content:
              "Our website uses minimal cookies necessary for basic site functionality and analytics. By using our site, you consent to our use of cookies in accordance with this policy.",
          },
          {
            title: "5. Your Rights",
            content:
              "You have the right to access, correct, or delete your personal information at any time. To exercise these rights, contact us at info@support-humanity.org.",
          },
          {
            title: "6. Third-Party Links",
            content:
              "Our website may contain links to third-party sites including social media platforms. We are not responsible for the privacy practices of these sites.",
          },
          {
            title: "7. Contact Us",
            content:
              "If you have questions about this Privacy Policy, please contact us at info@support-humanity.org or call +234 703 341 5564.",
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
