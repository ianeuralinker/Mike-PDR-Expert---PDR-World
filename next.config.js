/** @type {import('next').NextConfig} */
// Trigger deployment update
const nextConfig = {
  // ESTA LINHA É A MAIS IMPORTANTE PARA O COOLIFY:
  output: "standalone",

  // Outras configurações opcionais:
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/supabase/:path*',
        destination: process.env.NEXT_PUBLIC_SUPABASE_URL + '/:path*',
      },
      {
        source: '/auth/:path*',
        destination: process.env.NEXT_PUBLIC_SUPABASE_URL + '/auth/:path*',
      },
    ]
  },
};

module.exports = nextConfig;