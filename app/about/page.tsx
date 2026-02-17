import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Why Choose May's HomeBridge - Real Estate That Protects Your Interests",
  description:
    "Most agents work against you. Qunietta L May works FOR you. Learn why May's HomeBridge caps clients at 12/month and fights for first-time buyers like family.",
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
              Why Most Real Estate Agents Are Working Against You (And Why I&apos;m
              Different)
            </h1>
            <p style={{ fontSize: "1.15rem", marginTop: "20px" }}>
              The industry doesn&apos;t want you to know this &mdash; but I&apos;m going to
              tell you anyway.
            </p>
          </div>
          <div className="fade-in-right">
            <Image
              src="/images/qunietta-beige.jpg"
              alt="Qunietta L May - Founder of May's HomeBridge"
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
            The System Isn&apos;t Built For You
          </h2>
          <div className="gold-line"></div>
          <p>
            Let me tell you something most agents will never admit:
          </p>
          <p>
            The traditional real estate model isn&apos;t designed to help you. It&apos;s
            designed to close deals fast.
          </p>
          <p>Here&apos;s how it works:</p>

          <div className={styles.problemList}>
            <div className={styles.problemItem}>
              <span className={styles.bulletIcon}>&#9670;</span>
              <p>
                <strong>The agent</strong> gets paid when you close &mdash; so
                their incentive is to get you to close ASAP, even if it&apos;s not
                the right house or the right time.
              </p>
            </div>
            <div className={styles.problemItem}>
              <span className={styles.bulletIcon}>&#9670;</span>
              <p>
                <strong>The lender</strong> gets paid when you borrow &mdash; so
                their incentive is to approve you for the biggest loan possible,
                even if it stretches you too thin.
              </p>
            </div>
            <div className={styles.problemItem}>
              <span className={styles.bulletIcon}>&#9670;</span>
              <p>
                <strong>The seller</strong> wants top dollar &mdash; so their
                incentive is to make you pay more than you should.
              </p>
            </div>
          </div>

          <div className={styles.callout}>
            Where in that equation is someone protecting YOU?<br />
            <strong>Nowhere.</strong><br />
            And that&apos;s the problem.
          </div>
        </div>
      </section>

      {/* ========== THE SHIFT ========== */}
      <section className={styles.shiftSection}>
        <div className={`${styles.shiftContent} fade-in`}>
          <span className="section-label">The Shift</span>
          <div className="gold-line"></div>
          <p>
            I started May&apos;s HomeBridge because I got tired of watching good
            people get steamrolled by a system that wasn&apos;t built for them.
          </p>
          <p>
            I watched a young couple buy a house they loved &mdash; and{" "}
            <strong>lose it 18 months later</strong> because nobody told them
            about the $12,000 in hidden maintenance costs that first year.
          </p>
          <p>
            I watched a single mom get approved for a mortgage she could
            &ldquo;afford&rdquo; on paper &mdash; but was{" "}
            <strong>drowning within 6 months</strong> because the lender didn&apos;t
            account for daycare, medical bills, or the fact that life happens.
          </p>
          <p>
            I watched a first-time buyer{" "}
            <strong>overpay by $40,000</strong> because their agent didn&apos;t
            negotiate and they didn&apos;t know any better.
          </p>
          <div className={styles.callout}>
            And I thought: This is broken.<br />
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
            <h3>I Work For You &mdash; Not The Commission</h3>
            <p>
              I cap my client load at 12 per month. Most agents juggle 30-50 at
              a time because more deals = more money. I make less money this
              way. But you get more attention.
            </p>
            <p style={{ marginTop: '1rem' }}>
              You get someone who actually reads your inspection report, who negotiates like your money matters, who doesn&apos;t rush you into a bad decision because they need to close by Friday.
            </p>
            <p style={{ marginTop: '1rem', fontWeight: 600 }}>
              You&apos;re not a transaction number. You&apos;re a person making a huge decision.
            </p>
          </div>
          <div className={`${styles.diffCard} fade-in`}>
            <div className={styles.diffNumber}>02</div>
            <h3>I Tell You The Truth &mdash; Even When It Hurts My Paycheck</h3>
            <p>
              If the house you love is overpriced, I&apos;ll tell you. If now isn&apos;t the right time to buy, I&apos;ll tell you. If you&apos;re about to make a $20,000 mistake, I&apos;ll stop you.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Even if it means I don&apos;t get paid this month. Most agents won&apos;t do that. I will. Every time.
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
                <strong>&ldquo;don&apos;t think they can afford it&rdquo;</strong>
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
                who won&apos;t screw you
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

      {/* ========== TRANSITION TO CTA ========== */}
      <section className={styles.optionsSection}>
        <div className={`${styles.optionsContent} fade-in`}>
          <h2 className="section-title">You&apos;ve Got Two Options</h2>
          <div className="gold-line"></div>

          <div className={styles.optionsGrid}>
            <div className={`${styles.optionCard} ${styles.dimmed}`}>
              <div className={styles.optionLabel}>Option 1</div>
              <h3>The Traditional Route</h3>
              <p>
                Work with a traditional agent who&apos;s juggling 40 clients, rushing
                you through decisions, and getting paid whether you win or lose.
              </p>
            </div>
            <div className={`${styles.optionCard} ${styles.highlighted}`}>
              <div className={styles.optionLabel}>Option 2</div>
              <h3>The Smart Route</h3>
              <p>
                Work with someone who caps their client load, tells you the hard
                truths, and only wins when you win.
              </p>
            </div>
          </div>

          <p className="text-center" style={{ marginTop: "24px" }}>
            Most people pick Option 1 because it&apos;s easier to find.{" "}
            <strong>Smart people pick Option 2</strong> because it&apos;s better.
          </p>
          <p className="text-center">
            <strong>Which one are you?</strong>
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
          <p>
            Let&apos;s talk about your situation, your goals, and whether homeownership is actually possible right now &mdash; or if waiting makes more sense.
          </p>
          <p style={{ marginBottom: '32px' }}>
            You&apos;ll walk away with clarity. And if we&apos;re a fit, we&apos;ll take the next step together.
          </p>
          <Link href="/contact" className="btn-primary">
            Book Your Session Now
          </Link>
        </div>
      </section>
    </>
  );
}
