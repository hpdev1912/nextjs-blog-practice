import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  return posts.map((post, idx) => <Article key={idx} post={post} />);
};

export default ArticleList;
