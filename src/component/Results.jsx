import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { Switch } from "react-router";
import Gallery from "react-grid-gallery";
import "react-vertical-timeline-component/style.min.css";
import Present from "./present";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";
import images from "../json/resultData.js";

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
      results: this.props.location.state.results
    };
  }
  render() {
    console.log(this.state.results);
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <div className="App">
              <link rel="stylesheet" href="css/blueimp-gallery.min.css" />
              <div>
                <div>
                  <h6 style={{ textAlign: "center" }}>
                    An archive of the Berelson Lineage.
                  </h6>
                </div>
                <Gallery
                  className="results-gallery"
                  images={this.state.results}
                  enableImageSelection={false}
                />
              </div>
            </div>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
export default withRouter(Results);
