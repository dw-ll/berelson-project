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
import SearchBar from "./SearchBar.jsx";

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

function printTags(props) {
  const listTags = props.tags.map(tag => <h4>{tag},</h4>);
  return listTags;
}

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.location.state.results[0],
      query: this.props.location.state.results[1]
    };
  }
  render() {
    console.log("Results:" + this.state.results);

    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <div className="App">
              <link rel="stylesheet" href="css/blueimp-gallery.min.css" />
              <div className="search-results">
                <div>
                  <h5 style={{ textAlign: "center" }}>
                    Search Results for {this.state.query}
                  </h5>
                </div>

                <Gallery
                  className="results-gallery"
                  images={this.state.results}
                  enableImageSelection={false}
                  height="300"
                  thumbnailWidth={500}
                  thumbnailHeight={500}
                  tagStyle={{
                    color: "white",
                    backgroundColor: "#2e2e2e",
                    marginBottom: "10px",
                    opacity: "0.8"
                  }}
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
