import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Leading IT Solutions for Businesses",
  description: "We provides cutting-edge IT solutions tailored to boost productivity, streamline operations, and drive innovation for businesses. Discover our expertise in software development, cybersecurity, cloud solutions, and IT consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
   
      </head>
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />

      
      </body>
    </html>
  );
}
