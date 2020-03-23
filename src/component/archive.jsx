import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Gallery from "react-grid-gallery";
import "react-vertical-timeline-component/style.min.css";
import Present from "./present";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";
import images from "../json/archiveData.js";
import MusicDock from "./MusicDock.js";
const routes = [
  {
    component: Pre,
    path: "/pre"
  },
  {
    component: WWII,
    path: "/ww2"
  },
  {
    component: Post,
    path: "/post"
  },
  {
    component: Present,
    path: "/present"
  }
];
const archiveData = images;

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

class Archive extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            {routes.map((route, i) => (
              <Route
                path={route.path}
                exact
                render={() => {
                  return <route.component />;
                }}
              />
            ))}

            <div className="App">
              <link rel="stylesheet" href="css/blueimp-gallery.min.css" />
              <div>
                <div>
                  <h6 style={{ textAlign: "center" }}>
                    An archive of the Berelson Lineage.
                  </h6>
                </div>
                <MusicDock />
                <Gallery images={archiveData} enableImageSelection={false} />
              </div>
            </div>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
export default Archive;
