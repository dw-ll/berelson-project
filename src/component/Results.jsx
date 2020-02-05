import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { Switch } from "react-router";
import Gallery from "react-grid-gallery";
import "react-vertical-timeline-component/style.min.css";
import Present from "./present";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";
import images from "../json/archiveData.js";
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
//const archiveData = images;

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

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.location.state
    };
  }
  render() {
    console.log("Inside results");
    console.log(this.state.results);
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

            <div>
              jdjdjdjdjd
              <Gallery
                images={this.state.results}
                enableImageSelection={false}
              />
            </div>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
export default withRouter(Results);