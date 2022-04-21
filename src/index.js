import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header, Footer } from "./components";
import Home from "./Home";
import Discussion from "./Discussion";
import DiscussionPost from "./DiscussionPost";
import AddPost from "./AddPost";
import Exchange from "./Exchange";
import Profile from "./Profile";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => (
  <div className="main">
    <BrowserRouter>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/discussions">
            <Discussion />
          </Route>
          <Route path="/post/:id">
            <DiscussionPost />
          </Route>
          <Route path="/add-post">
            <AddPost />
          </Route>
          <Route path="/exchange">
            <Exchange />
          </Route>
          <Route path="/profile-page">
            <Profile />
          </Route>
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));
