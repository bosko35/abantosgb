/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  async rewrites() {
    return [
      {
        source: '/genel.com',
        destination: '/genel',
      },
    ]
  },
};

module.exports = nextConfig;
