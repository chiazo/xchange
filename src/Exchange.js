import React from "react";
import { items1, items2 } from "./data/items.js";
const Exchange = () => {
  //console.log(items);
  return (
    <div className="home">
      <div id="content">
        <form>
          <input
            type="text"
            className="form-control"
            id="examplesearch"
            placeholder="Search"
          ></input>
        </form>
        <div className="xpoints-filter-sort">
          <div className="row">
            <div className="item">
              <button type="button" className="btn btn-xpoints">
                XPoints - 100
              </button>
              <button type="button" className="btn btn-filter">
                Filter
              </button>
              <button type="button" className="btn btn-sort">
                Sort
              </button>
            </div>
          </div>
          <h5>Top Picks for William</h5>
          <div className="grid">
            <div className="d-flex justify-content-around">
              {items1.map(({ title, price, picture }) => (
                <div className="col-sm">
                  <div className="item">
                    <input type="image" src={picture} />
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
                      <input type="image" src={picture} />
                      <p id="price">${price}</p>
                    </div>
                    <p id="price">${price}</p>
                  </div>
                  <div className="d-flex justify-content-around">
                    <p>{title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h5> Your Favorite Sellers</h5>
          <div className="grid">
            <div className="d-flex justify-content-around">
              <button type="btn" className="btn-seller">
                Seller1
              </button>
              <button type="btn" className="btn-seller">
                Seller2
              </button>
              <button type="btn" className="btn-seller">
                Seller3
              </button>
            </div>
            <div className="d-flex justify-content-around">
              <p>Seller name</p>
              <p>Seller name</p>
              <p>Seller name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
