import React, { useState } from "react";
import { homePosts } from "./data/homePosts";
import { PostPreview } from "./components/";
import { items1, items2 } from "./data/homeItems.js";

const Home = () => {
  const [currPostId, setCurrPostId] = useState("");

  const updateCurrPost = (id) => {
    setCurrPostId(id);
  };

  const updateVotes = (id, type, val) => {
    const filteredPost = homePosts[id];
    filteredPost[type] = val;
  };

  const changeVoteStatus = (id, type) => {
    let filteredPost = homePosts[id];
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

    homePosts[id] = filteredPost;
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
        <div className="row">
          .
          <div className="col">
            <div className="preview-title hello" id="welcome-msg">
              Welcome back, Chiazo!
            </div>
            <div className="preview-title trending" id="welcome-msg">
              Trending Discussion
            </div>
          </div>
          <button className="home-button xpoints">XPoints - 100</button>
        </div>
        {homePosts.map(
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

        <div className="row">
          .
          <div className="col">
            <div className="preview-title trending" id="welcome-msg">
              Trending Marketplace
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="d-flex justify-content-around">
            {items1.map(({ title, price, picture }) => (
              <div className="col-sm">
                <div className="item">
                  <img alt="item-pic" src={picture} />
                  <p id="price">${price}</p>
                </div>
                <div className="d-flex justify-content-around">
                  <p>{title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-around">
            {items2.map(({ title, price, picture }) => (
              <div className="col-sm">
                <div className="item">
                  <div className="item">
                    <img alt="item-pic" src={picture} />
                    <p id="price">${price}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <p>{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
