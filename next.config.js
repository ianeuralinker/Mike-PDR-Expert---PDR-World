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
        destination: 'http://supabase-kong:8000/:path*',
      },
    ]
  },
};

module.exports = nextConfig;