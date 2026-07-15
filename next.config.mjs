/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 0,
  },
  async headers() {
    return [
      {
        source: '/products/:path*',
        headers: [{ key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }],
      },
      {
        source: '/hero/:path*',
        headers: [{ key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }],
      },
    ];
  },
};

export default nextConfig;
