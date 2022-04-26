import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header, Footer } from "./components";
import { posts } from "./data/posts";

import Home from "./Home";
import Discussion from "./Discussion";
import DiscussionPost from "./DiscussionPost";
import AddPost from "./AddPost";
import Exchange from "./Exchange";
import Profile from "./Profile";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => {
  const contract = [
    {
      page: "Home Page",
      requirements: ["Hardcode home page design"],
    },
    {
      page: "Profile Page",
      requirements: ["Add or remove interests", "Ability to edit status"],
    },
    {
      page: "Discussions Page",
      requirements: [
        "Hardcode discussions page design",
        "Allow parent comments only",
        "Allow upvoting and downvoting",
        "Connect voting across pages",
      ],
    },
    {
      page: "Market Page",
      requirements: ["Hardcode market page design", "Add coming soon popup"],
    },
  ];
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route exact path="/xchange/">
              <Home posts={posts} />
            </Route>
            <Route path="/xchange/discussions">
              <Discussion posts={posts} />
            </Route>
            <Route path="/xchange/post/:id">
              <DiscussionPost posts={posts} />
            </Route>
            <Route path="/xchange/add-post">
              <AddPost posts={posts}/>
            </Route>
            <Route path="/xchange/exchange">
              <Exchange />
            </Route>
            <Route path="/xchange/profile-page">
              <Profile />
            </Route>
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
      <div className="contract">
        <h3>Contract Requirements</h3>
        {contract.map(({ page, requirements }, idx) => (
          <div key={idx}>
            <p>{page}:</p>
            <ul>
              {requirements.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
