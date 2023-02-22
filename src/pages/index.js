import Content from "@/layouts/content";
import { getSortedPostsData } from "@/lib/post";
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
