import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Book Your Strategy Session - May's HomeBridge",
  description:
    "Stop waiting for the perfect time — it doesn't exist. Book your 60-minute HomeBridge Strategy Session for $100 (credited back if we close together).",
};

export default function ContactPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={styles.contactHero}>
        <div className={styles.contactHeroContent}>
          <span className="section-label">Take Action</span>
          <div className="gold-line-center"></div>
          <h1>
            Stop Waiting For The &ldquo;Perfect Time&rdquo; &mdash; It Doesn&apos;t Exist
          </h1>
          <p style={{ fontSize: "1.15rem", marginTop: "20px", maxWidth: "550px", margin: "20px auto 0" }}>
            But the right time to GET CLARITY? That&apos;s right now.
          </p>
        </div>
      </section>

      {/* ========== OPENING ========== */}
      <section className={styles.forkSection}>
        <div className={`${styles.forkContent} fade-in`}>
          <p>
            There will never be a &ldquo;perfect time&rdquo; to buy a home. Interest rates
            will never be low enough. Inventory will never be perfect. Your
            savings will never feel like enough.
          </p>
          <p>
            <strong>
              The people who own homes aren&apos;t the ones who waited for perfect.
              They&apos;re the ones who took action when they had enough.
            </strong>
          </p>
          <p>
            And &ldquo;enough&rdquo; is probably closer than you think.
          </p>

          <h2 style={{ marginTop: "48px" }}>You&apos;re Standing At A Fork In The Road</h2>
          <div className="gold-line"></div>

          <div className={styles.forkGrid}>
            <div className={`${styles.forkCard} ${styles.pathDim}`}>
              <div className={styles.pathLabel}>Path 1</div>
              <h3>Close This Page</h3>
              <p>
                You think &ldquo;I&apos;ll come back to it later.&rdquo; You keep renting. You
                keep watching home prices go up. You keep telling yourself &ldquo;next year.&rdquo; And in five years, you&apos;re right
                where you are now &mdash; except everything&apos;s more expensive and
                you&apos;re five years older.
              </p>
            </div>
            <div className={`${styles.forkCard} ${styles.pathGold}`}>
              <div className={styles.pathLabel}>Path 2</div>
              <h3>Book A Session</h3>
              <p>
                You get actual clarity on what&apos;s possible for you and what needs
                to happen next. Maybe you&apos;re ready now. Maybe you need six months.
                But you&apos;ll KNOW instead of guessing. And if you&apos;re ready, we
                start building toward the moment you get your keys.
              </p>
            </div>
          </div>

          <div className={styles.callout}>
            Path 1 costs you nothing today &mdash; but everything over the next
            decade. Path 2 costs you $100 &mdash; and might change the rest of
            your life.
            <br /><br />
            <strong>Which one makes more sense?</strong>
          </div>
        </div>
      </section>

      {/* ========== OFFER RECAP ========== */}
      <section className={styles.offerSection}>
        <div className={`${styles.offerContent} fade-in`}>
          <span className="section-label">What Happens Next</span>
          <div className="gold-line"></div>
          <h2 className="section-title">
            Here&apos;s Exactly What Happens When You Book:
          </h2>

          <div className={styles.stepList}>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>1</div>
              <p>
                <strong>You click the button below and choose a time</strong> that works for you (I have morning, afternoon, and evening slots available).
              </p>
            </div>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>2</div>
              <p>
                <strong>You&apos;ll get a confirmation email</strong> with a Zoom
                link and a quick pre-session questionnaire (5 minutes to fill
                out &mdash; helps me personalize the session to YOUR situation).
              </p>
            </div>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>3</div>
              <p><strong>We meet on Zoom for 60 minutes.</strong> You&apos;ll get:</p>
            </div>
          </div>

          <div className={styles.sessionItems}>
            <div className={styles.sessionItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>Your Real Affordability Assessment</p>
            </div>
            <div className={styles.sessionItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>The First-Time Buyer Trap Audit</p>
            </div>
            <div className={styles.sessionItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>Your Personalized Homebuying Roadmap</p>
            </div>
            <div className={styles.sessionItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>Direct access to my vetted lender/inspector network</p>
            </div>
          </div>

          <div className={styles.stepList}>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>4</div>
              <p>
                <strong>You walk away with clarity.</strong> If we&apos;re a fit and you want to move forward, we take the next step together. If not, you keep the materials, you got $900 in value for $100, and there&apos;s no hard feelings.
              </p>
            </div>
          </div>

          <div className={styles.offerHighlight}>
            <strong>
              And if we DO work together and close on your home? That $100 gets
              credited back to your closing costs. You literally cannot lose
              here.
            </strong>
          </div>
        </div>
      </section>

      {/* ========== SCARCITY ========== */}
      <section className={styles.scarcitySection}>
        <div className={`${styles.scarcityContent} fade-in`}>
          <span className="section-label">Final Reminder</span>
          <div className="gold-line"></div>
          <h2>I have limited spots available each month.</h2>
          <p>
            Not because I&apos;m trying to create fake urgency &mdash; because I cap my client load at <strong style={{ color: "#fff" }}>12 per month</strong> so I can actually give you the attention you deserve.
          </p>
          <p>
            Spots typically fill within the first 10-14 days of each month. Once they&apos;re gone, you&apos;re on the waitlist.
          </p>
          <p>And while you&apos;re waiting:</p>
          <ul className={styles.scarcityList}>
            <li>Interest rates might move</li>
            <li>That house you&apos;re watching might sell</li>
            <li>Your competition (other buyers) might take action while you&apos;re still &ldquo;thinking about it&rdquo;</li>
          </ul>
          <p>
            <strong style={{ color: "#fff" }}>The cost of waiting isn&apos;t just time. It&apos;s opportunity.</strong>
          </p>
        </div>
      </section>

      {/* ========== FINAL CLOSE ========== */}
      <section className={styles.finalClose}>
        <div className={`${styles.finalContent} fade-in`}>
          <h2 className="section-title">
            Two months from now, you&apos;ll be one of two people:
          </h2>
          <div className="gold-line"></div>
          <div className={styles.personComparison}>
            <div className={styles.personBox}>
              <strong>Person 1:</strong>
              <p>Still renting. Still wondering. Still telling yourself &ldquo;maybe next year.&rdquo; Still watching other people post their new house photos while you scroll past.</p>
            </div>
            <div className={styles.personBox}>
              <strong style={{ color: 'var(--gold)' }}>Person 2:</strong>
              <p>In contract. Or closing. Or sitting in YOUR living room thinking &ldquo;I can&apos;t believe I almost talked myself out of this.&rdquo;</p>
            </div>
          </div>
          <p style={{ marginTop: '32px', fontSize: '1.2rem' }}><strong>Which person do you want to be?</strong></p>

          <div style={{ marginTop: "40px" }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--charcoal)' }}>Book Your HomeBridge Strategy Session Now</h3>
            <Link href="#" className="btn-primary">
              CLICK HERE TO CHOOSE YOUR TIME SLOT <span className="arrow">&rarr;</span>
            </Link>
            <p style={{ marginTop: '16px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
              60 minutes. $100 (credited back if we close together). Limited to 12 clients per month. Let&apos;s stop guessing and start knowing.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM ========== */}
      <section className={styles.formSection}>
        <div className={styles.formGrid}>
          <div className={`${styles.formInfo} fade-in-left`}>
            <span className="section-label">Other Ways To Reach Me</span>
            <div className="gold-line"></div>
            <div style={{ marginTop: "32px" }}>
              <div className={styles.contactDetail}>
                <span className={styles.contactIcon}>&#128231;</span>
                <p>
                  <strong>Email:</strong><br />
                  <a href="mailto:info@mayshomebridge.com">
                    info@mayshomebridge.com
                  </a>
                </p>
              </div>
              <div className={styles.contactDetail}>
                <span className={styles.contactIcon}>&#128241;</span>
                <p>
                  <strong>Phone:</strong><br />
                  <a href="tel:+12513509282">(251) 350-9282</a>
                </p>
              </div>
              <div className={styles.contactDetail}>
                <span className={styles.contactIcon}>&#128205;</span>
                <p>
                  <strong>Address:</strong><br />
                  6800 Moffett road<br />
                  Mobile, Al 36618
                </p>
              </div>
              <div className={styles.contactDetail}>
                <span className={styles.contactIcon}>&#127757;</span>
                <p>
                  <strong>Service Areas:</strong><br />
                  Mobile, Al and surrounding areas
                </p>
              </div>
              <div className={styles.contactDetail}>
                <span className={styles.contactIcon}>&#128337;</span>
                <p>
                  <strong>Office Hours:</strong><br />
                  Monday-Friday, 9am-5pm | Saturday by appointment
                </p>
              </div>
            </div>
            <p style={{ marginTop: "24px", fontSize: "0.9rem" }}>
              I post homebuying tips, market updates, and client wins weekly
              &mdash; follow along even if you&apos;re not ready to buy yet.
            </p>
          </div>

          <form className={`${styles.form} fade-in-right`}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(251) 350-9282"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me a little about your situation..."
              />
            </div>
            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
              Send Message <span className="arrow">&rarr;</span>
            </button>
          </form>
        </div>
      </section>

      {/* ========== PS SECTION ========== */}
      <section className={styles.psSection}>
        <div className={`${styles.psContent} fade-in`}>
          <div className={styles.psBox}>
            <p><strong>P.S. &mdash; Remember:</strong></p>
            <ul className={styles.psList}>
              <li>Limited to 12 clients per month (spots fill fast &mdash; don&apos;t wait)</li>
              <li>The $100 session fee gets credited back toward closing costs if we work together</li>
              <li>You&apos;ll walk away with real clarity on your path to homeownership</li>
            </ul>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link href="#" className="btn-primary">
                Stop Waiting. Book Your Session Now. <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
