/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
      {
        source: '/brand/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
    ]
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
