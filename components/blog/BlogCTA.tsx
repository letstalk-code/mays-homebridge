import Link from "next/link";
import styles from "./blog-components.module.css";

interface BlogCTAProps {
  heading?: string;
  body?: string;
  label?: string;
  href?: string;
}

export default function BlogCTA({
  heading = "Ready to Take the Next Step?",
  body = "Book a free strategy session with May and get a clear, honest plan for your home buying journey.",
  label = "Book a Strategy Session",
  href = "/strategy-session",
}: BlogCTAProps) {
  return (
    <div className={styles.blogCta}>
      <h3 className={styles.blogCtaHeading}>{heading}</h3>
      <p className={styles.blogCtaBody}>{body}</p>
      <Link href={href} className="btn-primary">
        {label} →
      </Link>
    </div>
  );
}
