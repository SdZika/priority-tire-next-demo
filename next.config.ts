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
  async headers() {
    return [
      {
        // Set CORS headers for all API routes
        source: '/api/:path*', // Match all API routes
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://magento.test', // Your allowed origin (Magento's URL)
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE', // Allowed methods
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization', // Allowed headers
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true', // Allow credentials (cookies, HTTP authentication)
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
