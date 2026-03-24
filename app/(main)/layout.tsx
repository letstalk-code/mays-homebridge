import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <MobileStickyCTA />
      <ScrollAnimations />
    </>
  );
}
