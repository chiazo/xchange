import React from "react";
import { PostPreview } from "./components/";

const Preview = ({ posts, allPosts }) => {
  const updateVotes = (id, type, val) => {
    const filteredPost = allPosts[id];
    filteredPost[type] = val;
  };

  const changeVoteStatus = (id, type) => {
    let filteredPost = allPosts[id];
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

    allPosts[id] = filteredPost;
    posts[id] = filteredPost;
    return filteredPost;
  };

  return (
    <div className="Preview">
      {posts.map(
        ({
          id,
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
        }) => {
          return (
            <PostPreview
              key={id}
              id={id}
              posts={posts}
              allPosts={allPosts}
              author={author}
              updateVotes={updateVotes}
              category={category}
              submission={submission}
              title={title}
              status={status}
              icon={icon}
              changeVoteStatus={changeVoteStatus}
            />
          );
        }
      )}
    </div>
  );
};

export default Preview;
