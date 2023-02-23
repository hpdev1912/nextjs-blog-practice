import Button from "@mui/material/Button";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import Link from "next/link";
import path from "path";

import styles from "@/styles/Blog.module.css";
import Main from "@/templates/main";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function PostPage({ frontmatter: { title, date, cover_image }, slug, content }) {
  const currentPost = useSelector((state) =>
    state.posts.posts.filter((post) => post.slug === slug)
  );
  const postState = useSelector((state) => state.posts.posts);

  useEffect(() => {
    return () => {
      localStorage.setItem("POST_DATA", JSON.stringify(postState));
    };
  });

  return (
    <Main>
      <Button sx={{ mt: 3, ml: 4 }} variant="contained">
        <Link href="/"> Go Back </Link>
      </Button>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>Posted on {date}</p>
        <p style={{ fontSize: "14px", color: "gray" }}>
          {currentPost[0]?.timeRead && `Last view on ${currentPost[0]?.timeRead}`}
        </p>
        <Image className={styles.img} src={cover_image} alt="" width={688} height={459} />
        {/* <img src={cover_image} alt="" /> */}
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Main>
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
