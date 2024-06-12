/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		scrollRestoration: true,
	},
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'utfs.io',
      },
    ],
  },
};

export default nextConfig;
