/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["@swc-jotai/react-refresh", {}]],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "bangsoal.s3-ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "bangsoal.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
