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

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%"
};

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "lightgrey",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px"
};
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
  setCustomTags(i) {
    return i.tags.map(t => {
      return (
        <div key={t.value} style={customTagStyle}>
          {t.title}
        </div>
      );
    });
  }
  render() {
    console.log("Results:" + this.state.results);
    var images = this.state.results.map(i => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
          {i.hasOwnProperty("tags") && this.setCustomTags(i)}
        </div>
      );
      return i;
    });

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
                  images={images}
                  enableImageSelection={false}
                  thumbnailWidth={500}
                  thumbnailHeight={500}
                  tagStyle={{
                    display: "none"
                  }}
                  showLightboxThumbnails={true}
                  backdropClosesModal={true}
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
