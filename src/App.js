import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import { app_background } from "./data/markdown";

import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown className="background" source={app_background} />
        <div className="container">
          <div className="row justify-content-md-center">
            <h3>Insert Code Here</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
