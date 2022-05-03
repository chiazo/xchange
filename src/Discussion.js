import React, { useState } from "react";
import { homePosts } from "./data/homePosts";
import { Link } from "react-router-dom";
import Preview from "./Preview";
import { Modal } from "react-bootstrap";

const Discussion = ({ posts }) => {
  const discussionPosts = [...posts.slice(2)];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="discussion">
      <div id="content">
        <Modal show={show} onHide={handleClose} className="coming-soon">
          <Modal.Header closeButton>
            <Modal.Title>Coming Soon:</Modal.Title>
          </Modal.Header>

          <Modal.Body>This feature hasn't been implemented!</Modal.Body>
        </Modal>
        <Link to="/xchange/add-post">
          <button className="add-post-button">+</button>
        </Link>
        <div className="row">
          <div className="col-7" style={{ textAlign: "left" }}></div>
          <div className="col-5">
            <div className="row">
              <div className="col-5">
                <button className="discussion-button" onClick={handleShow}>
                  Filter
                </button>
              </div>
              <div className="col-5">
                <button className="discussion-button" onClick={handleShow}>
                  Sort
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Preview posts={homePosts} allPosts={posts} />
          <Preview posts={discussionPosts} allPosts={posts} />
          <div className="discussion-end-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
