import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./globalredux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArmWrestling Club Locator",
  description: "Developed by Titan Arms Taguig",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.jpg" sizes="any" />
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );

}
