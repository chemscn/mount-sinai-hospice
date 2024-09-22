/** @type {import('next').NextConfig} */
const nextConfig = {
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
