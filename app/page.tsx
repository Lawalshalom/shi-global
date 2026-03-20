"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import Counter from "@/components/Counter";
import { useBreakpoint } from "@/lib/useBreakpoint";

// ── Fade‑up hook ────────────────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// Outreach tab data
const TABS = [
  {
    id: "north",
    label: "🏜️ Northern Nigeria",
    title: "Emergency Relief in Conflict-Affected Zones",
    image: "/images/7.png",
    desc: "Braving bandit-plagued and conflict-affected areas in states like Zamfara, Katsina, and Sokoto, SHI has consistently delivered emergency relief, medical outreach camps, and safe education programs for families displaced by armed violence.",
    stats: [
      { value: 5000, suffix: "+", label: "Families Aided\n(2024–2025)" },
      { value: 12, label: "Medical\nCamps Held" },
      { value: 3200, label: "Children\nSupported" },
    ],
    highlights: [
      "Emergency food distribution to IDP camps across 3 states",
      "Free medical treatment for over 8,000 individuals",
      "Temporary safe learning spaces for displaced children",
      "Trauma counselling and psychosocial support programs",
    ],
  },
  {
    id: "sw",
    label: "🌿 Southwest Nigeria",
    title: "Empowerment & Poverty Alleviation",
    image: "/images/8.png",
    desc: "In urban and rural communities across Lagos, Ogun, Oyo, and Osun states, SHI is breaking the cycle of poverty with sustainable empowerment programs. We combine immediate relief with long-term skill-building to create lasting change.",
    stats: [
      { value: 2800, suffix: "+", label: "Persons\nEmpowered" },
      { value: 40, suffix: "+", label: "Skill Hubs\nEstablished" },
      { value: 6000, label: "Food Packs\nDistributed" },
    ],
    highlights: [
      "Vocational training in tailoring, tech & hairdressing",
      "Monthly food distribution in underserved communities",
      "Free health screenings and maternal care clinics",
      "Scholarship support for out-of-school children",
    ],
  },
  {
    id: "intl",
    label: "🌍 International Efforts",
    title: "Cross-Border Refugee Support",
    image: "/images/9.png",
    desc: "SHI's impact extends beyond Nigeria's borders. We collaborate with local partner organizations in Benin Republic, Togo, and Cote d'Ivoire to deliver targeted humanitarian relief to refugees and disaster-affected populations across the region.",
    stats: [
      { value: 1800, suffix: "+", label: "Refugees\nSupported" },
      { value: 8, label: "Partner\nOrganisations" },
      { value: 3, label: "Countries\nReached" },
    ],
    highlights: [
      "Cross-border food and non-food item distribution",
      "Refugee camp medical support missions",
      "Collaboration with UNHCR-affiliated local NGOs",
      "Reintegration and livelihood restoration programs",
    ],
  },
];

