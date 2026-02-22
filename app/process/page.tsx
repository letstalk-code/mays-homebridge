import Link from "next/link";
import styles from "./page.module.css";
import TimelineProgress from "@/components/TimelineProgress";

export const metadata = {
  title: "How We Help First-Time Homebuyers | 5-Step System - May's HomeBridge",
  description:
    "Discover the exact 5-step HomeBridge System that turns 'I don't know where to start' into 'Here are my keys.' No guesswork. No surprises. Just a clear path.",
};

export default function ProcessPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={styles.processHero}>
        <div className={styles.processHeroContent}>
          <span className="section-label">The 5-Step System</span>
          <div className="gold-line-center"></div>
          <h1>
            The Exact 5-Step System That Turns &ldquo;I Don&apos;t Know Where to
            Start&rdquo; Into &ldquo;Here Are My Keys&rdquo;
          </h1>
          <p style={{ fontSize: "1.15rem", marginTop: "20px", maxWidth: "600px", margin: "20px auto 0" }}>
            No guesswork. No surprises. Just a clear path from where you are now
            to homeowner.
          </p>
        </div>
      </section>

      {/* ========== OPENING ========== */}
      <section className={styles.openingSection}>
        <div className={`${styles.openingContent} fade-in`}>
          <p>The homebuying process feels like a black box.</p>
          <p>
            So you do nothing. Or you start Googling and get 47 different
            answers to the same question. Or you talk to a lender who approves
            you for way more than you should borrow, and now you&apos;re even more
            confused.
          </p>
          <div className={styles.callout}>
            That&apos;s what the HomeBridge System fixes &mdash; a clear, step-by-step path from where you are now to homeowner.
          </div>
        </div>
      </section>

      {/* ========== THE 5 STEPS ========== */}
      <section className={styles.stepsSection}>
        <div className={styles.stepsContainer}>
          <TimelineProgress />
          <div className="text-center fade-in" style={{ marginBottom: "48px" }}>
            <span className="section-label">The HomeBridge System</span>
            <div className="gold-line-center"></div>
            <h2>Your Path To Homeownership</h2>
          </div>

          {/* STEP 1 */}
          <div className={`${styles.stepCard} fade-in`}>
            <div className={styles.stepNumber}>1</div>
            <span className={styles.stepLabel}>Week 1</span>
            <h3>The Reality Check</h3>
            <p className={styles.stepContext}><strong>What Happens:</strong></p>
            <p>
              We sit down (on Zoom) for your 30-minute HomeBridge Strategy
              Session. This isn&apos;t a sales pitch. It&apos;s an audit of your
              situation.
            </p>
            <div className={styles.stepSubhead}>What You Get:</div>
            <div className={styles.stepList}>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>Your REAL affordability number &mdash; not what the bank will approve you for, but what you can actually afford without being house-poor</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>A breakdown of where your money will go (mortgage, taxes, insurance, maintenance, utilities &mdash; all of it)</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>A timeline: Should you buy now, or wait 6 months to improve your position?</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>The First-Time Buyer Trap Audit &mdash; the 7 most expensive mistakes and how to avoid them</p>
              </div>
            </div>
            <div className={styles.stepWalkaway}>
              <strong>What You Walk Away With:</strong>
              <p>Clarity. You&apos;ll know if you&apos;re ready, what you can afford, and what needs to happen next.</p>
            </div>
            <div className={styles.stepInsight}>
              This step is often overlooked, but it&apos;s critical. If we don&apos;t get
              your foundation right, everything else falls apart &mdash; so we start
              here before anything else.
            </div>
          </div>

          {/* STEP 2 */}
          <div className={`${styles.stepCard} fade-in`}>
            <div className={styles.stepNumber}>2</div>
            <span className={styles.stepLabel}>Week 2-3</span>
            <h3>The Financial Fortress</h3>
            <p className={styles.stepContext}><strong>What Happens:</strong></p>
            <p>
              I connect you with vetted lenders from my network &mdash; people I
              trust to give you fair rates and guide you toward the right loan.
            </p>
            <div className={styles.stepSubhead}>What You Get:</div>
            <div className={styles.stepList}>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>Pre-approval (so you know your exact buying power)</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>A breakdown of loan options that actually make sense for YOUR situation</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>Protection from predatory lending traps (yes, they still exist)</p>
              </div>
            </div>
            <div className={styles.stepWalkaway}>
              <strong>What You Walk Away With:</strong>
              <p>A pre-approval letter that sellers take seriously. And confidence that your lender isn&apos;t setting you up to fail.</p>
            </div>
            <div className={styles.stepInsight}>
              I don&apos;t just hand you a lender&apos;s phone number. I make the intro, I
              stay involved, and I make sure they&apos;re treating you right.
            </div>
          </div>

          {/* STEP 3 */}
          <div className={`${styles.stepCard} fade-in`}>
            <div className={styles.stepNumber}>3</div>
            <span className={styles.stepLabel}>Week 4-8</span>
            <h3>The Realtor Connection</h3>
            <p className={styles.stepContext}><strong>What Happens:</strong></p>
            <p>
              Just like I connected you with a trusted lender, I now connect you
              with a trusted realtor from my preferred network &mdash; someone I
              know will work hard for you and keep your best interests front and center.
            </p>
            <div className={styles.stepSubhead}>What You Get:</div>
            <div className={styles.stepList}>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>A personal introduction to a vetted realtor who is the right fit for your situation</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>Me staying involved throughout the search &mdash; available to advise you on any property you&apos;re considering</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>Guidance on what to look for and what red flags to avoid</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>A second set of experienced eyes before you fall in love with the wrong property</p>
              </div>
            </div>
            <div className={styles.stepWalkaway}>
              <strong>What You Walk Away With:</strong>
              <p>A trusted realtor in your corner &mdash; and me staying involved to make sure the search stays aligned with your goals and your budget.</p>
            </div>
            <div className={styles.stepInsight}>
              I don&apos;t just hand you a name and step back. I make the intro, stay
              in the loop, and make sure you have the right support every step of the way.
            </div>
          </div>

          {/* STEP 4 */}
          <div className={`${styles.stepCard} fade-in`}>
            <div className={styles.stepNumber}>4</div>
            <span className={styles.stepLabel}>Week 9-10</span>
            <h3>The Negotiation</h3>
            <p className={styles.stepContext}><strong>What Happens:</strong></p>
            <p>
              You found a house you love. Now comes the part where most buyers
              lose money.
            </p>
            <div className={styles.stepSubhead}>What You Get:</div>
            <div className={styles.stepList}>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>A competitive offer that doesn&apos;t overpay</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>Negotiation strategy based on market conditions, seller motivation, and leverage points</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>Inspection coordination (and I&apos;ll be there with you)</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>Repair negotiations if the inspection finds issues</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>Contract review so you understand every line before you sign</p>
              </div>
            </div>
            <div className={styles.stepWalkaway}>
              <strong>What You Walk Away With:</strong>
              <p>A deal that protects your money and your interests.</p>
            </div>
            <div className={styles.stepInsight}>
              This is where I earn my fee. I fight for you. I know what to push
              on and what to let go. And I make sure you&apos;re not leaving $10K on the table.
            </div>
          </div>

          {/* STEP 5 */}
          <div className={`${styles.stepCard} fade-in`}>
            <div className={styles.stepNumber}>5</div>
            <span className={styles.stepLabel}>Week 11-12</span>
            <h3>The Close</h3>
            <p className={styles.stepContext}><strong>What Happens:</strong></p>
            <p>
              We&apos;re in the final stretch. Paperwork. Underwriting. Appraisals.
              A thousand little details that can derail everything if someone
              isn&apos;t managing them.
            </p>
            <div className={styles.stepSubhead}>What You Get:</div>
            <div className={styles.stepList}>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>Coordination with the lender, title company, and seller&apos;s representative</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>A closing checklist so you know exactly what&apos;s happening and when</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>A final walkthrough to make sure the house is in the agreed-upon condition</p>
              </div>
              <div className={styles.stepListItem}>
                <span className={styles.checkGold}>&#10003;</span>
                <p>Me sitting next to you (virtually or in person) at closing to explain every document</p>
              </div>
            </div>
            <div className={styles.stepWalkaway}>
              <strong>What You Walk Away With:</strong>
              <p>Keys. To YOUR house.</p>
            </div>
            <div className={styles.stepInsight}>
              Most professionals disappear after the offer is accepted. I&apos;m with you
              until the door closes behind you in your new place.
            </div>
          </div>
        </div>
      </section>

      {/* ========== POST-CLOSE ========== */}
      <section className={styles.postCloseSection}>
        <div className={`${styles.postCloseContent} fade-in`}>
          <span className="section-label">Bonus</span>
          <div className="gold-line-center"></div>
          <h2>You Don&apos;t Get Abandoned</h2>
          <p>
            Even after closing, you&apos;ve got questions:
          </p>
          <ul className={styles.bonusList}>
            <li>&ldquo;Who do I call about this weird noise?&rdquo;</li>
            <li>&ldquo;Is this contractor quote reasonable?&rdquo;</li>
            <li>&ldquo;Should I refinance?&rdquo;</li>
          </ul>
          <p>
            I don&apos;t ghost you after I get paid. You&apos;ve got my number. You&apos;ve
            got access to my network. You&apos;ve got a resource for life.
          </p>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className={styles.processCta}>
        <div className={`${styles.processCtaContent} fade-in`}>
          <h2 className="section-title">
            This Is The Process. Clear. Simple. Protected.
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "24px" }}>
            The question is: Are you ready to start?
          </p>
          <p>
            30 minutes. $100 (credited back if we close together). We&apos;ll figure
            out where you stand, what&apos;s possible for you, and what happens next.
          </p>
          <p>
            <strong>I only take 12 clients per month.</strong> Once those spots
            fill, you&apos;re waiting until next month.
          </p>
          <Link href="https://connect.mayshomebridgellc.com/strategy-session" className="btn-primary btn-pulse">
            Book Your Session &mdash; Step 1 Starts Here{" "}
            <span className="arrow">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
