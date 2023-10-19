import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudentMes",
  description: "Make your day with us!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
