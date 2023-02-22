import ArticleList from "@/components/ArticleList";
import styles from "@/styles/Content.module.css";
import Image from "next/image";

const Content = ({ posts }) => {
  return (
    <div className={styles.content}>
      <Image
        className={styles.img}
        src="https://source.unsplash.com/random"
        width={1200}
        height={400}
        alt="Tech Blog"
      />
      <div className={styles.title}>
        <p className={styles.single}>Title of a longer featured blog post</p>
        <p className={styles.multiple}>
          Multiple lines of text that form the lede, informing new readers quickly and efficiently
          about what is the most interesting in this contents.
        </p>
      </div>
      <div className={styles["article-container"]}>
        <ArticleList posts={posts} />
      </div>
    </div>
  );
};

export default Content;
