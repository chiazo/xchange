import React from "react";
import { Link } from "react-router-dom";
import { user } from "../data/user";

const Header = () => (
  <header className="masthead">
    <div>
      <div className="row">
        <div className="col-9">
          <Link to="/xchange/" style={{ textDecoration: "none" }}>
            <h1 className="site-title">XChange</h1>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/xchange/profile-page" style={{ textDecoration: "none" }}>
            <img className="profile-pic" alt="profile pic" src={user.icon} />
          </Link>

        </div>
        
      </div>
      <div className="row">
        
       
      </div>
    </div>
  </header>
);

export default Header;
