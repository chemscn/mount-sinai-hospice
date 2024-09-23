import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


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
				className="flex flex-col min-h-screen"
			>
				<Navbar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}

