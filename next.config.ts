import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["zh", "en"],
    defaultLocale: "zh",
  },
};

export default nextConfig;
