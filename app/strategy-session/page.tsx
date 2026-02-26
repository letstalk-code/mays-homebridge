import Script from "next/script";
import styles from "./page.module.css";

export const metadata = {
    title: "Book a Strategy Session | May's HomeBridge",
    description: "Book your strategy session with May's HomeBridge to navigate the real estate market with expert guidance.",
};

export default function StrategySessionPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className="section-label">Get Started</span>
                    <div className="gold-line-center"></div>
                    <h1 className="section-title">Book Your Strategy Session</h1>
                    <p className={styles.subtitle}>
                        Choose a date and time below that works best for you. We look forward to talking!
                    </p>
                </div>

                <div className={styles.calendarWrapper}>
                    <iframe
                        src="https://link.creativelygrow.com/widget/booking/35hnKJcRvTpaCW4j1tl1"
                        style={{ width: "100%", border: "none", overflow: "hidden" }}
                        scrolling="no"
                        id="35hnKJcRvTpaCW4j1tl1_1771888351169"
                        title="Book a Strategy Session"
                    />
                    <Script src="https://link.creativelygrow.com/js/form_embed.js" strategy="lazyOnload" />
                </div>
            </div>
        </main>
    );
}
