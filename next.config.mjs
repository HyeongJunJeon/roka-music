/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  reactStrictMode: false,

  images: {
    domains: [],
    unoptimized: true,
  },
};

export default nextConfig;
