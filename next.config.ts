import type { NextConfig } from "next";
import { Configuration } from 'webpack';


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
    unoptimized: true,
  },
  basePath: '/frontend-challenge',
  assetPrefix:'/frontend-challenge',
  output: 'export',
  reactStrictMode: true
};

export default nextConfig;
