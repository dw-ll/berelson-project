import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import "@lottiefiles/lottie-player";
import tree from "../../tree.png";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";

class Line extends Component {
  render() {
    return (
      <Router>
        <Route
          path="/pre"
          exact
          render={() => {
            return <Pre />;
          }}
        />
        <Route
          path="/ww2"
          exact
          render={() => {
            return <WWII />;
          }}
        />

        <Route
          path="/post"
          exact
          render={() => {
            return <Post />;
          }}
        />
        <div className="tree-dev">
          <div className="tree-dev-text">
            <lottie-player
              src="https://assets1.lottiefiles.com/temp/lf20_mnFnm0.json"
              background="transparent"
              speed="1"
              style={{width: "300px", height: "300px"}}
              loop
            
              autoplay
            ></lottie-player>
            <h4>FAMILY TREE COMING SOON</h4>
           
          </div>
        </div>
      </Router>
    );
  }
}
export default Line;
