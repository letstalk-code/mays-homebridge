import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "May's HomeBridge - Your Trusted Real Estate Advocate",
  description:
    "May's HomeBridge helps first-time homebuyers navigate the real estate process with expert guidance, honest advice, and fierce advocacy. Book your $100 strategy session today.",
  keywords:
    "first-time homebuyer, real estate advocate, home buying help, buyer representation, May's HomeBridge",
  verification: {
    google: "ZLOL11ZPMPL8AmaVCTSHViKZmwiap7f9cKYZPxK44ks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
