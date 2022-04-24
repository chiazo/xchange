import React from "react";
import { useLocation } from "react-router-dom";

const DiscussionPost = () => {
  const {
    state: { post },
  } = useLocation();

  const { title, submission, author, upvotes, downvotes } = post;

  return (
    <div className="home">
      <div id="content">
        <div className="row justify-content-md-center">
          <h2>{title}</h2>
          <h4>by {author}</h4>
          <p>Upvotes: {upvotes}</p>
          <p>Downvotes: {downvotes}</p>
          <p>{submission}</p>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPost;
