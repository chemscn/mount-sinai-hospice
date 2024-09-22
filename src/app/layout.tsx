import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Mount Sinai Hospice',
	description: 'Hospice Care Texas',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			data-them="pastel"
			lang="en"
		>
			<body
				className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}

