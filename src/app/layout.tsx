import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LinceY Lab",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="overflow-x-hidden"lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
            </head>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
              {children}
            </body>
          </html>
          );
}
