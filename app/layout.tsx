import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Support Humanity Initiatives – Aid for Destitute & Displaced in Nigeria & West Africa",
  description:
    "A Nigerian-led NGO delivering life-changing outreach to the less privileged in Nigeria and beyond, from bandit-affected northern regions to neighboring West African countries.",
  keywords:
    "NGO Nigeria, humanitarian outreach, displaced people aid, SHI, Support Humanity Initiatives, West Africa relief, northern Nigeria aid, destitute empowerment",
  openGraph: {
    title: "Support Humanity Initiatives – Aid for Destitute & Displaced",
    description:
      "Join SHI in delivering life-changing aid across Nigeria and West Africa. Donate, volunteer, or share today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
