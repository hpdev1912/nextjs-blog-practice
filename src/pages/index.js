import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/layouts/header";
import { getSortedPostsData } from "@/lib/post";
import Content from "@/layouts/content";
import Footer from "@/layouts/footer";
import Main from "@/templates/main";

export default function Home({ posts }) {
  return (
    <Main>
      <Content posts={posts} />
    </Main>
  );
}

export async function getStaticProps() {
  const posts = await getSortedPostsData();
  return {
    props: {
      posts: posts,
    },
  };
}
