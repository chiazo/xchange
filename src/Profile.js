import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { user } from "./data/user.js";

const Profile = () => {
  var edit_mode = false;
  const [d_interests, setd_interests] = useState(user.d_interests);
  const [m_interests, setm_interests] = useState(user.m_interests);
  var will = true;
  var anon = false;

  const remove_dtag = (e) => {
    e.preventDefault();
    var name = e.target.innerText.substring(2);
    setd_interests(d_interests.filter((item) => item != name));
  };

  const remove_mtag = (e) => {
    e.preventDefault();
    var name = e.target.innerText.substring(2);
    setm_interests(m_interests.filter((item) => item != name));
  };

  const add_dtag = (e) => {
    //e.preventDefault();
    var new_tag = document.getElementById("add-dtag").value;
    setd_interests([...d_interests, new_tag]);
  };

  const add_mtag = (e) => {
    //e.preventDefault();
    var new_tag = document.getElementById("add-mtag").value;
    setm_interests([...m_interests, new_tag]);
  };

  const toggle_status_will = () => {
    if (will != true) {
      document.getElementById("status-will").id = "status-will-a";
      document.getElementById("status-anon-a").id = "status-anon";
      will = true;
      anon = false;
    }
  };

  const toggle_status_anon = () => {
    if (anon != true) {
      document.getElementById("status-anon").id = "status-anon-a";
      document.getElementById("status-will-a").id = "status-will";
      anon = true;
      will = false;
    }
  };

  return (
    <div className="home">
      <div id="content">
        <div className="profile-edit">
          <img
            id="profile-pic"
            alt="profile"
            src={
              "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            }
          />
          <div id="profile-edit" className="edit-box">
            <img
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
                <a onClick={remove_dtag} key={idx} href="#">
                  <p>x {value}</p>
                </a>
              );
            })}

            <div className="edit-box">
              <a className="description" onClick={add_dtag} href="#">
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
                id="add-dtag"
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
                <a key={idx} onClick={remove_mtag} href="#">
                  <p>x {value}</p>
                </a>
              );
            })}

            <div className="edit-box">
              <img
                alt="edit"
                id="edit-icon"
                src="https://img.icons8.com/ios/50/000000/edit--v1.png"
              />
            </div>
            <form onSubmit={add_mtag}>
              <input
                type="text"
                id="add-mtag"
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
            <a href="#" onClick={toggle_status_will}>
              <p id="status-will-a">By William</p>
            </a>
            <a href="#" onClick={toggle_status_anon}>
              <p id="status-anon">By Anon</p>
            </a>
          </div>
          <div className="interest">
            <p id="field">Password</p>
            <p id="password">******</p>
          </div>
          <div className="edit-box">
            <img
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
