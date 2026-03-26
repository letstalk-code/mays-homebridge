import Link from "next/link";
import styles from "./packages.module.css";
import ScrollObserver from "@/components/ScrollObserver";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "Client Packages | May's HomeBridge",
  description:
    "Real estate advocacy packages for homebuyers in Mobile, AL. Choose your level of partnership with Qunietta May.",
};

const packages = [
  {
    id: "crsk",
    name: "Credit Readiness Starter Kit",
    price: "$600",
    featured: false,
    cta: "Start Credit Readiness",
    forWho: "For buyers who need to understand where their credit stands before taking the next step.",
    href: "https://link.creativelygrow.com/payment-link/69c44f3ac6a0e600f4d057f2",
    features: [
      "Credit profile review & score analysis",
      "Personalized credit repair action plan",
      "Debt-to-income ratio breakdown",
      "Timeline to mortgage-ready status",
      "1 follow-up advisory call (30 min)",
    ],
  },
  {
    id: "business-funding",
    name: "Business Funding Assistance",
    price: "$1,000",
    featured: false,
    cta: "Get Business Funding Help",
    forWho: "For entrepreneurs and side-hustle owners who want to build business credit alongside their homeownership journey.",
    href: "https://link.creativelygrow.com/payment-link/69c45604fb727d9c905d2795",
    features: [
      "Business credit profile review & assessment",
      "Funding eligibility analysis",
      "Lender & funding source network introduction",
      "Personalized funding strategy roadmap",
      "1 follow-up advisory call (30 min)",
    ],
  },
  {
    id: "rapid-credit-repair",
    name: "Rapid Credit Repair",
    price: "$1,200",
    featured: false,
    cta: "Start Rapid Credit Repair",
    forWho: "For buyers who know their credit needs work and want an aggressive, guided plan to get mortgage-ready fast.",
    href: "https://link.creativelygrow.com/payment-link/69c455b7c6a0e600f4d05810",
    features: [
      "Full 3-bureau credit report audit",
      "Dispute strategy & filing support",
      "Score improvement action plan",
      "Debt prioritization roadmap",
      "2 follow-up advisory calls (30 min each)",
    ],
  },
  {
    id: "foundation",
    name: "The Foundation",
    price: "$1,700",
    featured: false,
    cta: "Build My Foundation",
    forWho: "For buyers who are ready to start but need a clear roadmap before they take a single step.",
    href: "https://link.creativelygrow.com/payment-link/69c44f9dc6a0e600f4d057f4",
    features: [
      "30-min HomeBridge Strategy Session",
      "Real Affordability Assessment",
      "First-Time Buyer Trap Audit",
      "Personalized Homebuying Roadmap",
      "Introduction to vetted lender network",
    ],
  },
  {
    id: "blueprint",
    name: "The Blueprint",
    price: "$2,500",
    featured: false,
    cta: "Get The Blueprint",
    forWho: "For buyers who have their foundation and want ongoing guidance as they work toward mortgage approval.",
    href: "https://link.creativelygrow.com/payment-link/69c44ffafb727d9c905d277e",
    features: [
      "Everything in The Foundation",
      "3 follow-up advisory calls (30 min each)",
      "Lender introduction + progress monitoring",
      "Loan comparison review",
      "Written action plan with timeline",
    ],
  },
  {
    id: "advocate",
    name: "The Advocate",
    price: "$3,600",
    featured: false,
    cta: "Become an Advocate Client",
    forWho: "For buyers who are actively searching and need someone in their corner during property tours and offer negotiations.",
    href: "https://link.creativelygrow.com/payment-link/69c450a5c6a0e600f4d057f9",
    features: [
      "Everything in The Blueprint",
      "Realtor introduction from preferred network",
      "Property evaluation support (up to 5 homes)",
      "Offer strategy session before submitting",
      "Inspection review guidance",
    ],
  },
  {
    id: "gold-standard",
    name: "The Gold Standard",
    price: "$4,300",
    featured: true,
    cta: "Get The Gold Standard",
    forWho: "For buyers who want full transaction support from search to signed — with someone fighting for every dollar at the table.",
    href: "https://link.creativelygrow.com/payment-link/69c450eec6a0e600f4d057fb",
    features: [
      "Everything in The Advocate",
      "Full transaction advisory (start to close)",
      "Contract review + negotiation coaching",
      "Closing cost breakdown walkthrough",
      "Priority access &mdash; 48-hr response guarantee",
    ],
  },
  {
    id: "platinum-partner",
    name: "The Platinum Partner",
    price: "$5,200",
    featured: false,
    cta: "Go Platinum",
    forWho: "For buyers who want white-glove support from start to close, plus 90 days of help after getting their keys.",
    href: "https://link.creativelygrow.com/payment-link/69c45139fb727d9c905d2783",
    features: [
      "Everything in The Gold Standard",
      "Unlimited advisory calls through closing",
      "VIP access to full contractor & inspector network",
      "Post-close support (90 days)",
      "Custom first-year homeowner budget plan",
    ],
  },
  {
    id: "elite-circle",
    name: "The Elite Circle",
    price: "$6,000",
    featured: false,
    cta: "Join the Elite Circle",
    forWho: "For serious buyers and investors who want a year-long strategic partner — not just help buying one home.",
    href: "https://link.creativelygrow.com/payment-link/69c4558fc6a0e600f4d0580f",
    features: [
      "Everything in The Platinum Partner",
      "Monthly 1-on-1 strategy call (12 months)",
      "Full real estate investment roadmap",
      "Exclusive off-market network access",
      "Dedicated concierge support",
    ],
  },
];

export default function PackagesPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: "Packages", path: "/packages" }]} />
      <ScrollObserver />

      {/* Hero */}
      <section className={styles.packagesHero}>
        <span className="section-label fade-in">Exclusive Packages</span>
        <div className="gold-line-center fade-in stagger-1"></div>
        <h1 className="section-title fade-in stagger-2">
          Choose Your Level of Partnership
        </h1>
        <p className={`${styles.heroSubtext} fade-in stagger-3`}>
          Every package includes my full attention, my vetted network, and my
          unwavering commitment to protecting your money and your future.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "May's HomeBridge Service Packages",
          "url": "https://mayshomebridgellc.com/packages",
          "itemListElement": packages.map((pkg, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Service",
              "name": pkg.name,
              "description": pkg.features.join(". "),
              "offers": {
                "@type": "Offer",
                "price": pkg.price.replace("$", "").replace(",", ""),
                "priceCurrency": "USD",
                "url": pkg.href,
              },
              "provider": {
                "@type": "LocalBusiness",
                "name": "May's HomeBridge LLC",
                "url": "https://mayshomebridgellc.com",
              }
            }
          }))
        })}}
      />

      {/* Packages Grid */}
      <section className={styles.packagesSection}>
        <div className={styles.packagesGrid}>
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`${styles.packageCard} ${pkg.featured ? styles.featured : ""} fade-in stagger-${Math.min(i + 1, 5)}`}
            >
              {pkg.featured && (
                <div className={styles.featuredBadge}>⭐ Most Popular</div>
              )}

              <h2 className={styles.packageName}>{pkg.name}</h2>
              <div className={styles.packagePrice}>{pkg.price}</div>
              <p className={styles.packageForWho}>{pkg.forWho}</p>
              <hr className={styles.packageDivider} />

              <ul className={styles.featureList}>
                {pkg.features.map((feature, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
                ))}
              </ul>

              <Link href={pkg.href} className={`btn-primary btn-pulse ${styles.packageCta}`}>
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
