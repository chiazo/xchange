import React from "react";
import { user } from "./data/user";

const Profile = () => {
  return (
    <div className="home">
      <div id="content">
        <div className="profile-edit">
          <img id="profile-pic" alt="profile" src={user.icon} />
          <div className="edit-box">
            <img
              alt="edit"
              id="edit-icon"
              src="https://img.icons8.com/ios/50/000000/edit--v1.png"
            />
          </div>
        </div>
        <h1 id="profile-name">William Dunn</h1>
        <div id="profile-username">@willyd23</div>
        <div id="profile" className="about-me">
          <h1>About Me</h1>
          <div className="row">
            <div className="col">
              <p>Major: Computer Science</p>
              <p>Graduation Term: Spring 2022</p>
            </div>
          </div>
        </div>
        <div id="profile">
          <h1>Discussion Interests</h1>
          <div className="interest">
            <p>x Athletics</p>
            <p>x Fashion</p>
            <p>x CS Dept</p>
            <div className="edit-box3">
              <img
                alt="edit"
                id="edit-icon"
                src="https://img.icons8.com/ios/50/000000/edit--v1.png"
              />
            </div>
          </div>
        </div>
        <div id="profile" className="market-interests">
          <h1>Market Interests</h1>
          <div className="interest">
            <p>x Sweaters</p>
            <p>x Jewelry</p>
            <p>x Textbooks</p>
            <div className="edit-box3">
              <img
                alt="edit"
                id="edit-icon"
                src="https://img.icons8.com/ios/50/000000/edit--v1.png"
              />
            </div>
          </div>
        </div>
        <div id="profile" className="privacy-settings">
          <h1>Privacy Settings</h1>
          <div className="interest">
            <p id="field">Status</p>
            <p id="status">By William</p>
            <p id="status">By Anon</p>
          </div>
          <div className="interest">
            <p id="field">Password</p>
            <p id="password">******</p>
          </div>
          <div id="privacy-edit" className="edit-box3">
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
