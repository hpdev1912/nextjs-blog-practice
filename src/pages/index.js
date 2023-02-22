import Content from "@/layouts/content";
import { getSortedPostsData } from "@/utils/post";
import Main from "@/templates/main";

export default function Home({ posts }) {
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
