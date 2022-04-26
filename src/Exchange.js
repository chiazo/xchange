import React from "react";
import { items1, items2 } from "./data/items.js";
import { sellers } from "./data/sellers.js";
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
                  <div className="dropdown">
                    <button className="dropbtn">Filter</button>
                    <div className="dropdown-content">
                      <a href="#void">Clothing</a>
                      <a href="#void">School</a>
                      <a href="#void">Home</a>
                      <a href="#void">Service</a>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="dropdown">
                    <button className="dropbtn">Sort</button>
                    <div className="dropdown-content">
                      <a href="#void">Lowest Price</a>
                      <a href="#void">Highest Price</a>
                      <a href="#void">Most Recent</a>
                      <a href="#void">Most Popular</a>
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
            {items1.map(({ title, price, picture }, idx) => (
              <div className="col-sm" key={idx}>
                <div className="item">
                  <a href="default.asp">
                    <img alt="item-pic" src={picture} />
                    <p id="price">${price}</p>
                  </a>
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
                    <a href="default.asp">
                      <img alt="item-pic" src={picture} />
                      <p id="price">${price}</p>
                    </a>
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
              {sellers.map(({ username, profile_pic }, idx) => (
                <div className="col-sm" key={idx + 3}>
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
          <div className="bottom-space"></div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