const TESTIMONIALS = [
  {
    initials: "HB",
    name: "Hauwa B.",
    sub: "(name changed for privacy)",
    role: "Displaced Beneficiary — Zamfara State, Northern Nigeria",
    text: "SHI brought hope when we had none. After bandits destroyed our village, we had nothing — no food, no shelter, no future. The team arrived with supplies, medicine, and, more than anything, they arrived with dignity and love. I will never forget what they did for my family.",
  },
  {
    initials: "AK",
    name: "Amara K.",
    role: "Volunteer — Cotonou, Benin Republic",
    text: "Volunteering with SHI in Cotonou was a transformative experience I will carry forever. The level of organisation, empathy, and genuine commitment these people show is remarkable. They are truly changing lives in ways most organisations only talk about.",
  },
  {
    initials: "OA",
    name: "Olumide A.",
    role: "Monthly Donor — Lagos, Nigeria",
    text: "I've supported several NGOs over the years, but SHI stands out for their genuine accountability and impact. Every naira I donate reaches the ground. I'm incredibly proud to support an organisation with this level of real-world impact across Nigeria and the region.",
  },
  {
    initials: "FS",
    name: "Fatima S.",
    role: "Parent of Programme Beneficiary — Ibadan, Oyo State",
    text: "The skills training SHI provided in Ibadan changed the trajectory of my daughter's life. She's now running a small business and can support herself. That is the kind of empowerment that actually makes a difference — not just aid, but a path forward.",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("north");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const tab = TABS.find((t) => t.id === activeTab)!;
  const { isMobile } = useBreakpoint()

  // Testimonial auto-advance
  useEffect(() => {
    const t = setInterval(
      () => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  const aboutRef = useFadeUp();
  const workRef = useFadeUp();
  const impactRef = useFadeUp();
  const testimonialsRef = useFadeUp();
  const involveRef = useFadeUp();

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section id="home" style={{ position: "relative" }}>
        <HeroCarousel showOverlay height="100vh">
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "7rem 1.5rem 11rem",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(224,122,40,0.2)",
                border: "1px solid rgba(224,122,40,0.4)",
                borderRadius: 100,
                padding: "0.4rem 1.2rem",
                color: "#f4a261",
                marginTop: "5rem",
                fontSize: "0.5rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                visibility: isMobile ? "hidden" : "visible"
              }}
            >
              ❤️ Nigerian-Led NGO | West Africa Outreach
            </div>

            <h1
              style={{
                color: "white",
                fontSize: "var(--text-hero)",
                fontWeight: 700,
                lineHeight: 1.1,
                maxWidth: 820,
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              Empowering the{" "}
              <em style={{ color: "#74c69d", fontStyle: "italic" }}>Destitute</em>
              <br />
              and Displaced — Join
              <br />
              Support Humanity Initiatives
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "1.1rem",
                maxWidth: 600,
                lineHeight: 1.7,
              }}
            >
              A Nigerian-led NGO delivering life-changing outreach to the less privileged in Nigeria
              and beyond, from bandit-affected northern regions to neighboring West African
              countries.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/donate" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                ❤️ Donate Now
              </Link>
              <a href="#about" className="btn btn-outline" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                Learn More ↓
              </a>
            </div>

            {/* Hero Stats */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
                paddingBottom: "2rem",
              }}
            >
              {[
                { val: "10K+", label: "Lives Touched" },
                { val: "500+", label: "Outreaches Done" },
                { val: "5", label: "Countries Reached" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    textAlign: "center",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                    borderRadius: 12,
                    padding: "0.8rem 1.4rem",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <strong style={{ color: "white", fontSize: "1.6rem", display: "block", fontWeight: 800 }}>
                    {s.val}
                  </strong>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </HeroCarousel>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────── */}
      <section id="about" className="section" style={{ background: "white" }}>
        <div className="container">
          <div
            ref={aboutRef}
            className="fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-hover)",
                  aspectRatio: "4/3",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/1.png"
                  alt="The SHI team of volunteers on the field in Nigeria"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  right: "-1.5rem",
                  background: "var(--green-dark)",
                  color: "white",
                  borderRadius: "var(--radius-md)",
                  padding: "1.2rem",
                  textAlign: "center",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <strong style={{ display: "block", fontSize: "1.6rem" }}>2018</strong>
                <span style={{ fontSize: "0.8rem", opacity: 0.8 }}>Year Founded</span>
              </div>
            </div>

            {/* Text */}
            <div style={{ paddingBottom: "1rem" }}>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">
                Built on Compassion.
                <br />
                Driven by Purpose.
              </h2>
              <p style={{ color: "var(--neutral-mid)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
                Founded in Nigeria to address the growing crisis of poverty, displacement due to
                armed conflict, and deep-rooted inequality, Support Humanity Initiatives (SHI) has
                grown into a trusted force for change. We are committed to delivering sustainable,
                dignified support to those the world has left behind.
              </p>

              {[
                {
                  color: "var(--green)",
                  label: "🌿 Our Mission",
                  text: '"To uplift vulnerable communities through compassionate aid, education, and empowerment, fostering hope and self-reliance across West Africa."',
                },
                {
                  color: "var(--orange)",
                  label: "🌍 Our Vision",
                  text: '"A world where no one is left behind, with thriving communities free from destitution."',
                },
              ].map((box) => (
                <div
                  key={box.label}
                  style={{
                    borderLeft: `4px solid ${box.color}`,
                    padding: "0.75rem 1.2rem",
                    background: "rgba(45,106,79,0.04)",
                    borderRadius: "0 8px 8px 0",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ fontWeight: 700, color: box.color, fontSize: "0.85rem", marginBottom: "0.3rem" }}>
                    {box.label}
                  </div>
                  <p style={{ color: "var(--neutral-mid)", fontSize: "0.92rem", margin: 0 }}>{box.text}</p>
                </div>
              ))}

              <ul style={{ listStyle: "none", marginTop: "1.5rem" }}>
                {[
                  { icon: "💛", title: "Compassion", desc: "Every person we serve is treated with dignity, empathy, and genuine care." },
                  { icon: "🛡️", title: "Integrity", desc: "We operate transparently, ensuring resources reach those who need them most." },
                  { icon: "🤝", title: "Community-Driven", desc: "We work alongside communities, not above them, co-creating sustainable solutions." },
                ].map((v) => (
                  <li key={v.title} style={{ display: "flex", gap: "1rem", marginBottom: "0.9rem" }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "var(--green-pale)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "1rem",
                      }}
                    >
                      {v.icon}
                    </div>
                    <div>
                      <strong style={{ color: "var(--neutral-dark)" }}>{v.title}</strong>
                      {" — "}
                      <span style={{ color: "var(--neutral-mid)" }}>{v.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR WORK ──────────────────────────────────────────────── */}
      <section id="our-work" className="section pattern-bg">
        <div className="container">
          <div className="fade-up" ref={workRef}>
            <span className="section-tag" style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
              Our Outreaches
            </span>
            <h2 className="section-title">
              Reaching the Unreached
              <br />
              Across Borders
            </h2>
            <p className="section-subtitle">
              From conflict zones in northern Nigeria to cross-border refugee camps in West Africa —
              we go where help is needed most.
            </p>

            {/* Tab Nav */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    padding: "0.65rem 1.4rem",
                    borderRadius: 50,
                    border: `2px solid ${activeTab === t.id ? "white" : "rgba(255,255,255,0.3)"}`,
                    background: activeTab === t.id ? "white" : "transparent",
                    color: activeTab === t.id ? "var(--green-dark)" : "white",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "0.88rem",
                    transition: "all 0.2s",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2.5rem",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div
                style={{ borderRadius: "var(--radius-md)", overflow: "hidden", aspectRatio: "4/3", position: "relative" }}
              >
                <Image
                  src={tab.image}
                  alt={tab.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                  {tab.label}
                </span>
                <h3 style={{ color: "white", margin: "0.5rem 0 1rem", fontSize: "1.5rem" }}>{tab.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {tab.desc}
                </p>
                <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                  {tab.stats.map((s) => (
                    <div key={s.label}>
                      <strong style={{ color: "#f4a261", fontSize: "1.6rem", display: "block" }}>
                        <Counter target={s.value} suffix={s.suffix} />
                      </strong>
                      <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.78rem", whiteSpace: "pre-line" }}>
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
                <ul style={{ listStyle: "none" }}>
                  {tab.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        padding: "0.35rem 0",
                        fontSize: "0.9rem",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      ✓ {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ────────────────────────────────────────────────── */}
      <section
        id="impact"
        className="section"
        style={{ background: "linear-gradient(135deg, #0f2419 0%, #1a4731 100%)" }}
      >
        <div className="container">
          <div className="fade-up" ref={impactRef} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-tag" style={{ background: "rgba(244,162,97,0.2)", color: "#f4a261" }}>
              Real Impact
            </span>
            <h2 className="section-title" style={{ color: "white" }}>
              Making a Real Difference
            </h2>
            <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.65)", margin: "0 auto" }}>
              Numbers don't tell the full story — but they show the scale of what's possible when
              people come together.
            </p>
          </div>

          {/* Metrics */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {[
              { icon: "👥", target: 10000, suffix: "+", label: "Lives Touched Across Nigeria & West Africa" },
              { icon: "🗺️", target: 500, suffix: "+", label: "Outreaches Completed" },
              { icon: "🤝", target: 5, label: "Countries with Active Partnerships" },
              { icon: "🏥", target: 8000, suffix: "+", label: "People Received Free Medical Care" },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "none")}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{m.icon}</div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "#74c69d",
                    fontFamily: "var(--font-playfair)",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Counter target={m.target} suffix={m.suffix} />
                </div>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem" }}>{m.label}</p>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                quote:
                  '"In northern Nigeria, SHI helped a displaced mother of four rebuild her life through a vocational training programme. She now runs her own tailoring business and is sending her children back to school."',
                src: "— Community Worker, Zamfara State, 2024",
              },
              {
                quote:
                  '"When the floods destroyed our village in Benin Republic, SHI was one of the first responders on the ground. They brought food, medicine, and most importantly, they brought hope."',
                src: "— Beneficiary, Collines Department, Benin Republic, 2024",
              },
              {
                quote:
                  '"The skill-training hub in Lagos gave me a reason to dream again. After the programme, I secured my first client within a month."',
                src: "— Programme Graduate, Lagos State, 2025",
              },
            ].map((s) => (
              <div
                key={s.src}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p style={{ color: "rgba(255,255,255,0.8)", fontStyle: "italic", lineHeight: 1.7, marginBottom: "1rem" }}>
                  {s.quote}
                </p>
                <span style={{ color: "#74c69d", fontSize: "0.82rem", fontWeight: 600 }}>{s.src}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY CAROUSEL ─────────────────────────────────────── */}
      <section style={{ background: "var(--cream)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span className="section-tag">Photo Gallery</span>
          <h2 className="section-title">Our Work in Pictures</h2>
          <p style={{ color: "var(--neutral-mid)" }}>A glimpse into the lives we touch every day.</p>
        </div>
        <GalleryCarousel />
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section id="testimonials" className="section" style={{ background: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="fade-up" ref={testimonialsRef}>
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">Voices from Our Communities</h2>
            <p className="section-subtitle" style={{ margin: "0 auto 2.5rem" }}>
              Real words from real people whose lives have been touched by SHI's work.
            </p>

            <div
              style={{
                background: "var(--cream)",
                borderRadius: "var(--radius-lg)",
                padding: "2.5rem",
                maxWidth: 720,
                margin: "0 auto 1.5rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: "5rem",
                  color: "var(--green-pale)",
                  fontFamily: "serif",
                  lineHeight: 0.8,
                  marginBottom: "1rem",
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "var(--neutral-dark)",
                  marginBottom: "1.5rem",
                }}
              >
                {TESTIMONIALS[testimonialIdx].text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "var(--green)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  {TESTIMONIALS[testimonialIdx].initials}
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 700 }}>
                    {TESTIMONIALS[testimonialIdx].name}{" "}
                    {TESTIMONIALS[testimonialIdx].sub && (
                      <span style={{ fontWeight: 400, color: "var(--neutral-soft)", fontSize: "0.85rem" }}>
                        {TESTIMONIALS[testimonialIdx].sub}
                      </span>
                    )}
                  </div>
                  <div style={{ color: "var(--neutral-mid)", fontSize: "0.85rem" }}>
                    {TESTIMONIALS[testimonialIdx].role}
                  </div>
                  <div style={{ color: "#f4a261" }}>★★★★★</div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  style={{
                    width: i === testimonialIdx ? 28 : 8,
                    height: 8,
                    borderRadius: 4,
                    border: "none",
                    background: i === testimonialIdx ? "var(--green)" : "#ddd",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ──────────────────────────────────────────── */}
      <section id="get-involved" className="section pattern-bg">
        <div className="container">
          <div className="fade-up" ref={involveRef} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-tag" style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
              Get Involved
            </span>
            <h2 className="section-title">How You Can Help</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Your support — in any form — saves and transforms lives. Choose how you'd like to make
              a difference.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                icon: "❤️",
                title: "Donate",
                desc: "Your financial gift directly funds food, medicine, shelter, and education for the most vulnerable communities across Nigeria and West Africa.",
                cta: "Donate Now",
                href: "/donate",
                btnClass: "btn-primary",
              },
              {
                icon: "🙋",
                title: "Volunteer",
                desc: "Join our field teams or support from home. We need passionate people with medical, logistics, teaching, media, or fundraising skills.",
                cta: "Volunteer Now",
                href: "/volunteer",
                btnClass: "btn-outline",
              },
              {
                icon: "🤝",
                title: "Partner With Us",
                desc: "Are you an organisation, government body, or foundation looking to collaborate? Let's build something impactful together.",
                cta: "Submit Inquiry",
                href: "/partner",
                btnClass: "btn-outline",
              },
              {
                icon: "📣",
                title: "Share & Amplify",
                desc: "You don't need to give money to make a difference. Sharing our story can reach donors and volunteers we'd never find otherwise.",
                cta: "Contact Us",
                href: "/contact",
                btnClass: "btn-outline",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ fontSize: "2.5rem" }}>{card.icon}</div>
                <h3 style={{ color: "white", fontSize: "1.3rem" }}>{card.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, flexGrow: 1 }}>{card.desc}</p>
                <Link href={card.href} className={`btn ${card.btnClass}`} style={{ justifyContent: "center" }}>
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Urgent CTA */}
          <div
            style={{
              marginTop: "3rem",
              background: "rgba(224,122,40,0.2)",
              border: "2px solid rgba(224,122,40,0.4)",
              borderRadius: "var(--radius-lg)",
              padding: "2.5rem",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "white", fontSize: "1.6rem", marginBottom: "0.75rem" }}>
              Your Support Changes Lives – Act Now!
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem" }}>
              Every delayed decision is another day someone goes without food, medicine, or hope.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/donate" className="btn btn-primary">❤️ Donate Today</Link>
              <Link href="/volunteer" className="btn btn-outline">🙋 Volunteer Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Gallery Carousel Component ───────────────────────────────────────────────
const GALLERY_IMGS = [
  "/images/10.png",
  "/images/11.png",
  "/images/12.png",
  "/images/13.png",
  "/images/14.png",
  "/images/15.png",
  "/images/16.png",
  "/images/17.png",
  "/images/19.png",
  "/images/20.png",
  "/images/21.png",
  "/images/22.png",
];

function GalleryCarousel() {
  const [offset, setOffset] = useState(0);
  const visibleCount = 4;
  const max = GALLERY_IMGS.length - visibleCount;

  useEffect(() => {
    const t = setInterval(() => {
      setOffset((o) => (o >= max ? 0 : o + 1));
    }, 2500);
    return () => clearInterval(t);
  }, [max]);

  return (
    <div style={{ overflow: "hidden", padding: "0 1.5rem" }}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          transform: `translateX(calc(-${offset} * (280px + 1rem)))`,
          transition: "transform 0.8s ease",
        }}
      >
        {GALLERY_IMGS.map((src, i) => (
          <div
            key={src}
            style={{
              minWidth: 280,
              height: 200,
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
              boxShadow: "var(--shadow-card)",
            }}
          >
            <Image
              src={src}
              alt={`SHI gallery photo ${i + 1}`}
              fill
              style={{ objectFit: "cover", transition: "transform 0.4s" }}
              sizes="280px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
