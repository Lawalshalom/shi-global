"use client";
import { useState } from "react";
// import { usePaystackPayment } from "react-paystack";
import Link from "next/link";

const AMOUNTS = [5000, 10000, 25000, 50000];

function formatNaira(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}

export default function DonatePage() {
  const [selected, setSelected] = useState(10000);
  const [custom, setCustom] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("one-time");
  const [loading, setLoading] = useState(false);

  const amount = isCustom ? parseInt(custom || "0") : selected;

  const config = {
    reference: `SHI-${Date.now()}`,
    email: email || "donor@example.com",
    amount: amount * 100, // Paystack uses kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY || "",
    metadata: {
      custom_fields: [
        { display_name: "Donor Name", variable_name: "donor_name", value: name },
        { display_name: "Donation Type", variable_name: "donation_type", value: type },
      ],
    },
  } as any;

  // const initPaystack = usePaystackPayment(config);

  const onSuccess = () => {
    setLoading(false);
  };

  const onClose = () => {
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || amount < 100) return;
    setLoading(true);
    // initPaystack({ onSuccess, onClose })
  };

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", background: "var(--cream)" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, var(--green-dark), var(--green))",
          padding: "4rem 1.5rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <span style={{ fontSize: "3rem" }}>❤️</span>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            marginTop: "0.5rem",
          }}
        >
          Make a Donation
        </h1>
        <p style={{ opacity: 0.8, marginTop: "0.5rem", maxWidth: 520, margin: "0.75rem auto 0" }}>
          Your gift reaches the most vulnerable communities in Nigeria and West Africa.
          Every naira counts.
        </p>
      </div>

      <div
        className="container"
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "3rem 1.5rem",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "var(--radius-lg)",
            padding: "2.5rem",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {/* Amount selector */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                fontWeight: 700,
                marginBottom: "0.75rem",
                fontSize: "0.95rem",
              }}
            >
              Select Donation Amount
            </label>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => {
                    setSelected(a);
                    setIsCustom(false);
                  }}
                  style={{
                    padding: "0.65rem 1.3rem",
                    borderRadius: 50,
                    border: `2px solid ${!isCustom && selected === a ? "var(--green)" : "#e0e0e0"}`,
                    background: !isCustom && selected === a ? "var(--green)" : "white",
                    color: !isCustom && selected === a ? "white" : "var(--neutral-dark)",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "0.92rem",
                    transition: "all 0.2s",
                  }}
                >
                  {formatNaira(a)}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setIsCustom(true)}
                style={{
                  padding: "0.65rem 1.3rem",
                  borderRadius: 50,
                  border: `2px solid ${isCustom ? "var(--orange)" : "#e0e0e0"}`,
                  background: isCustom ? "var(--orange)" : "white",
                  color: isCustom ? "white" : "var(--neutral-dark)",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "0.92rem",
                  transition: "all 0.2s",
                }}
              >
                Custom
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {isCustom && (
              <div className="form-group">
                <label htmlFor="custom-amount">Custom Amount (₦)</label>
                <input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter amount"
                  min={100}
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="donor-name">Full Name</label>
              <input
                id="donor-name"
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="donor-email">Email Address</label>
              <input
                id="donor-email"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="donation-type">Donation Type</label>
              <select
                id="donation-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="one-time">One-Time Gift</option>
                <option value="monthly">Monthly Recurring</option>
                <option value="annual">Annual Commitment</option>
              </select>
            </div>

            {/* Summary box */}
            <div
              style={{
                background: "var(--green-pale)",
                borderRadius: "var(--radius-sm)",
                padding: "1rem 1.25rem",
                marginBottom: "1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Total Donation</span>
              <span
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "var(--green-dark)",
                }}
              >
                {formatNaira(amount || 0)}
              </span>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              style={{ width: "100%", justifyContent: "center", fontSize: "1.05rem" }}
            >
              {loading ? "Opening Payment..." : "💳 Proceed to Secure Payment"}
            </button>
            <p
              style={{
                textAlign: "center",
                fontSize: "0.78rem",
                color: "var(--neutral-soft)",
                marginTop: "0.75rem",
              }}
            >
              🔒 Secured by Paystack · We accept Naira, USD, GBP &amp; more
            </p>
          </form>
        </div>

        {/* Why Donate */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
            }}
          >
            Your Donation at Work
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { amount: "₦2,500", impact: "Feeds a family for a day" },
              { amount: "₦10,000", impact: "Provides medicine for 5 people" },
              { amount: "₦25,000", impact: "Supports a child's education for a month" },
              { amount: "₦50,000", impact: "Sponsors a vocational training session" },
            ].map((d) => (
              <div
                key={d.amount}
                style={{
                  background: "white",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem 1rem",
                  boxShadow: "var(--shadow-card)",
                  border: "1px solid var(--green-pale)",
                }}
              >
                <div
                  style={{
                    color: "var(--green)",
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    fontFamily: "var(--font-playfair)",
                    marginBottom: "0.3rem",
                  }}
                >
                  {d.amount}
                </div>
                <p style={{ color: "var(--neutral-mid)", fontSize: "0.88rem" }}>{d.impact}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/" className="btn btn-outline-green">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
