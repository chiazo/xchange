import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="masthead">
    <div>
      <div className="row">
        <div className="col-9">
          <Link to="/  " style={{ textDecoration: "none" }}>
            <h1 className="site-title">XChange</h1>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/  profile-page" style={{ textDecoration: "none" }}>
            <button></button>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
