import { useState, useEffect } from "react";

// ── Breakpoints ────────────────────────────────────────────
export const BREAKPOINTS = {
  xs: 0,    // < 390px   — very small mobile
  sm: 390,  // ≥ 390px   — standard mobile (iPhone 14, etc.)
  md: 768,  // ≥ 768px   — tablet
  lg: 1024, // ≥ 1024px  — small desktop / large tablet landscape
  xl: 1440, // ≥ 1440px  — full desktop / large monitor
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/** Returns the current active breakpoint key ("xs" | "sm" | "md" | "lg" | "xl") */
function getBreakpoint(width: number): Breakpoint {
  if (width >= BREAKPOINTS.xl) return "xl";
  if (width >= BREAKPOINTS.lg) return "lg";
  if (width >= BREAKPOINTS.md) return "md";
  if (width >= BREAKPOINTS.sm) return "sm";
  return "xs";
}

/**
 * Returns the current breakpoint key and convenience booleans.
 *
 * @example
 * const { isMobile, isTablet, isDesktop, breakpoint } = useBreakpoint();
 */
export function useBreakpoint() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler, { passive: true });
    // Sync immediately in case of SSR mismatch
    handler();
    return () => window.removeEventListener("resize", handler);
  }, []);

  const breakpoint = getBreakpoint(width);

  return {
    /** Raw pixel width */
    width,
    /** Active breakpoint: "xs" | "sm" | "md" | "lg" | "xl" */
    breakpoint,
    /** xs or sm — phones */
    isMobile: width < BREAKPOINTS.md,
    /** md — tablets */
    isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
    /** lg or xl — desktops */
    isDesktop: width >= BREAKPOINTS.lg,
    /** Helpers to check "at least X" */
    isAtLeast: (bp: Breakpoint) => width >= BREAKPOINTS[bp],
    /** Helpers to check "at most X" */
    isAtMost: (bp: Breakpoint) => width < BREAKPOINTS[bp],
  };
}
