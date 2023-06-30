/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [`cnd.sanity.io`, `sessionize.com`],
	},
};

module.exports = nextConfig;
