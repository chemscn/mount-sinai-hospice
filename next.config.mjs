/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
	basePath: '/mount-sinai-hospice',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
				port: '',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
