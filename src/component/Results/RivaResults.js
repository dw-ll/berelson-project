import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { Switch } from "react-router";
import Gallery from "react-grid-gallery";
import images from "../../json/resultData.js";
import rivaPhotos from '../../json/rivaJson.js';


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

class HenryResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: rivaPhotos,
            query: 'Henry'
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

            <ScrollToTop>
                <Switch>
                    <div className="App">
                        <link rel="stylesheet" href="css/blueimp-gallery.min.css" />
                        <div className="search-results">
                            <div>
                                <h5 style={{ textAlign: "center" }}>
                                    Search Results for Riva Berelson
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

        );
    }
}
export default HenryResults;
