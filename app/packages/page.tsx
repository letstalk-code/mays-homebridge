import Link from "next/link";
import styles from "./packages.module.css";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata = {
  title: "Client Packages | May&apos;s HomeBridge",
  description:
    "Exclusive real estate strategy and advocacy packages. Choose your level of partnership with Qunietta May.",
};

const packages = [
  {
    id: "foundation",
    name: "The Foundation",
    price: "$1,700",
    featured: false,
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
    price: "$2,300",
    featured: false,
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
              <hr className={styles.packageDivider} />

              <ul className={styles.featureList}>
                {pkg.features.map((feature, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
                ))}
              </ul>

              <Link href="/strategy-session" className={`btn-primary btn-pulse ${styles.packageCta}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
