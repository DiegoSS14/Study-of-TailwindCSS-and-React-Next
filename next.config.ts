import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    // Serve para definir as origens de imagens da web que podem ser importadas.
    remotePatterns: [
      {protocol: 'https', hostname: 'https://br.web.img3.acsta.net'}
    ],
    // Nas versões anteriores do next usava-se 'Domains' dessa maneira:
    // domains: [
    //   'br.web.img3.acsta.net'
    // ]
  }
};

export default nextConfig;
