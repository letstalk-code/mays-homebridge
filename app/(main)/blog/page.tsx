import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import styles from "./blog.module.css";

export const metadata = {
  title: "Homebuying Tips & Guides for Mobile, AL | May's HomeBridge Blog",
  description:
    "Real advice on buying a home in Mobile, AL — credit repair, the homebuying process, and how to get the best deal. Written by Qunietta L May.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: "Blog", path: "/blog" }]} />

      <section className={styles.hero}>
        <span className="section-label">The HomeBridge Blog</span>
        <div className="gold-line-center"></div>
        <h1 className="section-title">Homebuying Advice You Can Actually Use</h1>
        <p className={styles.heroSub}>
          Real talk on credit, the buying process, and how to protect your money — from someone who&apos;s guided 200+ families to their keys.
        </p>
      </section>

      <section className={styles.postsSection}>
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
              <div className={styles.postMeta}>
                <span className={styles.postDate}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </span>
                <span className={styles.postAuthor}>{post.author}</span>
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDescription}>{post.description}</p>
              <span className={styles.readMore}>Read More →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
