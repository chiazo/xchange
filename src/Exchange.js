import React from "react";
import { items1, items2 } from "./data/items.js";
import { users } from "./data/users.js";
const Exchange = () => {
  return (
    <div className="exchange">
      <div id="content">
        <form>
          <input
            type="text"
            className="form-control"
            id="examplesearch"
            placeholder="Search"
          ></input>
        </form>
        <div className="market-xpoints-filter-sort">
          <div className="row">
            <div className="col-7" style={{ textAlign: "left" }}></div>
            <div className="col-5">
              <div className="row">
                <div className="col-5">
                  <div class="dropdown">
                    <button className="dropbtn">Filter</button>
                    <div class="dropdown-content">
                      <a href="#">Clothing</a>
                      <a href="#">School</a>
                      <a href="#">Home</a>
                      <a href="#">Service</a>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div class="dropdown">
                    <button className="dropbtn">Sort</button>
                    <div class="dropdown-content">
                      <a href="#">Most Affordable</a>
                      <a href="#">Most Recent</a>
                      <a href="#">Most Popular</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h5 id="header2">Top Picks for William</h5>
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
          <h5> Your Favorite Sellers</h5>
          <div className="grid">
            <div className="d-flex justify-content-around">
              {users.map(({ username, profile_pic }) => (
                <div className="col-sm">
                  <div className="item">
                    <div className="item">
                      <img alt="item-pic" src={profile_pic} />
                    </div>
                  </div>
                  <div className="d-flex justify-content-around">
                    <p>{username}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="bottom-space"></div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
