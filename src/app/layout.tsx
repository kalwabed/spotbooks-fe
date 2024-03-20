import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import PageHeader from "@/components/page-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotbooks",
  description: "Up to u",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PageHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
