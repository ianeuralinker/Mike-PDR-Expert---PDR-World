/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESTA LINHA É A MAIS IMPORTANTE PARA O COOLIFY:
  output: "standalone", 
  
  // Outras configurações opcionais:
  reactStrictMode: true,
};

module.exports = nextConfig;