import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// bc the images don't only come from 'cdn2.thecatapi.com'
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',      
        hostname: '*',          
      },
    ],
  },
};

export default nextConfig;
