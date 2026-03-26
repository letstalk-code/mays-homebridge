import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  coverImage?: string;
}

export interface Post extends PostMeta {
  source: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.(mdx|md)$/, "");
    const filePath = path.join(postsDir, filename);
    const { data } = matter(fs.readFileSync(filePath, "utf8"));

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      author: (data.author as string) ?? "Qunietta L May",
      coverImage: data.coverImage as string | undefined,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSource(slug: string): { source: string; meta: PostMeta } {
  const mdxPath = path.join(postsDir, `${slug}.mdx`);
  const mdPath = path.join(postsDir, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    source: content,
    meta: {
      slug,
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      author: (data.author as string) ?? "Qunietta L May",
      coverImage: data.coverImage as string | undefined,
    },
  };
}
