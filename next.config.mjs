/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
	images: {
		remotePatterns: [
            {
                protocol: 'http',
                hostname: '**',
                port: '',
                pathname: '**'
            }
        ]
	}
};

export default nextConfig;
