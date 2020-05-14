import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { useSelector, connect } from "react-redux";
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
  fontSize: "90%",
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
  margin: "2px",
};

function printTags(props) {
  const listTags = props.tags.map((tag) => <h4>{tag},</h4>);
  return listTags;
}

const Results = () => {
  const results =
    useSelector((state) => state.searchResults) ||
    localStorage.getItem("searchResult");
  const [images, setImages] = useState([]);

  const setCustomTags = (i) => {
    return i.tags.map((t) => {
      return (
        <div key={t.value} style={customTagStyle}>
          {t.title}
        </div>
      );
    });
  };
  const renderResults = () => {
    console.log("Results:" + results);
    setImages(
      results.map((i) => {
        i.customOverlay = (
          <div style={captionStyle}>
            <div>{i.caption}</div>
            {i.hasOwnProperty("tags") && this.setCustomTags(i)}
          </div>
        );
        return i;
      })
    );
  };

  return (
    <Router>
      <Switch>
        <div className="App">
          <link rel="stylesheet" href="css/blueimp-gallery.min.css" />
          <div className="search-results">
            <div></div>

            <Gallery
              className="results-gallery"
              images={images}
              enableImageSelection={false}
              thumbnailWidth={500}
              thumbnailHeight={500}
              tagStyle={{
                display: "none",
              }}
              showLightboxThumbnails={true}
              backdropClosesModal={true}
            />
          </div>
        </div>
      </Switch>
    </Router>
  );
};
export default withRouter(Results);
