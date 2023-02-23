import React from "react";
import Article from "./Article";

const ArticleList = ({ postsList }) => {
  return postsList.map((post, idx) => <Article key={idx} post={post} />);
};

export default ArticleList;
