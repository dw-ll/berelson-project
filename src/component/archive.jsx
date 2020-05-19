import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import "react-vertical-timeline-component/style.min.css";
import images from "../json/archiveData.js";
import MusicDock from "./MusicDock.js";
const archiveData = images;
class Archive extends Component {
  render() {
    return (
      <div className="mx-auto">
        <div>
          <div class="jumbotron jumbotron-fluid archive-jumbo">
            <div class="container">
              <h1 class="display-4">The Archives</h1>
              <p class="lead">
                Here you'll find Baigelman family photos and more, ranging from before the second world war up to today.
              </p>
            </div>
          </div>
          <MusicDock />
          <Gallery class='archive-gallery' images={archiveData} enableImageSelection={false} />
        </div>
      </div>
    );
  }
}
export default Archive;
