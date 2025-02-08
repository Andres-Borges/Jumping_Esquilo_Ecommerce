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
      <body className="flex flex-col min-h-screen">
        <header>
          <a href="/" className="flex justify-center">
            <Image src="/EsquiloLogo.png" alt="Jumping Esquilo Logo" width="100" height="100" />
          </a>
        </header>
        <NavBar />
        {children}
        <footer className="mt-auto w-full md:4/12 px-4 mx-auto text-center bg-white shadow-md transform scale-y-[-1] py-4">
          <div className="bg-white transform scale-y-[-1]">
            <p>&copy; Copyright Andres Borges, {new Date().getFullYear()}</p>
          </div>
        </footer>
      </body>
    </html >
  );
}
