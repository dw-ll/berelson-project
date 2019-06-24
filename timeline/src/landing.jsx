import React, { Component } from "react";
import LazyHero from "react-lazy-hero";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Pre from "./Line/component/pre.jsx";
import WW2 from "./Line/component/ww2.jsx";
import Post from "./Line/component/post.jsx";
import Present from "./Line/component/present.jsx";
import "firebase/database";
import "./App.css";
import Line from "./Line/component/Line.jsx";
import "bootstrap/dist/css/bootstrap.css";
global.jQuery = require("jquery");
require("bootstrap");

class Landing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Line />;
            }}
          />
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
              return <WW2 />;
            }}
          />
          <Route
            path="/post"
            exact
            render={() => {
              return <Post />;
            }}
          />
          <Route
            path="/present"
            exact
            render={() => {
              return <Present />;
            }}
          />

          <div className="App">
            <div>
              <LazyHero
                className="landing"
                imageSrc="https://unsplash.it/2000/1000"
              >
                <h1>The Berelson Project</h1>
              </LazyHero>

              {/* ... */}
            </div>
            
          </div>
        </Switch>
      </Router>
    );
  }
}
export default Landing;
