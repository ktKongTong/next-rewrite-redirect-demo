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


const cfInit = async () => {
  // @ts-ignore
  const { initOpenNextCloudflareForDev } =await import('@opennextjs/cloudflare')
  await initOpenNextCloudflareForDev()
}

try {
  cfInit()
  .catch(e => console.error(e));
}catch (e) {
  console.log("failed to load cf env");
}