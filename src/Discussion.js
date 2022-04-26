import React from "react";
import { homePosts } from "./data/homePosts";
import { Link } from "react-router-dom";
import Preview from "./Preview";

const Discussion = ({ posts }) => {
  const discussionPosts = [...posts.slice(2)];

  return (
    <div className="discussion">
      <div id="content">
        <Link to="/xchange/add-post">
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
          <Preview posts={homePosts} allPosts={posts} />
          <Preview posts={discussionPosts} allPosts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Discussion;
