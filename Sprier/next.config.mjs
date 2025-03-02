/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
    domains: ["aceternity.com", "images.unsplash.com"],
  },
};

export default nextConfig;
