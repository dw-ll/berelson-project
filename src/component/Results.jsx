import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import "react-vertical-timeline-component/style.min.css";
import search from "../libs/searchLib";

const Results = (props) => {
  const [galleryImages, setImages] = useState([]);

  useEffect(() => {
    onLoad();
    console.log("New Render");
  }, [props.match.params.id]);

  function onLoad() {
    var input = search.getQuery(props);
    var results = search.getResults(input);
    setImages(search.renderResults(results));
  }
  return (
    <Router>
      <Switch>
        <div class="container-fluid d-flex justify-content-center">
          <link rel="stylesheet" href="css/blueimp-gallery.min.css" />
          <div className="search-results">{galleryImages && search.showResults(galleryImages)}</div>
        </div>
      </Switch>
    </Router>
  );
};
export default Results;
