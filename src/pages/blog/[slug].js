import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";

import styles from "@/styles/Blog.module.css";
import Header from "@/layouts/Header";

export default function PostPage({ frontmatter: { title, date, cover_image }, slug, content }) {
  const abcd = marked(content);
  console.log(abcd);
  return (
    <div className={styles["blog-page"]}>
      <Header />
      <Link href="/">
        <Button className={styles.link} variant="contained">
          Go Back
        </Button>
      </Link>
      <div className={styles.container}>
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <Image src={cover_image} alt="" width={688} height={459} />
        {/* <img src={cover_image} alt="" /> */}
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("src/posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
