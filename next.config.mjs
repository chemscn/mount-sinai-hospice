/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
	images: {
		remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**'
            }
        ]
	}
};

export default nextConfig;
