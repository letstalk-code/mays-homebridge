import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "May's HomeBridge - Your Trusted Real Estate Advocate",
  description:
    "May's HomeBridge helps first-time homebuyers navigate the real estate process with expert guidance, honest advice, and fierce advocacy. Book your $100 strategy session today.",
  keywords:
    "first-time homebuyer, real estate advocate, home buying help, buyer representation, May's HomeBridge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
        <ScrollAnimations />
      </body>
    </html>
  );
}
