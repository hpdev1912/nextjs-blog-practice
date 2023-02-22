import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Article.module.css";

const Article = ({ post }) => {
  console.log("Article");
  console.log(post);
  const {
    slug,
    frontmatter: { title, date, excerpt, cover_image },
  } = post;
  return (
    <div className={styles.container}>
      <div className={styles["info-container"]}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
        <p>{excerpt}</p>
        <Link className={styles.link} href={`/blog/${encodeURIComponent(slug)}`}>
          Continue reading....
        </Link>
      </div>
      <Image src={cover_image} alt="Somethings" width={250} height={250} />
    </div>
  );
};

export default Article;
