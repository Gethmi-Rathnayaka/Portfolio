import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import "./globals.css";

const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gethmi Rathnayaka | Portfolio",
  description: "Gethmi Rathnayaka skills, projects, talents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quantico.variable}  antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
