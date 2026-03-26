import Script from "next/script";
import styles from "./page.module.css";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
    title: "Book a Strategy Session | May's HomeBridge",
    description: "Book your strategy session with May's HomeBridge to navigate the real estate market with expert guidance.",
};

export default function StrategySessionPage() {
    return (
        <main className={styles.main}>
      <BreadcrumbSchema crumbs={[{ name: "Strategy Session", path: "/strategy-session" }]} />
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className="section-label">Get Started</span>
                    <div className="gold-line-center"></div>
                    <h1 className="section-title">Book Your Strategy Session</h1>
                    <p className={styles.subtitle}>
                        Complete the information below to secure your session. After payment, you will be able to choose your preferred date and time.
                    </p>
                </div>

                <div className={styles.calendarWrapper}>
                    <iframe
                        src="https://connect.mayshomebridgellc.com/strategy-session"
                        style={{ width: "100%", height: "800px", border: "none" }}
                        title="Book a Strategy Session Checkout"
                    />
                    <Script src="https://link.creativelygrow.com/js/form_embed.js" strategy="lazyOnload" />
                </div>
            </div>
        </main>
    );
}
