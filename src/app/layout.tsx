import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Viewport } from "next";
import { LayoutClient } from "./components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Social Web",
  description: "Next Social Web for portfolio",
  icons: "/logo.svg",
};

export const viewport: Viewport = {
  themeColor: "#0E0B18",
  colorScheme: "dark",
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
