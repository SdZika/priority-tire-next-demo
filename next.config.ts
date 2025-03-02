/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for catching issues
  swcMinify: true, // Uses SWC for faster minification
  images: {
    domains: ["example.com"], // Allow images from external domains
  },
  async rewrites() {
    return [
      {
        source: "/api/graphql",
        destination: "http://magento.test/graphql", // Proxy GraphQL requests to Magento
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/old-route",
        destination: "/new-route",
        permanent: true, // 301 Redirect
      },
    ];
  },
  env: {
    NEXT_PUBLIC_API_URL: "http://localhost:3000/api", // Example of a public env variable
  },
};

module.exports = nextConfig;
