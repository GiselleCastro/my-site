import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,//
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "pt-BR",
    // domains:  [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    //   {
    //     domain: 'example.nl',
    //     defaultLocale: 'pt-BR',
    //   },
    // ],
  }
};

export default nextConfig;
