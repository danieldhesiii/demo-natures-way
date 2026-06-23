import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder stock imagery. When real Facebook/Instagram photos are
    // added to /public, these remote patterns can be removed.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
