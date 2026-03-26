import styles from "./blog-components.module.css";

interface CalloutProps {
  children: React.ReactNode;
  type?: "tip" | "warning" | "quote";
}

export default function Callout({ children, type = "tip" }: CalloutProps) {
  const icons = { tip: "💡", warning: "⚠️", quote: "❝" };
  return (
    <div className={`${styles.callout} ${styles[type]}`}>
      <span className={styles.calloutIcon}>{icons[type]}</span>
      <div className={styles.calloutContent}>{children}</div>
    </div>
  );
}
