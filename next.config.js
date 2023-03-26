/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io', 'assets.imgix.net', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
