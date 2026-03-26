import Image from "next/image";
import styles from "./blog-components.module.css";

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function BlogImage({ src, alt, caption }: BlogImageProps) {
  return (
    <figure className={styles.figure}>
      <div className={styles.imageWrapper}>
        <Image src={src} alt={alt} fill className={styles.image} />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
