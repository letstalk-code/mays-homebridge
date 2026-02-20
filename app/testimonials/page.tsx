import Link from "next/link";
import styles from "./page.module.css";
import StatsCounter from "@/components/StatsCounter";

export const metadata = {
  title: "Client Success Stories - May's HomeBridge Reviews",
  description:
    "Read real stories from people who thought homeownership was out of reach — and proved themselves wrong with May's HomeBridge. 200+ families helped.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={styles.testHero}>
        <div className={styles.testHeroContent}>
          <span className="section-label">Real Results</span>
          <div className="gold-line-center"></div>
          <h1>
            &ldquo;I Have Been Waiting On This Moment For A Long Time&rdquo; &mdash; And
            Other Stories From People Who Finally Became Homeowners
          </h1>
          <p style={{ fontSize: "1.15rem", marginTop: "20px", maxWidth: "550px", margin: "20px auto 0" }}>
            Real clients. Real emotions. Real homes.
          </p>
        </div>
      </section>

      {/* ========== OPENING ========== */}
      <section style={{ padding: "60px 0 0", background: "var(--bg-white)" }}>
        <div className="narrow-container fade-in" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem" }}>
            Look, I can tell you all day that I&apos;m different. But you don&apos;t
            have to take my word for it. Here&apos;s what happens when people stop
            waiting and start working with someone who actually fights for them:
          </p>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className={styles.testimonialsSection}>
        {/* TESTIMONIAL 1 */}
        <div className={`${styles.testimonialBlock} fade-in`}>
          <div className={styles.testimonialHeader}>
            <div className={styles.testimonialAvatar}>SF</div>
            <div>
              <div className={styles.testimonialName}>Sterling Flott</div>
              <div className={styles.testimonialTitle}>First-Time Homebuyer</div>
            </div>
          </div>
          <div className={styles.testimonialQuote}>
            <span className={styles.quoteIcon}>&rdquo;</span>
            <p>
              &ldquo;Ever heard the saying, &lsquo;Give people their flowers while they
              still can smell &apos;em&rsquo;? I think today&apos;s the day to live that
              out. Now&apos;s my chance to shout about how truly incredible Qunietta
              May has been.
            </p>
            <p>
              First of all, this rockstar guided me through the chaos of
              homeownership and helped with the process of me buying a house - a
              freaking HOUSE!
            </p>
            <p> That&apos;s just her opening act though.</p>
            <p>
              She&apos;s stepped up and sorted out my tangled taxes without batting
              an eyelid. But here&apos;s Qunietta - cool, calm and just diving right in!
              She didn&apos;t just care - she went above and beyond, doing
              more than anyone could ever ask for.
            </p>
            <p>
              Qunietta, you&apos;re honestly the best, the cream of the crop, top of
              the tops! Your work is nothing short of life-changing. I know I&apos;ve
              packaged a lot of stress and hassle your way, and I&apos;m beyond grateful for your patience and understanding.
            </p>
            <p>
              Thank you, from the bottom of my heart, Ms. Qunietta May. I&apos;ll forever be
              grateful! Keep being the superhero you are!&rdquo;
            </p>
          </div>
          <div className={styles.resultBox}>
            <div className={styles.resultLabel}>The Result</div>
            <p>
              Guided through &ldquo;the chaos of homeownership.&rdquo; Sorted out tax
              complications. Went above and beyond. Life-changing work.
            </p>
          </div>
          <div className={styles.analysisBox}>
            <p>
              <strong>What This Shows:</strong> When Sterling says &ldquo;she went above and beyond, doing more than
              anyone could ever ask for&rdquo; &mdash; that&apos;s not just nice words.
              That&apos;s someone who had PROBLEMS (tax issues, complications,
              stress) and got SOLUTIONS. Most agents would&apos;ve disappeared. I
              didn&apos;t.
            </p>
          </div>
        </div>

        {/* TESTIMONIAL 2 */}
        <div className={`${styles.testimonialBlock} fade-in`}>
          <div className={styles.testimonialHeader}>
            <div className={styles.testimonialAvatar}>JW</div>
            <div>
              <div className={styles.testimonialName}>JaTara Williams</div>
              <div className={styles.testimonialTitle}>Finally A Homeowner</div>
            </div>
          </div>
          <div className={styles.testimonialQuote}>
            <span className={styles.quoteIcon}>&rdquo;</span>
            <p>
              &ldquo;I have been waiting on this moment for a long time big big thank
              you to Tomeika Hawkins and Qunietta May these 2 women have been my
              saving graces for any realtor needs or tax services need please
              please contact these ladies immediately big thanks to my sister and
              brother in law Tierra Williams Jones John Jones and my momma of course and my friends for all the
              support and listening ears YOUR GIRL IS FINALLY A HOMEOWNER!&rdquo;
            </p>
          </div>
          <div className={styles.resultBox}>
            <div className={styles.resultLabel}>The Result</div>
            <p>
              Waited a long time. Finally became a homeowner. Called Qunietta her
              &ldquo;saving grace.&rdquo;
            </p>
          </div>
          <div className={styles.analysisBox}>
            <p>
              <strong>What This Shows:</strong> JaTara had been WAITING. Stuck. Didn&apos;t know how to make it
              happen. Then she worked with me and it happened. &ldquo;Saving grace&rdquo;
              isn&apos;t language people use lightly &mdash; that&apos;s someone who thought
              it was impossible and discovered it wasn&apos;t.
            </p>
          </div>
        </div>

        {/* TESTIMONIAL 3 */}
        <div className={`${styles.testimonialBlock} fade-in`}>
          <div className={styles.testimonialHeader}>
            <div className={styles.testimonialAvatar}>DW</div>
            <div>
              <div className={styles.testimonialName}>Dt Williams</div>
              <div className={styles.testimonialTitle}>Closed Successfully</div>
            </div>
          </div>
          <div className={styles.testimonialQuote}>
            <span className={styles.quoteIcon}>&rdquo;</span>
            <p>
              &ldquo;I can hardly contain my excitement as I write to you today, and I
              wanted to take a moment to express just how thrilled I am to have
              been a part of your journey toward homeownership. Congratulations
              on this incredible milestone!
            </p>
            <p>
              Becoming a homeowner is a monumental achievement, and I want you to
              know how proud I am of you for reaching this point. The hard work,
              dedication, and perseverance you have shown throughout this process
              have truly paid off. It&apos;s been a pleasure to assist you every
              step of the way and witness your dreams becoming a reality.&rdquo;
            </p>
          </div>
          <div className={styles.resultBox}>
            <div className={styles.resultLabel}>The Result</div>
            <p>
              Client congratulated by Qunietta at closing. Hard work paid off. Dreams became reality.
            </p>
          </div>
          <div className={styles.analysisBox}>
            <p>
              <strong>What This Shows:</strong> This is what I send clients when they close. Notice the language: &ldquo;assist you every step of the way&rdquo; and
              &ldquo;witness your dreams becoming a reality.&rdquo; That&apos;s not
              transactional. That&apos;s partnership.
            </p>
          </div>
        </div>
      </section>

      {/* ========== THE PATTERN ========== */}
      <section className={styles.patternSection}>
        <div className={`${styles.patternContent} fade-in`}>
          <span className="section-label">The Pattern</span>
          <div className="gold-line"></div>
          <h2 className="section-title">
            What All These Stories Have In Common
          </h2>
          <div className={styles.patternList}>
            <div className={styles.patternItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>They all thought it would be harder than it was (because I made it manageable)</p>
            </div>
            <div className={styles.patternItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>They all had complications &mdash; taxes, chaos, long waits (I handled them)</p>
            </div>
            <div className={styles.patternItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>They all felt supported throughout the entire process (not just until the offer was accepted)</p>
            </div>
            <div className={styles.patternItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>They all use words like &ldquo;saving grace,&rdquo; &ldquo;superhero,&rdquo; &ldquo;above and beyond&rdquo; (because that&apos;s how they felt)</p>
            </div>
            <div className={styles.patternItem}>
              <span className={styles.checkGold}>&#10003;</span>
              <p>They all became homeowners (that&apos;s the whole point)</p>
            </div>
          </div>
          <p>
            <strong>
              That&apos;s not luck. That&apos;s process. That&apos;s care. That&apos;s what happens
              when you work with someone who actually gives a damn.
            </strong>
          </p>
        </div>
      </section>

      {/* ========== EMOTIONAL TRUTH ========== */}
      <section className={styles.truthSection}>
        <div className="text-center fade-in" style={{ marginBottom: "40px", padding: "0 24px" }}>
          <span className="section-label">The Emotional Truth</span>
          <div className="gold-line-center"></div>
        </div>
        <div className={styles.truthGrid}>
          <div className={`${styles.truthColumn} fade-in-left`}>
            <h3>Notice what these reviews DON&apos;T say</h3>
            <div className={styles.truthItem}>
              <span className={styles.xIcon}>&#10007;</span>
              <p style={{ color: "var(--silver)" }}>&ldquo;Great service!&rdquo;</p>
            </div>
            <div className={styles.truthItem}>
              <span className={styles.xIcon}>&#10007;</span>
              <p style={{ color: "var(--silver)" }}>&ldquo;Highly recommend!&rdquo;</p>
            </div>
            <div className={styles.truthItem}>
              <span className={styles.xIcon}>&#10007;</span>
              <p style={{ color: "var(--silver)" }}>&ldquo;Five stars!&rdquo;</p>
            </div>
          </div>
          <div className={`${styles.truthColumn} fade-in-right`}>
            <h3>What They DO Say</h3>
            <div className={styles.truthItem}>
              <span className={styles.goldCheck}>&#10003;</span>
              <p style={{ color: "var(--silver-light)" }}>&ldquo;I&apos;ll forever be grateful&rdquo;</p>
            </div>
            <div className={styles.truthItem}>
              <span className={styles.goldCheck}>&#10003;</span>
              <p style={{ color: "var(--silver-light)" }}>&ldquo;Life-changing&rdquo;</p>
            </div>
            <div className={styles.truthItem}>
              <span className={styles.goldCheck}>&#10003;</span>
              <p style={{ color: "var(--silver-light)" }}>&ldquo;Saving grace&rdquo;</p>
            </div>
            <div className={styles.truthItem}>
              <span className={styles.goldCheck}>&#10003;</span>
              <p style={{ color: "var(--silver-light)" }}>&ldquo;YOUR GIRL IS FINALLY A HOMEOWNER!&rdquo;</p>
            </div>
          </div>
        </div>
        <div className="narrow-container fade-in text-center" style={{ marginTop: "40px" }}>
          <p>
            That&apos;s the difference between working with someone who&apos;s chasing a commission and working with someone who&apos;s invested in your outcome.
          </p>
          <p>
            These aren&apos;t clients. These are people whose lives changed. And they know who helped make it happen.
          </p>
        </div>
      </section>

      {/* ========== WHY THEY FELT THIS WAY ========== */}
      <section className={styles.whySection}>
        <div className={styles.whyContent + " fade-in"}>
          <span className="section-label">Why They Felt This Way</span>
          <div className="gold-line"></div>
          <h2>Let me tell you what happened behind these reviews:</h2>
          <p>
            <strong>Sterling</strong> had tax complications that would&apos;ve derailed most deals. Most agents would&apos;ve said &ldquo;sorry, can&apos;t help you until that&apos;s sorted&rdquo; and moved on to an easier client. I didn&apos;t. I stepped in, sorted it out, and got him to closing.
          </p>
          <p>
            <strong>JaTara</strong> had been waiting a long time. She thought it was impossible. She worked with me, and it became possible. That&apos;s why she&apos;s shouting it with heart emojis &mdash; because she genuinely didn&apos;t think it would happen.
          </p>
          <p>
            Every client I close gets a personal message from me congratulating them. Because this isn&apos;t just another transaction to me. It&apos;s someone&apos;s LIFE changing.
          </p>
          <div className={styles.whyCallout}>
            That&apos;s what you get when you work with May&apos;s HomeBridge. Not a transaction. A transformation.
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className={styles.statsSection}>
        <div className="text-center fade-in">
          <span className="section-label">The Numbers</span>
          <div className="gold-line-center"></div>
        </div>
        <div className={styles.statsGrid}>
          <StatsCounter
            numberClassName={styles.statNumber}
            labelClassName={styles.statLabel}
            cardClassName={styles.statCard}
            stats={[
              { end: 200, suffix: '+', label: 'Families Helped' },
              { end: 100, suffix: '%', label: 'Close Rate Under Contract' },
              { text: 'Avg.', label: '\u201CAbove and Beyond\u201D experience' },
              { text: 'Mentioned', label: '\u201CSaving Grace\u201D & \u201CSuperhero\u201D' },
            ]}
          />
        </div>
        <div className="text-center fade-in" style={{ marginTop: "40px", color: "var(--text-light)" }}>
          <p>You don&apos;t get reviews like that by accident. You get them by caring.</p>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className={styles.testCta}>
        <div className={`${styles.testCtaContent} fade-in`}>
          <h2 className="section-title">
            What&apos;s The Story You&apos;re Telling Yourself About Why You Can&apos;t?
          </h2>
          <div className="gold-line-center"></div>
          <p>
            You just read three stories from people who thought homeownership was out of reach. They were wrong.
          </p>
          <p>
            Sterling thought his tax issues would disqualify him. JaTara thought
            she&apos;d be renting forever. They both own homes now. Let&apos;s find out
            if your story is actually true &mdash; or if you just need someone who
            knows how to make it happen.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="https://connect.mayshomebridgellc.com/strategy-session" className="btn-primary">
              Are You Next? Book Now <span className="arrow">&rarr;</span>
            </Link>
          </div>
          <p style={{ marginTop: "16px", fontSize: "0.9rem", color: "var(--text-light)" }}>
            60 minutes. $100 (credited back if we work together). Limited to 12
            clients per month.
          </p>

          <div className={styles.psBox}>
            <p>
              <strong>P.S.</strong> &mdash; Sterling called me a superhero. JaTara
              called me her saving grace. These aren&apos;t exaggerations &mdash;
              they&apos;re how people feel when someone actually fights for them.
            </p>
            <p>
              You could be sending me a message like this six months from now. Or you could still be sitting here wondering if it&apos;s possible. The only difference is the decision you make right now.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="https://app.gohighlevel.com/v2/preview/yG5IuXsjDSJjwlUlqzqe" className="btn-primary" style={{ background: 'var(--charcoal)', color: '#fff' }}>
                Stop Wondering. Book Your Session. <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
