import React, { useState } from "react";
import { posts } from "./data/posts";
import { homePosts, discussionPosts } from "./data/homePosts";
import { PostPreview } from "./components/post-preview.js";
import { Link } from "react-router-dom";
import Preview from "./Preview";

const Discussion = () => {
  const [currPostId, setCurrPostId] = useState("");

  const updateCurrPost = (id) => {
    setCurrPostId(id);
  };

  const updateVotes = (id, type, val) => {
    const filteredPost = posts[id];
    filteredPost[type] = val;
  };

  const changeVoteStatus = (id, type) => {
    let filteredPost = posts[id];
    if (type === "upvotes") {
      if (filteredPost.upvoted) {
        filteredPost = {
          ...filteredPost,
          upvoted: false,
          upvotes: filteredPost.upvotes - 1,
        };
      } else {
        filteredPost = {
          ...filteredPost,
          ...(filteredPost.downvoted && {
            downvoted: false,
            downvotes: filteredPost.downvotes - 1,
          }),
          upvoted: true,
          upvotes: filteredPost.upvotes + 1,
        };
      }
    } else if (type === "downvotes") {
      if (filteredPost.downvoted) {
        filteredPost = {
          ...filteredPost,
          downvoted: false,
          downvotes: filteredPost.downvotes - 1,
        };
      } else {
        filteredPost = {
          ...filteredPost,
          ...(filteredPost.upvoted && {
            upvoted: false,
            upvotes: filteredPost.upvotes - 1,
          }),
          downvoted: true,
          downvotes: filteredPost.downvotes + 1,
        };
      }
    }

    posts[id] = filteredPost;
    return {
      upvotes: filteredPost.upvotes,
      downvotes: filteredPost.downvotes,
      upvoted: filteredPost.upvoted,
      downvoted: filteredPost.downvoted,
    };
  };

  return (
    <div className="discussion">
      <div id="content">
        <Link to="/add-post">
          <button className="add-post-button">+</button>
        </Link>
        <div className="row">
          <div className="col-7" style={{ textAlign: "left" }}></div>
          <div className="col-5">
            <div className="row">
              <div className="col-5">
                <button className="discussion-button">Filter</button>
              </div>
              <div className="col-5">
                <button className="discussion-button">Sort</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Preview posts={homePosts} />
          <Preview posts={discussionPosts} />
        </div>
      </div>
    </div>
  );
};

export default Discussion;
