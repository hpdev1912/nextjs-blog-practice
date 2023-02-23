import Content from "@/layouts/content";
import { getSortedPostsData } from "@/utils/post";
import Main from "@/templates/main";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initPostState, setPostState } from "@/app/postSlice";

export default function Home({ posts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("POST_DATA");

    if (data) {
      dispatch(setPostState(JSON.parse(data)));
    } else {
      dispatch(initPostState(posts));
    }

    return () => {
      localStorage.clear("POST_DATA");
    };
  });

  return (
    <Main>
      <Content />
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
