import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "./data/posts";

const DiscussionPost = () => {
  const { id } = useParams();
  const { title, submission, author, upvotes, downvotes } = posts[id];

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
