"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// All 21 images available in public/images
const CAROUSEL_IMAGES = [
  { src: "/images/1.png", alt: "SHI outreach activities 1" },
  { src: "/images/2 (1).png", alt: "SHI outreach activities 2" },
  { src: "/images/3 (1).png", alt: "SHI outreach activities 3" },
  { src: "/images/4 (1).png", alt: "SHI outreach activities 4" },
  { src: "/images/5 (1).png", alt: "SHI humanitarian work 5" },
  { src: "/images/6 (1).png", alt: "SHI community support 6" },
  { src: "/images/7.png", alt: "SHI team in the field 7" },
  { src: "/images/8.png", alt: "SHI food distribution 8" },
  { src: "/images/9.png", alt: "SHI medical outreach 9" },
  { src: "/images/10.png", alt: "SHI volunteers 10" },
  { src: "/images/11.png", alt: "SHI community impact 11" },
  { src: "/images/12.png", alt: "SHI outreach camp 12" },
];

interface HeroCarouselProps {
  autoPlay?: boolean;
  interval?: number;
  showOverlay?: boolean;
  height?: string;
  children?: React.ReactNode;
}

export default function HeroCarousel({
  autoPlay = true,
  interval = 4000,
  showOverlay = true,
  height = "100vh",
  children,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(idx);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % CAROUSEL_IMAGES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  }, [current, goTo]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
      }}
    >
      {/* Slides */}
      {CAROUSEL_IMAGES.map((img, i) => (
        <div
          key={img.src}
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 0.8s ease",
            opacity: i === current ? (isTransitioning ? 0.3 : 1) : 0,
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      {showOverlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(15,36,25,0.6) 0%, rgba(15,36,25,0.75) 60%, rgba(15,36,25,0.85) 100%)",
            zIndex: 1,
          }}
        />
      )}

      {/* Content */}
      {children && (
        <div style={{ position: "relative", zIndex: 2, height: "100%" }}>
          {children}
        </div>
      )}

      {/* Nav Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          left: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          background: "rgba(255,255,255,0.15)",
          border: "none",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backdropFilter: "blur(6px)",
          color: "white",
          fontSize: "1.2rem",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "rgba(224,122,40,0.8)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)")
        }
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: "absolute",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          background: "rgba(255,255,255,0.15)",
          border: "none",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backdropFilter: "blur(6px)",
          color: "white",
          fontSize: "1.2rem",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "rgba(224,122,40,0.8)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)")
        }
      >
        ›
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          gap: "0.5rem",
        }}
      >
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              background: i === current ? "#e07a28" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Separate simpler carousel for the gallery section
export const GALLERY_IMAGES = [
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
