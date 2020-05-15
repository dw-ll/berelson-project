import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { Switch } from "react-router";
import Gallery from "react-grid-gallery";
import "react-vertical-timeline-component/style.min.css";
import searchData from "../json/searchData";

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

const Results = (props) => {
  const [galleryImages, setImages] = useState([]);
  const [renderedImages, setRenderedImages] = useState([]);

  useEffect(() => {
    const getQuery = () => {
      console.log(props.match.params.search);
      let query = props.match.params.search;
      return query;
    };

    const getResults = (input) => {
      if (input.length > 0) {
        const query = input.toLowerCase();
        var searchResult = [];
        for (let i = 0; i < searchData.length; i++) {
          for (let j = 0; j < searchData[i].tags.length; j++) {
            if (searchData[i].tags[j].includes(query)) {
              searchResult.push(searchData[i]);
            }
          }
        }
        return searchResult;
      }
    };

    const renderResults = (results) => {
      setRenderedImages(
        results.map((i) => {
          i.customOverlay = (
            <div style={captionStyle}>
              <div>{i.caption}</div>
              {i.hasOwnProperty("tags") && setCustomTags(i)}
            </div>
          );
          return i;
        })
      );
    };

    const setCustomTags = (i) => {
      return i.tags.map((t) => {
        return (
          <div key={t.value} style={customTagStyle}>
            {t.title}
          </div>
        );
      });
    };
    function onLoad() {
      var input = getQuery();
      var results = getResults(input);
      setImages(
        results.map((i) => {
          i.customOverlay = (
            <div style={captionStyle}>
              <div>{i.caption}</div>
              {i.hasOwnProperty("tags") && setCustomTags(i)}
            </div>
          );
          return i;
        })
      );
    }
    onLoad();
    console.log("New Render");
  }, []);

  useEffect(() => {
    console.log(galleryImages);
  }, [galleryImages]);
  return (
    <Router>
      <Switch>
        <div className="App">
          <link rel="stylesheet" href="css/blueimp-gallery.min.css" />
          <div className="search-results">
            <Gallery
              images={galleryImages}
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
