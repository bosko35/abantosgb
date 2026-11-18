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
      {
        // Deneme sayfaları Google'da listelenmesin
        source: '/deneme/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/genel.com',
        destination: '/genel',
      },
      {
        source: '/deneme/uyum-karnesi',
        destination: '/deneme/uyum-karnesi.html',
      },
    ]
  },
};

module.exports = nextConfig;
