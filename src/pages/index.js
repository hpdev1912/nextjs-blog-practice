import Content from "@/layouts/content";
import { getSortedPostsData } from "@/utils/post";
import Main from "@/templates/main";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "@/app/postSlice";

export default function Home({ posts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPosts(posts));
  });

  return (
    <Main>
      <Content posts={posts} />
    </Main>
  );
}

export async function getStaticProps() {
  //Get post data from md file
  const posts = await getSortedPostsData();
  return {
    props: {
      posts: posts,
    },
  };
}
