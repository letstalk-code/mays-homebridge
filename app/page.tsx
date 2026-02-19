import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ScrollObserver from "@/components/ScrollObserver";

import TypingEffect from "@/components/TypingEffect";

export const metadata = {
  title: "May's HomeBridge - Your Trusted Real Estate Advocate",
  description:
    "Stop wondering if homeownership is possible for you. May's HomeBridge helps first-time buyers navigate real estate with expert guidance and advocacy. Book your $100 strategy session today.",
};

export default function HomePage() {
  return (
    <>
      <ScrollObserver />
      {/* ========== HERO ========== */}
      {/* ========== HERO ========== */}
      <section className={styles.hero}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
        >
          <source src="/assets/Hero video.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>
              <TypingEffect text="May's HomeBridge" speed={100} delay={500} />
            </span>
            <h1 className={`${styles.heroTitle} fade-in stagger-1`}>
              You&apos;re Watching Everyone Else Buy Homes While You&apos;re Still
              Wondering If It&apos;s Really Possible For You
            </h1>
            <p className={styles.heroSubtitle}>
              What if the only thing standing between you and homeownership isn&apos;t
              your bank account, but having someone in your corner who
              actually knows how to make the numbers work?
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn-primary">
                Book Your Session Now <span className="arrow">&rarr;</span>
              </Link>
              <Link href="/process" className="btn-secondary">
                See How It Works
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/images/New-Red.png"
              alt="Qunietta L May - Real Estate Advocate and Founder of May's HomeBridge"
              width={500}
              height={600}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* ========== PAIN SECTION ========== */}
      <section className={styles.painSection}>
        <div className={styles.sectionLogo}>
          <Image
            src="/images/adobe-express.png"
            alt="Adobe Express"
            width={150}
            height={60}
            className={styles.sectionLogoImage}
          />
        </div>
        <div className={styles.painGrid}>
          <div className={`${styles.painContent} fade-in-right stagger-1`}>
            <span className="section-label">The Reality</span>
            <div className="gold-line"></div>

            <p>
              You scroll through Instagram and see another friend posting their new
              house keys.
            </p>
            <p>Another coworker just closed on a place.</p>
            <p>
              And you&apos;re sitting there thinking:{" "}
              <strong>&ldquo;How are they doing this? What do they know that I don&apos;t?&rdquo;</strong>
            </p>
            <p>Here&apos;s the truth nobody tells you:</p>
            <p>
              The homebuying process has a lot of moving parts. Financing,
              inspections, negotiations, contracts &mdash; and most people go through
              it without anyone truly in their corner, explaining what&apos;s happening
              and making sure every decision is right for THEM.
            </p>
            <p>
              <strong>
                Without the right guide, it&apos;s easy to miss things that cost
                first-time buyers $30,000+ in the first 24 months.
              </strong>
            </p>

            <div className={styles.pullQuote}>
              So you do nothing. You keep renting. You keep telling yourself &ldquo;maybe
              next year.&rdquo; You keep watching the market get more expensive while you
              stay stuck.
            </div>
          </div>

          <div className={`${styles.painImageWrapper} fade-in-left stagger-2`}>
            <Image
              src="/images/new-home-alabama.png"
              alt="Beautiful new home representing the dream of ownership"
              width={600}
              height={700}
              className={styles.painImage}
            />
          </div>
        </div>
      </section>

      {/* ========== SOLUTION ========== */}
      <section className={styles.solutionSection}>
        <div className={styles.solutionGrid}>
          <div className="fade-in-left">
            <Image
              src="/images/qunietta-white.jpg"
              alt="Qunietta L May - Your Real Estate Advocate"
              width={480}
              height={580}
              className={styles.solutionImage}
            />
          </div>
          <div className="fade-in-right">
            <span className="section-label">The Solution</span>
            <div className="gold-line"></div>
            <h2 className="section-title">Meet Qunietta L May</h2>
            <p>
              My name is Qunietta L May, and I run May&apos;s HomeBridge.
            </p>
            <p>
              I&apos;m a dedicated buyer&apos;s advocate.{" "}
              <strong>
                I work for YOU. It&apos;s like having a trusted guide for one of the
                biggest decisions of your life.
              </strong>{" "}
              I know the process inside and out, and I make sure you understand
              every step and every number before you sign anything.
            </p>
            <p>
              I&apos;m going to show you exactly how I help people who think
              homeownership isn&apos;t possible for them discover that it actually is.
              Plus, I&apos;ll show you how I protect them from the costly mistakes
              that derail most first-time buyers.
            </p>
            <p>
              <strong>
                This will take you 4 minutes to read. And it might change the next
                30 years of your life.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ========== CREDENTIALS ========== */}
      <section className={styles.credSection}>
        <div className={styles.credGrid}>
          <div className={`${styles.credContent} fade-in`}>
            <span className="section-label">Track Record</span>
            <div className="gold-line-center"></div>
            <h2 className="section-title">
              I&apos;ve Helped Hundreds of Families Navigate The Biggest Financial
              Decision of Their Lives
            </h2>
            <p className="mb-8">I&apos;ve seen every scenario:</p>
            <div className={styles.credList}>
              <div className={styles.credItem}>
                <span className={styles.credBullet}>&#9670;</span>
                <p>
                  The couple who &ldquo;definitely couldn&apos;t afford it&rdquo; but I found them{" "}
                  <strong>$47,000 in buying power</strong> they didn&apos;t know existed
                </p>
              </div>
              <div className={styles.credItem}>
                <span className={styles.credBullet}>&#9670;</span>
                <p>
                  The single mom who thought her credit would disqualify her...{" "}
                  <strong>closed in 45 days</strong>
                </p>
              </div>
              <div className={styles.credItem}>
                <span className={styles.credBullet}>&#9670;</span>
                <p>
                  The young professional who almost overpaid by{" "}
                  <strong>$35,000</strong> &mdash; we caught it in time and negotiated
                  them a fair deal
                </p>
              </div>
            </div>

            <p className="mt-8">
              I&apos;ve walked hundreds of people through this process. I know where
              the landmines are. I know what lenders won&apos;t tell you. I know how to
              negotiate so you don&apos;t leave money on the table.
            </p>

            <div className={styles.limitBadge}>
              &#128274; Only 12 new clients per month. Quality over quantity.
            </div>
          </div>

          <div className={`${styles.credImageWrapper} fade-in-left`}>
            <Image
              src="/images/new-keys.png"
              alt="Keys to a new home"
              width={450}
              height={800}
              className={styles.credImage}
            />
          </div>
        </div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className={styles.benefitsSection}>
        <div className="container text-center fade-in">
          <span className="section-label">What You Get</span>
          <div className="gold-line-center"></div>
          <h2 className="section-title">
            Here&apos;s What Working With Me Actually Looks Like
          </h2>
        </div>
        <div className={styles.benefitsGrid}>
          <div className={`${styles.benefitCard} fade-in stagger-1`}>
            <div className={styles.benefitIcon}>&#128176;</div>
            <h3>Know Your REAL Number</h3>
            <p>
              You&apos;ll know exactly what works for your life &mdash; not just what you
              qualify for on paper. No more guessing. No more being house-poor,
              stressed about every unexpected expense.
            </p>
          </div>
          <div className={`${styles.benefitCard} fade-in stagger-2`}>
            <div className={styles.benefitIcon}>&#128270;</div>
            <h3>Someone Reading The Fine Print</h3>
            <p>
              You&apos;ll have someone who actually reads the fine print and catches
              the things that cost you thousands. No surprises at closing. No
              &ldquo;wait, what&apos;s this $4,000 fee?&rdquo; moments.
            </p>
          </div>
          <div className={`${styles.benefitCard} fade-in stagger-3`}>
            <div className={styles.benefitIcon}>&#128737;</div>
            <h3>Protection From Being Taken Advantage Of</h3>
            <p>
              You&apos;ll never wonder if you&apos;re making the right call. Sleep at
              night knowing someone with experience is in your corner, protecting
              YOUR best interests every step of the way.
            </p>
          </div>
          <div className={`${styles.benefitCard} fade-in stagger-4`}>
            <div className={styles.benefitIcon}>&#128506;</div>
            <h3>A Step-By-Step Roadmap</h3>
            <p>
              You&apos;ll have a step-by-step roadmap from &ldquo;I don&apos;t know where to
              start&rdquo; to &ldquo;I&apos;m holding my keys.&rdquo; No more paralysis. You&apos;ll know
              exactly what to do, when, and why.
            </p>
          </div>
          <div className={`${styles.benefitCard} ${styles.benefitCardWide} fade-in stagger-5`}>
            <div className={styles.benefitIcon}>&#128170;</div>
            <h3>Avoid The $30K+ Mistakes</h3>
            <p>
              You&apos;ll avoid the $30K+ mistakes most first-time buyers make. The
              equity you build is actually YOURS, not going toward fixing
              problems you didn&apos;t know to look for or covering costs you didn&apos;t
              know existed.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SOCIAL PROOF ========== */}
      <section className={styles.proofSection}>
        <div className="container text-center fade-in">
          <span className="section-label">Client Stories</span>
          <div className="gold-line-center"></div>
          <h2 className="section-title">What My Clients Say</h2>
        </div>

        {/* High-impact Featured Result Image */}
        <div className={`${styles.proofFeatured} fade-in`}>
          <Image
            src="/images/house-sold.png"
            alt="Happy clients holding a SOLD sign with May's HomeBridge"
            width={1200}
            height={675}
            className={styles.proofFeaturedImage}
          />
        </div>

        <div className={styles.testimonialGrid}>
          <div className={`${styles.testimonialCard} fade-in stagger-1`}>
            <div className={styles.quoteIcon}>&ldquo;</div>
            <blockquote>
              I thought I&apos;d be renting forever. Qunietta showed me I could
              actually afford to buy, and we closed in 60 days.
            </blockquote>
            <div className={styles.testimonialAuthor}>Marcus T.</div>
            <div className={styles.testimonialRole}>
              First-Time Buyer, Age 32
            </div>
          </div>
          <div className={`${styles.testimonialCard} fade-in stagger-2`}>
            <div className={styles.quoteIcon}>&ldquo;</div>
            <blockquote>
              I almost signed with another agent who was pushing me toward a
              house $50K over my real budget. Qunietta walked me through the
              actual numbers and saved me from a disaster.
            </blockquote>
            <div className={styles.testimonialAuthor}>
              Jennifer &amp; David K.
            </div>
            <div className={styles.testimonialRole}>Young Family</div>
          </div>
          <div className={`${styles.testimonialCard} fade-in stagger-3`}>
            <div className={styles.quoteIcon}>&ldquo;</div>
            <blockquote>
              The process felt overwhelming until Qunietta took over. She
              handled everything, explained everything, and I never felt lost. I
              actually enjoyed it.
            </blockquote>
            <div className={styles.testimonialAuthor}>Alicia M.</div>
            <div className={styles.testimonialRole}>
              Single Professional, Age 29
            </div>
          </div>
        </div>
      </section>

      {/* ========== THE OFFER ========== */}
      <section className={styles.offerSection}>
        <div className={`${styles.offerBox} fade-in`}>
          <span className="section-label">The Offer</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Here&apos;s How We Start</h2>
          <p>
            Book a <strong className={styles.offerHighlight}>1-on-1 HomeBridge Strategy Session</strong>.
            This is normally $100, but I&apos;m going to show you how to get it
            credited back.
          </p>
          <p>In this session, you&apos;ll get:</p>

          <div className={styles.offerItems}>
            <div className={styles.offerItem}>
              <span className={styles.offerCheck}>&#10003;</span>
              <div className={styles.offerItemContent}>
                <h4>A Real Affordability Assessment</h4>
                <p>
                  I&apos;ll show you what you can actually afford, where your money
                  will go, and whether now is the right time or if waiting 6
                  months makes more sense.
                </p>
                <span className={styles.valueTag}>$300 value</span>
              </div>
            </div>
            <div className={styles.offerItem}>
              <span className={styles.offerCheck}>&#10003;</span>
              <div className={styles.offerItemContent}>
                <h4>The First-Time Buyer Trap Audit</h4>
                <p>
                  I&apos;ll walk you through the 7 most expensive mistakes
                  first-time buyers make and how to avoid every single one.
                </p>
                <span className={styles.valueTag}>$200 value</span>
              </div>
            </div>
            <div className={styles.offerItem}>
              <span className={styles.offerCheck}>&#10003;</span>
              <div className={styles.offerItemContent}>
                <h4>Your Personalized Homebuying Roadmap</h4>
                <p>
                  A step-by-step plan customized to YOUR situation, YOUR
                  timeline, and YOUR goals. Not a generic checklist, but a real
                  plan.
                </p>
                <span className={styles.valueTag}>$250 value</span>
              </div>
            </div>
            <div className={styles.offerItem}>
              <span className={styles.offerCheck}>&#10003;</span>
              <div className={styles.offerItemContent}>
                <h4>Direct Access to My Network</h4>
                <p>
                  Vetted lenders, inspectors, and contractors from my personal
                  network.
                </p>
                <span className={styles.valueTag}>$150 value</span>
              </div>
            </div>
          </div>

          <div className={styles.pricingBox}>
            <div className={styles.priceOld}>Total Value: $900</div>
            <div className={styles.priceNew}>Your Investment: $100</div>
            <p className={styles.priceNote}>
              If we close together, this $100 gets credited toward your closing
              costs. The session was free.
            </p>
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              Book Your Session Now <span className="arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SCARCITY ========== */}
      <section className={styles.scarcitySection}>
        <div className={`${styles.scarcityContent} fade-in`}>
          <h2>Only 12 New Clients Per Month</h2>
          <p>
            Not because I&apos;m trying to sound exclusive. It&apos;s because I physically
            can&apos;t give you the attention you deserve if I&apos;m juggling 40 deals
            like most agents.
          </p>
          <p>
            Spots fill fast. Usually within the{" "}
            <span className={styles.scarcityHighlight}>
              first two weeks of each month.
            </span>
          </p>
          <p>
            Once they&apos;re gone, you&apos;re on the waitlist for next month. And by
            then, interest rates might have moved, inventory might have shifted,
            and that house you&apos;re watching could be gone.
          </p>
          <p>
            <strong style={{ color: "#fff" }}>
              The cost of waiting isn&apos;t just time. It&apos;s opportunity.
            </strong>
          </p>
        </div>
      </section>

      {/* ========== WARNING / FINAL CLOSE ========== */}
      <section className={styles.warningSection}>
        <div className={styles.warningGrid}>
          <div className={`${styles.warningContent} fade-in-right stagger-1`}>
            <span className="section-label">A Word From Qunietta</span>
            <div className="gold-line"></div>
            <h2 className="section-title">
              Ready To Stop Wondering And Start Knowing?
            </h2>
            <div className={styles.pullQuote}>
              The gap between &ldquo;wanting to own a home&rdquo; and &ldquo;owning a home&rdquo; isn&apos;t
              money. It&apos;s decision.
            </div>
            <p>
              You&apos;re either going to be someone who took action, or someone who
              kept waiting for the &ldquo;perfect time&rdquo; that never came.
            </p>
            <p>
              <strong>Which one?</strong>
            </p>
          </div>

          <div className={`${styles.warningImageWrapper} fade-in-left stagger-2`}>
            <Image
              src="/images/different-angle.png"
              alt="Beautiful home exterior - different angle perspective"
              width={600}
              height={700}
              className={styles.warningImage}
            />
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className={styles.finalCta}>
        <div className={`${styles.finalCtaContent} fade-in`}>
          <h2>Book Your HomeBridge Strategy Session</h2>
          <p>
            60 minutes. $100 (credited back if we close together). Limited to 12
            clients per month.
          </p>
          <Link href="/contact" className="btn-primary">
            Click Here To Choose Your Time Slot{" "}
            <span className="arrow">&rarr;</span>
          </Link>

          <div className={styles.psSection}>
            <p>
              <strong>P.S.</strong> Remember: I only take 12 clients per
              month, and spots fill quickly. The $100 session gets credited back
              toward your closing costs if we close together. You literally
              can&apos;t lose here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
