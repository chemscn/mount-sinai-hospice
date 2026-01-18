import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SchemaLocalBusiness from './components/SchemaLocalBusiness';

export const metadata: Metadata = {
  title: 'Mount Sinai Hospice | Hospice Care in Texas (Harlingen & Victoria)',
  description:
    'Medicare-certified hospice care across South Texas. Home hospice, symptom management, and family support in Harlingen, Victoria, and surrounding counties. Call 24/7.',
  metadataBase: new URL('https://mount-sinai-hospice.com'),
   icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="pastel" lang="en">
      <body className="flex flex-col min-h-screen">
        <SchemaLocalBusiness />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
