import React, { useState } from "react";
import { items1, items2 } from "./data/items.js";
import { sellers } from "./data/sellers.js";
import { Modal } from "react-bootstrap";

const Exchange = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="exchange">
      <div id="content">
        <Modal show={show} onHide={handleClose} className="coming-soon">
          <Modal.Header closeButton>
            <Modal.Title>Coming Soon:</Modal.Title>
          </Modal.Header>

          <Modal.Body>This feature hasn't been implemented!</Modal.Body>
        </Modal>
        <form>
          <input
            onClick={handleShow}
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
                      <a href="#void" onClick={handleShow}>
                        Clothing
                      </a>
                      <a href="#void" onClick={handleShow}>
                        School
                      </a>
                      <a href="#void" onClick={handleShow}>
                        Home
                      </a>
                      <a href="#void" onClick={handleShow}>
                        Service
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="dropdown">
                    <button className="dropbtn">Sort</button>
                    <div className="dropdown-content">
                      <a href="#void" onClick={handleShow}>
                        Lowest Price
                      </a>
                      <a href="#void" onClick={handleShow}>
                        Highest Price
                      </a>
                      <a href="#void" onClick={handleShow}>
                        Most Recent
                      </a>
                      <a href="#void" onClick={handleShow}>
                        Most Popular
                      </a>
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
                  <a href="#void" onClick={handleShow}>
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
                    <a href="#void" onClick={handleShow}>
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
                    <a href="#void" className="item" onClick={handleShow}>
                      <img alt="item-pic" src={profile_pic} />
                    </a>
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
