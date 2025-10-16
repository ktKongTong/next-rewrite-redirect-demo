import type { NextConfig } from "next";

const backend = process.env.BACKEND_URL
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${backend}/api/:path*`,
      },
    ]
  },
};

export default nextConfig;

