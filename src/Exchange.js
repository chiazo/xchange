import React from "react";
import items from "../src/data/items.js"

const Exchange = () => {
  return (
    <div className="home">
      <div id="content">
        <form>
            <input type="text" class="form-control" id="examplesearch" placeholder="Search"></input>
        </form>
        <div class= "xpoints-filter-sort">
          <div class='row'>
            <button type='button' class="btn btn-xpoints">XPoints - 100</button>
            <button type='button' class="btn btn-filter">Filter</button>
            <button type='button' class="btn btn-sort">Sort</button>
          </div>
        </div>
        <h5>Top Picks for William</h5>
        <div class ="grid">
          <div class = 'd-flex justify-content-around'>
            <script>
              {items.map((i, indx) => {
              <button class='btn-item' id='item'>{i.name}</button>
              })}
            </script>
            <button class='btn-item' id='item'>Item1</button>
            <button class='btn-item' id='item'>Item2</button>
            <button class='btn-item' id='item'>Item3</button>
          </div>
          <div class='space'></div>
          <div class = 'd-flex justify-content-around'>
            <button class='btn-item'>Item4</button>
            <button class='btn-item'>Item5</button>
            <button class='btn-item'>Item6</button>
          </div>
        </div>
        <h5> Your Favorite Sellers</h5>
        <div class = "grid">
          <div class = 'd-flex justify-content-around'>
              <button type='button' class='btn-seller'>Seller1</button>
              <button type='button' class='btn-seller'>Seller2</button>
              <button type='button' class='btn-seller'>Seller3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
