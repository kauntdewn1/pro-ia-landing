// next.config.js
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/(.*)',
          has: [
            {
              type: 'host',
              value: 'flowreborn.xyz',
            },
          ],
          permanent: true,
          destination: 'https://flowreborn.xyz/:path*',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  