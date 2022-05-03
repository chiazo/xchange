import React, { useState } from "react";
import { user } from "./data/user.js";
import { Modal } from "react-bootstrap";

const Profile = () => {
  const [d_interests, setd_interests] = useState(user.d_interests);
  const [m_interests, setm_interests] = useState(user.m_interests);
  const [warning, setWarning] = useState("");
  const [show, setShow] = useState(false);

  var will = true;
  var anon = false;

  const handleClose = () => setShow(false);

  const toggle_edit_disc = (e) => {
    document.getElementById("add-dtag-hidden").id = "add-dtag";
    document.getElementsByClassName("edit-box-disc")[0].className =
      "edit-box-disc-hidden";
  };
  const handleShow = (warning) => {
    setShow(true);
    if (typeof warning === "string") {
      setWarning(warning);
    } else {
      setWarning("This feature hasn't been implemented!");
    }
  };

  const toggle_edit_mark = () => {
    document.getElementById("add-mtag-hidden").id = "add-mtag";
    document.getElementsByClassName("edit-box-mark")[0].className =
      "edit-box-mark-hidden";
  };

  const remove_dtag = (e) => {
    e.preventDefault();
    let name = e.target.innerText.substring(2);
    setd_interests(d_interests.filter((item) => item !== name));
  };

  const remove_mtag = (e) => {
    e.preventDefault();
    let name = e.target.innerText.substring(2);
    setm_interests(m_interests.filter((item) => item !== name));
  };

  const add_dtag = (e) => {
    e.preventDefault();
    if (d_interests.length < 3) {
      let new_tag = document.getElementById("add-dtag").value;
      setd_interests([...d_interests, new_tag]);
    } else {
      handleShow("More than 3 tags is not allowed");
    }
    document.getElementById("add-dtag").id = "add-dtag-hidden";
    document.getElementsByClassName("edit-box-disc-hidden")[0].className =
      "edit-box-disc";
  };

  const add_mtag = (e) => {
    e.preventDefault();
    if (m_interests.length < 3) {
      let new_tag = document.getElementById("add-mtag").value;
      setm_interests([...m_interests, new_tag]);
    } else {
      handleShow("More than 3 tags is not allowed");
    }
    document.getElementById("add-mtag").id = "add-mtag-hidden";
    document.getElementsByClassName("edit-box-mark-hidden")[0].className =
      "edit-box-mark";
  };

  const toggle_status_will = () => {
    if (will !== true) {
      document.getElementById("status-will").id = "status-will-a";
      document.getElementById("status-anon-a").id = "status-anon";
      will = true;
      anon = false;
    }
  };

  const toggle_status_anon = () => {
    if (anon !== true) {
      document.getElementById("status-anon").id = "status-anon-a";
      document.getElementById("status-will-a").id = "status-will";
      anon = true;
      will = false;
    }
  };

  return (
    <div className="home">
      <div id="content">
        <Modal show={show} onHide={handleClose} className="coming-soon">
          <Modal.Header closeButton>
            <Modal.Title>Coming Soon:</Modal.Title>
          </Modal.Header>

          <Modal.Body>{warning}</Modal.Body>
        </Modal>
        <div className="profile-edit">
          <img id="profile-pic" alt="profile" src={user.icon} />
          <div id="profile-edit" className="edit-box">
            <img
              onClick={handleShow}
              alt="edit"
              id="edit-icon"
              src="https://img.icons8.com/ios/50/000000/edit--v1.png"
            />
          </div>
        </div>
        <h1 id="profile-name">William Dunn</h1>
        <h5 id="profile-username">@willyd23</h5>
        <div className="profile">
          <h1>About Me</h1>
          <div id="about-me" className="interest">
            <p>Major: Computer Science</p>
            <p>Graduation Term: Spring 2022</p>
          </div>
          <div className="edit-box">
            <img
              onClick={handleShow}
              alt="edit"
              id="edit-icon"
              src="https://img.icons8.com/ios/50/000000/edit--v1.png"
            />
          </div>
        </div>
        <div className="profile">
          <h1>Discussion Interests</h1>
          <div className="interest">
            {d_interests.map((value, idx) => {
              return (
                <a onClick={remove_dtag} key={idx} href="#void">
                  <p>x {value}</p>
                </a>
              );
            })}

            <div className="edit-box-disc">
              <a
                className="description"
                onClick={toggle_edit_disc}
                href="#void"
              >
                <img
                  alt="edit"
                  id="edit-icon"
                  src="https://img.icons8.com/ios/50/000000/edit--v1.png"
                />
              </a>
            </div>
            <form onSubmit={add_dtag}>
              <input
                type="text"
                id="add-dtag-hidden"
                className="add-interest"
                placeholder="seniors"
              ></input>
            </form>
          </div>
        </div>

        <div className="profile">
          <h1>Market Interests</h1>
          <div className="interest">
            {m_interests.map((value, idx) => {
              return (
                <a key={idx} onClick={remove_mtag} href="#void">
                  <p>x {value}</p>
                </a>
              );
            })}
            <a onClick={toggle_edit_mark} href="#void">
              <div className="edit-box-mark">
                <img
                  alt="edit"
                  id="edit-icon"
                  src="https://img.icons8.com/ios/50/000000/edit--v1.png"
                />
              </div>
            </a>
            <form onSubmit={add_mtag}>
              <input
                type="text"
                id="add-mtag-hidden"
                className="add-interest"
                placeholder="shoes"
              ></input>
            </form>
          </div>
        </div>
        <div className="profile">
          <h1>Privacy Settings</h1>
          <div className="interest">
            <p id="field">Status</p>
            <a href="#void" onClick={toggle_status_will}>
              <p id="status-will-a">By William</p>
            </a>
            <a href="#void" onClick={toggle_status_anon}>
              <p id="status-anon">By Anon</p>
            </a>
          </div>
          <div className="interest">
            <p id="field">Password</p>
            <p id="password">******</p>
          </div>
          <div className="edit-box">
            <img
              onClick={handleShow}
              alt="edit"
              id="edit-icon"
              src="https://img.icons8.com/ios/50/000000/edit--v1.png"
            />
          </div>
        </div>
      </div>
      <div id="profile-space" className="bottom-space"></div>
    </div>
  );
};

export default Profile;
