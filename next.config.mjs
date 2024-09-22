/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
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
