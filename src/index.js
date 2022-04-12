import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header, Footer } from "./components";
import Home from "./Home";
import Discussion from "./Discussion";
import Exchange from "./Exchange";

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
          <Route path="/discuss">
            <Discussion />
          </Route>
          <Route path="/exchange">
            <Exchange />
          </Route>
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));
