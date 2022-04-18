import React, { useState } from "react";
import { posts } from "./data/posts";
import { PostPreview } from "./components/";

const Discussion = () => {
  const [currPostId, setCurrPostId] = useState("");

  const updateCurrPost = (id) => {
    setCurrPostId(id);
    console.log("curr post id: ", id);
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
    <div className="home">
      <div id="content">
        <div className="container">
          <div className="row align-items-end text-center">
            <div className="nav-button col">
              <button>XPoints - 100</button>
            </div>
            <div className="nav-button col">
              <button>Filter</button>
            </div>
            <div className="nav-button col">
              <button>Sort</button>
            </div>
          </div>
          <div className="row justify-content-md-center">
            {posts.map(
              (
                {
                  author,
                  category,
                  submission,
                  title,
                  status,
                  upvotes,
                  downvotes,
                  icon,
                  upvoted,
                  downvoted,
                },
                idx
              ) => (
                <PostPreview
                  key={idx}
                  id={idx}
                  author={author}
                  currPostId={currPostId}
                  updateVotes={updateVotes}
                  updateCurrPost={updateCurrPost}
                  category={category}
                  submission={submission}
                  title={title}
                  status={status}
                  upvotes={upvotes}
                  downvotes={downvotes}
                  icon={icon}
                  changeVoteStatus={changeVoteStatus}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
