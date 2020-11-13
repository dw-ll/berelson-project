import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Gallery from "react-grid-gallery";

import './index.css';

import MusicDock from "../MusicDock";
import { archiveRef } from "../../libs/archiveLib";
import GalleryLib from '../../libs/galleryLib';




const Archive = (props) => {

  const [archiveData, setArchiveData] = useState(props.photos);

  useEffect(() => {
    onLoad();
  }, [props.match.params.id]);

  const onLoad = async () => {
    setArchiveData(GalleryLib.renderResults(archiveData));
  }

  return (
    <div className="mx-auto">
      <div>
        <div class="jumbotron jumbotron-fluid archive-jumbo">
          <div class="container">
            <h1 class="display-4">The Archives</h1>
            <p class="lead">
              Here you'll find Baigelman family photos and more, ranging from
              before the second world war up to today.
            </p>
          </div>
        </div>
        <MusicDock />
        <Gallery
          class="archive-gallery"
          images={archiveData ? archiveData : archiveRef}
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
  );
};

const mapStateToProps = (state) => {
  return state.archivePhotos;
};
export default connect(mapStateToProps)(Archive);
