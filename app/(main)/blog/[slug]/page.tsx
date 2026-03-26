import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostSource } from "@/lib/blog";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Callout from "@/components/blog/Callout";
import BlogImage from "@/components/blog/BlogImage";
import BlogCTA from "@/components/blog/BlogCTA";
import styles from "./post.module.css";
import { notFound } from "next/navigation";

const components = { Callout, BlogImage, BlogCTA };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta } = getPostSource(slug);
    return {
      title: `${meta.title} | May's HomeBridge`,
      description: meta.description,
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let source: string;
  let meta: ReturnType<typeof getPostSource>["meta"];

  try {
    const result = getPostSource(slug);
    source = result.source;
    meta = result.meta;
  } catch {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: meta.title, path: `/blog/${slug}` },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: meta.title,
          description: meta.description,
          author: {
            "@type": "Person",
            name: meta.author,
          },
          datePublished: meta.date,
          publisher: {
            "@type": "Organization",
            name: "May's HomeBridge LLC",
            url: "https://mayshomebridgellc.com",
          },
          url: `https://mayshomebridgellc.com/blog/${slug}`,
        })}}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.date}>
              {new Date(meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </span>
            <span className={styles.author}>by {meta.author}</span>
          </div>
          <h1 className={styles.title}>{meta.title}</h1>
          <p className={styles.description}>{meta.description}</p>
        </header>

        <div className={styles.content}>
          <MDXRemote source={source} components={components} />
        </div>

        <footer className={styles.footer}>
          <Link href="/blog" className={styles.backLink}>← Back to all posts</Link>
          <div className={styles.cta}>
            <p>Ready to take the next step?</p>
            <Link href="/strategy-session" className="btn-primary">
              Book a Strategy Session →
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}
