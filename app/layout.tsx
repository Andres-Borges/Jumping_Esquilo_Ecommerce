import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import NavBar from "./NavBar";


export const metadata: Metadata = {
  title: "Jumping Esquilo",
  description: "Jumping Esquilo is a e-commerce website that sells fashionable and affordable clothing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <a href="/products" className="flex justify-center">
            <Image src="/EsquiloLogo.png" alt="Jumping Esquilo Logo" width="100" height="100" />
          </a>
        </header>
        <NavBar />
        {children}
        <footer>
          <p>&copy; Copyright Andres Borges, 2025</p>
        </footer>
      </body>
    </html >
  );
}
