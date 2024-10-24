/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["edockets-storage.s3.ap-southeast-2.amazonaws.com"],
  },
  optimizeFonts: false,
};

export default nextConfig;
