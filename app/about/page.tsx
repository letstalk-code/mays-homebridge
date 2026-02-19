import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Why Choose May's HomeBridge - Real Estate That Protects Your Interests",
  description:
    "Qunietta L May works FOR you. Learn why May's HomeBridge caps clients at 12/month and goes the extra mile for every first-time buyer like family.",
};

export default function AboutPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroGrid}>
          <div className="fade-in-left">
            <span className="section-label">About May&apos;s HomeBridge</span>
            <div className="gold-line"></div>
            <h1>
              Here to Guide You Through One of the Biggest Decisions of Your Life
            </h1>
            <p style={{ fontSize: "1.15rem", marginTop: "20px" }}>
              Homeownership is possible &mdash; you just need the right person in
              your corner.
            </p>
          </div>
          <div className="fade-in-right">
            <Image
              src="/images/husband-and-wife.png"
              alt="Happy husband and wife celebrating their new home"
              width={500}
              height={600}
              className={styles.aboutHeroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* ========== THE PROBLEM ========== */}
      <section className={styles.problemSection}>
        <div className={`${styles.problemContent} fade-in`}>
          <h2 className="section-title">
            The Homebuying Process Has a Lot of Moving Parts
          </h2>
          <div className="gold-line"></div>
          <p>
            Most first-time buyers go into it without a clear picture of what
            to expect &mdash; and that&apos;s where costly mistakes happen.
          </p>
          <p>There&apos;s a lot to navigate:</p>

          <div className={styles.problemList}>
            <div className={styles.problemItem}>
              <span className={styles.bulletIcon}>&#9670;</span>
              <p>
                <strong>Financing</strong> &mdash; understanding what you actually
                qualify for, what you can comfortably sustain, and which loan
                product is right for YOUR situation.
              </p>
            </div>
            <div className={styles.problemItem}>
              <span className={styles.bulletIcon}>&#9670;</span>
              <p>
                <strong>The search</strong> &mdash; knowing what to look for, what
                to avoid, and how to evaluate a property beyond what it looks
                like online.
              </p>
            </div>
            <div className={styles.problemItem}>
              <span className={styles.bulletIcon}>&#9670;</span>
              <p>
                <strong>Negotiations and contracts</strong> &mdash; making sure
                every term protects you and you&apos;re not leaving money on the
                table or signing something you don&apos;t fully understand.
              </p>
            </div>
          </div>

          <div className={styles.callout}>
            You deserve someone who walks you through all of it &mdash; clearly,
            honestly, and with YOUR goals front and center.
          </div>
        </div>
      </section>

      {/* ========== THE SHIFT ========== */}
      <section className={styles.shiftSection}>
        <div className={`${styles.shiftContent} fade-in`}>
          <span className="section-label">The Shift</span>
          <div className="gold-line"></div>
          <p>
            I started May&apos;s HomeBridge because I wanted to be the resource I
            wish I&apos;d had when I was navigating this process myself.
          </p>
          <p>
            I watched a young couple buy a house they loved &mdash; and{" "}
            <strong>lose it 18 months later</strong> because nobody told them
            about the $12,000 in hidden maintenance costs that first year.
          </p>
          <p>
            I watched a first-time buyer{" "}
            <strong>overpay by $40,000</strong> because nobody walked them
            through how to evaluate the offer and negotiate effectively.
          </p>
          <div className={styles.callout}>
            And I thought: people deserve better support than this.<br />
            So I built something different.
          </div>
        </div>
      </section>

      {/* ========== DIFFERENTIATORS ========== */}
      <section className={styles.diffSection}>
        <div className="container text-center fade-in">
          <span className="section-label">What Makes May&apos;s HomeBridge Different</span>
          <div className="gold-line-center"></div>
          <h2 className="section-title">
            The Difference
          </h2>
        </div>
        <div className={styles.diffGrid}>
          <div className={`${styles.diffCard} fade-in`}>
            <div className={styles.diffNumber}>01</div>
            <h3>I Give You My Full Attention</h3>
            <p>
              I cap my client load at 12 per month &mdash; intentionally. It means
              I can go deep on your situation instead of spreading myself across
              dozens of clients at once.
            </p>
            <p style={{ marginTop: '1rem', fontWeight: 600 }}>
              You&apos;re not a transaction number. You&apos;re a person making a huge decision.
            </p>
          </div>
          <div className={`${styles.diffCard} fade-in`}>
            <div className={styles.diffNumber}>02</div>
            <h3>I Always Tell You The Truth</h3>
            <p>
              If the house you love is overpriced, I&apos;ll tell you. If now isn&apos;t the right time to buy, I&apos;ll tell you. If you&apos;re about to make a $20,000 mistake, I&apos;ll stop you.
            </p>
            <p style={{ marginTop: '1rem' }}>
              My job is to make sure you get the right home at the right time &mdash; not just to close a deal. Every time.
            </p>
          </div>
          <div className={`${styles.diffCard} fade-in`}>
            <div className={styles.diffNumber}>03</div>
            <h3>I Protect Your Money Like It&apos;s Mine</h3>
            <p>I know where buyers lose money:</p>
            <ul className={styles.innerList}>
              <li>Overpaying because they &ldquo;fell in love&rdquo; with a house</li>
              <li>Skipping inspections to &ldquo;win the bid&rdquo;</li>
              <li>Getting talked into unnecessary upgrades</li>
              <li>Missing red flags in the contract</li>
              <li>Choosing the wrong lender because they had the flashiest ad</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>I&apos;ve seen it all. And I know how to prevent all of it.</p>
          </div>
          <div className={`${styles.diffCard} fade-in`}>
            <div className={styles.diffNumber}>04</div>
            <h3>I Educate You &mdash; So You&apos;re Never In The Dark</h3>
            <p>You&apos;ll never wonder &ldquo;what happens next?&rdquo; or &ldquo;is this normal?&rdquo; I walk you through:</p>
            <ul className={styles.innerList}>
              <li>What you can actually afford (not what the bank says)</li>
              <li>How to read an inspection report</li>
              <li>What negotiating leverage you actually have</li>
              <li>What every fee at closing means</li>
              <li>How to avoid the traps that cost first-time buyers $30K+</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>By the time we close, you&apos;ll know more about homebuying than most agents do.</p>
          </div>
        </div>
      </section>

      {/* ========== PERSONAL STORY ========== */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className="fade-in-left">
            <Image
              src="/images/qunietta-white.jpg"
              alt="Qunietta L May"
              width={400}
              height={480}
              className={styles.storyImage}
            />
          </div>
          <div className={`${styles.storyText} fade-in-right`}>
            <span className="section-label">My Story</span>
            <div className="gold-line"></div>
            <h2>I Learned The Hard Way. So You Don&apos;t Have To.</h2>
            <p>
              I didn&apos;t grow up wealthy. I grew up watching my mom stress about
              rent every month, watching her work two jobs just to keep us in a
              place that wasn&apos;t even ours.
            </p>
            <p>
              When I bought my first home, I made every mistake in the book. I
              overpaid. I skipped the inspection. I trusted the wrong people. And
              I paid for it &mdash; literally.
            </p>
            <p>
              That&apos;s why I do this. Not for the commission checks. For the
              moment when a client texts me a photo of their kids playing in
              THEIR backyard &mdash; not a landlord&apos;s.
            </p>
            <p>
              For the single mom who thought she&apos;d never qualify. For the young
              professional who thought they&apos;d be priced out forever. For the
              family who finally has stability.
            </p>
            <p>
              <strong style={{ color: "#fff" }}>
                That&apos;s why I built May&apos;s HomeBridge. To be the advocate I wish
                I&apos;d had.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ========== CREDENTIALS ========== */}
      <section className={styles.credsSection}>
        <div className={`${styles.credsContent} fade-in`}>
          <span className="section-label">Credentials</span>
          <div className="gold-line"></div>
          <h2 className="section-title">The Numbers Speak</h2>

          <div className={styles.credsList}>
            <div className={styles.credsItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>
                <strong>Helped 200+ families</strong> navigate the homebuying
                process
              </p>
            </div>
            <div className={styles.credsItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>
                Specialize in first-time buyers who{" "}
                <strong>aren&apos;t sure where to start or what&apos;s possible</strong>
              </p>
            </div>
            <div className={styles.credsItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>
                Average client saves{" "}
                <strong>$15,000-$40,000</strong> by avoiding common traps
              </p>
            </div>
            <div className={styles.credsItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>
                Network of <strong>vetted lenders, inspectors, and contractors</strong>{" "}
                you can trust
              </p>
            </div>
            <div className={styles.credsItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>
                <strong>Only agent in the area</strong> who limits client load to
                ensure quality
              </p>
            </div>
          </div>

          <p>
            I&apos;m not the biggest agency. I&apos;m not the flashiest. But I&apos;m the one
            who&apos;ll fight for you like you&apos;re family.
          </p>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className={styles.aboutCta}>
        <div className={`${styles.aboutCtaContent} fade-in`}>
          <h2>Book Your HomeBridge Strategy Session <span className="arrow">&rarr;</span></h2>
          <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '16px' }}>
            60 minutes. $100 (credited back if we work together). Zero pressure.
          </p>
          <p style={{ marginBottom: '32px' }}>
            Let&apos;s talk about your situation and whether homeownership makes sense right now &mdash; or if waiting is smarter. You&apos;ll walk away with clarity either way.
          </p>
          <Link href="/contact" className="btn-primary">
            Book Your Session Now
          </Link>
        </div>
      </section>
    </>
  );
}
