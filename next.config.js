/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ["127.0.0.1"],
  },
  async redirects() {
    return [
      {
        source: "/admin/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin`,
        permanent: true,
      },
      {
        source: "/downloads",
        destination: "/ozadja",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
