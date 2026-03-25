import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "export" uniquement pour GitHub Pages (NEXT_OUTPUT=export dans le workflow)
  ...(process.env.NEXT_OUTPUT === "export" && {
    output: "export",
    trailingSlash: true,
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
