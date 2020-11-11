import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";

import "react-vertical-timeline-component/style.min.css";
import search from "../libs/searchLib";

const Results = (props) => {
  const [galleryImages, setImages] = useState([]);
 
  useEffect(() => {
    onLoad();
  }, [props.match.params.id]);

  async function onLoad() {
    var input = search.getQuery(props);
    var cloudinaryResults = await search.getCloudinaryResults(input)
    setImages(search.renderCloudinaryResults(cloudinaryResults));
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
