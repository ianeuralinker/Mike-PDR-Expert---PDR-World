/** @type {import('next').NextConfig} */
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
    // HARDCODED UPSTREAM URL TO PREVENT LOOP
    const supabaseUrl = "https://supabasekong-cwsg0s4wc4kgsogsgw8ggssc.191.101.15.211.sslip.io";

    console.log("---------------------------------------------------");
    console.log("DEBUG: FORCING Proxy to:", supabaseUrl);
    console.log("---------------------------------------------------");

    return [
      {
        source: '/supabase/:path*',
        destination: supabaseUrl + '/:path*',
      },
      {
        source: '/auth/:path*',
        destination: supabaseUrl + '/auth/:path*',
      },
    ]
  },
};

module.exports = nextConfig;