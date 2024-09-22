/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'output',
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
