import React from "react";
import { homePosts } from "./data/homePosts";
import Preview from "./Preview";
import { items1, items2 } from "./data/homeItems.js";

const Home = ({ posts }) => {
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
        </div>
        <Preview posts={homePosts} allPosts={posts} />

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
            {items1.map(({ title, price, picture }, idx) => (
              <div className="col-sm" key={idx}>
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
            {items2.map(({ title, price, picture }, idx) => (
              <div className="col-sm" key={idx + 10}>
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
