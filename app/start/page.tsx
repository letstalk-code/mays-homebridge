import styles from './page.module.css';

export default function StartPage() {
    return (
        <div className={styles.page}>
            {/* ===== HEADER ===== */}
            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <p className={styles.logo}>May&apos;s HomeBridge</p>
                    <p className={styles.tagline}>Your Trusted Real Estate Advocate</p>
                </div>
            </header>

            {/* ===== HERO ===== */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <span className="section-label">You Saw This For A Reason</span>
                    <div className="gold-line-center"></div>
                    <h1 className={styles.heroHeadline}>
                        You&apos;re Ready To Stop Renting &mdash;<br className={styles.desktopBreak} />
                        You Just Don&apos;t Know Where To Start
                    </h1>
                    <p className={styles.heroSub}>
                        Most people spend years &ldquo;thinking about buying&rdquo; because nobody ever sat down
                        and showed them what&apos;s actually possible. That&apos;s exactly what I do.
                    </p>
                    <a href="#claim" className={`btn-primary btn-pulse ${styles.heroCta}`}>
                        Claim My Free Strategy Spot &rarr;
                    </a>
                </div>
            </section>

            {/* ===== PAIN POINTS ===== */}
            <section className={styles.pain}>
                <div className={styles.painInner}>
                    <h2 className={styles.painHeading}>Sound familiar?</h2>
                    <ul className={styles.painList}>
                        <li>You&apos;re tired of paying rent and having nothing to show for it</li>
                        <li>You don&apos;t know if you can actually afford to buy right now</li>
                        <li>You watch other people buy homes and wonder what they know that you don&apos;t</li>
                    </ul>
                    <p className={styles.painClose}>
                        The difference between them and you isn&apos;t money or luck &mdash;
                        it&apos;s a <strong>clear plan</strong>. That&apos;s what I give you.
                    </p>
                </div>
            </section>

            {/* ===== OFFER ===== */}
            <section className={styles.offer}>
                <div className={styles.offerInner}>
                    <span className="section-label">The $100 Strategy Session</span>
                    <div className="gold-line-center"></div>
                    <h2 className={styles.offerHeading}>
                        30 Minutes That Could Change Everything
                    </h2>
                    <p className={styles.offerIntro}>
                        In one focused call, you&apos;ll walk away with:
                    </p>
                    <ul className={styles.checkList}>
                        <li>
                            <span className={styles.check}>&#10003;</span>
                            <span>Your <strong>Real Affordability Assessment</strong> &mdash; know exactly what you can buy today</span>
                        </li>
                        <li>
                            <span className={styles.check}>&#10003;</span>
                            <span>The <strong>First-Time Buyer Trap Audit</strong> &mdash; avoid the $30K+ mistakes most buyers make</span>
                        </li>
                        <li>
                            <span className={styles.check}>&#10003;</span>
                            <span>Your <strong>Personalized Homebuying Roadmap</strong> &mdash; a step-by-step plan built for your situation</span>
                        </li>
                        <li>
                            <span className={styles.check}>&#10003;</span>
                            <span>Access to my <strong>vetted lender &amp; inspector network</strong> in Mobile, AL</span>
                        </li>
                    </ul>
                    <div className={styles.offerNote}>
                        <strong>And if we close on your home together? The $100 gets credited back to your closing costs.</strong>
                        <br />You literally cannot lose.
                    </div>
                </div>
            </section>

            {/* ===== SOCIAL PROOF ===== */}
            <section className={styles.proof}>
                <div className={styles.proofInner}>
                    <div className={styles.statRow}>
                        <div className={styles.stat}>
                            <span className={styles.statNum}>200+</span>
                            <span className={styles.statLabel}>Families Helped</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNum}>$30K+</span>
                            <span className={styles.statLabel}>Avg. Mistakes Avoided</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNum}>45</span>
                            <span className={styles.statLabel}>Day Average Close</span>
                        </div>
                    </div>
                    <blockquote className={styles.testimonial}>
                        &ldquo;I thought I needed at least two more years to save up. Qunietta showed me I was
                        already closer than I thought. We closed 45 days after our first call.&rdquo;
                        <cite>&mdash; Sarah T., first-time buyer, Mobile AL</cite>
                    </blockquote>
                </div>
            </section>

            {/* ===== BOOKING CTA ===== */}
            <section id="claim" className={styles.formSection}>
                <div className={styles.formInner}>
                    <span className="section-label">Save Your Spot</span>
                    <div className="gold-line-center"></div>
                    <h2 className={styles.formHeading}>
                        Claim Your $100 Strategy Session
                    </h2>
                    <p className={styles.formSub}>
                        Secure your spot and pay below. Qunietta will reach out within 24 hours to confirm your time.
                    </p>
                    <a
                        href="/strategy-session"
                        className={`btn-primary btn-pulse ${styles.submitBtn}`}
                    >
                        Book Your Strategy Session &rarr;
                    </a>
                    <p className={styles.formDisclaimer}>
                        No spam. No pressure. Qunietta will personally reach out to schedule your time.
                    </p>
                </div>
            </section>

            {/* ===== SCARCITY ===== */}
            <section className={styles.scarcity}>
                <div className={styles.scarcityInner}>
                    <p className={styles.scarcityText}>
                        <strong>Only 12 new clients accepted per month.</strong> Spots fill within the first 10&ndash;14 days.
                        Don&apos;t wait until you&apos;re on the waitlist.
                    </p>
                </div>
            </section>

            {/* ===== MINIMAL FOOTER ===== */}
            <footer className={styles.footer}>
                <p>May&apos;s HomeBridge LLC &mdash; Mobile, AL</p>
                <p>
                    <a href="tel:+12513509282">(251) 350-9282</a>
                </p>
                <p className={styles.footerCopy}>&copy; {new Date().getFullYear()} May&apos;s HomeBridge LLC. All rights reserved.</p>
            </footer>
        </div>
    );
}
