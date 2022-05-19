/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["coding-challenge-api.aerolab.co"],
    formats: ["image/webp"],
  },
  experimental: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
