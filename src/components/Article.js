import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Article.module.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { togglePostRead } from "@/app/postSlice";

const Article = ({ post }) => {
  const dispatch = useDispatch();

  const {
    slug,
    frontmatter: { title, date, excerpt, cover_image },
    isRead,
  } = post;

  const handleButtonClick = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    dispatch(togglePostRead({ slug, time: "Dec 19, 2021" }));
  };

  return (
    <div className={styles.container}>
      <div className={styles["info-container"]}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p className={styles.title}>{title}</p>
          <Button variant="text" onClick={handleButtonClick}>
            {isRead ? "Mark as unread" : "Mark as read"}
          </Button>
        </div>
        <p className={styles.date}>{date}</p>
        <p>{excerpt}</p>
        <Link
          className={isRead ? styles["link-active"] : styles.link}
          href={`/blog/${encodeURIComponent(slug)}`}
        >
          Continue reading....
        </Link>
      </div>
      <Image className={styles.img} src={cover_image} alt="Somethings" width={250} height={250} />
    </div>
  );
};

export default Article;
