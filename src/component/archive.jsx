import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import "react-vertical-timeline-component/style.min.css";
import images from "../json/archiveData.js";
import MusicDock from "./MusicDock.js";
const archiveData = images;
class Archive extends Component {
  render() {
    return (
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
    );
  }
}
export default Archive;
