import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are local in public/images — no external domains needed
    unoptimized: false,
  },
};

export default nextConfig;
