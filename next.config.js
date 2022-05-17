/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["coding-challenge-api.aerolab.co"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
