import React from "react";
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import Pre from "../../../component/pre";

const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/src/Media/Pre-WWII/";
const slideImages = [
  `${IMGURL}Henry.Baigelman002.jpeg`,
  `${IMGURL}Henry.Baigelman003.jpeg`,
  `${IMGURL}Henry.Baigelman004.jpeg`,
  `${IMGURL}Henry.Baigelman009.jpeg`,
  `${IMGURL}Henry.Baigelman001.jpeg`
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};
const Slideshow = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/pre"
          exact
          render={() => {
            return <Pre />;
          }}
        />
        <div>
          <div className="player-wrapper"></div>
          <div class="container">
            <div class="row">
              <div class="col-6">
                <h3 className="profile_title">Henry Baigelman</h3>
                <h6>B. 1900 D. 1950</h6>
                <h6 className="profile_bio">
                  Chaim (later: Henry) Bajgelman was a violinist, saxophonist
                  and composer and the only one out of nine musical siblings to
                  survive the war. He played professionally since the age of
                  fifteen. He was a member of a family band, The Jolly Boys,
                  which he revived in post-war Germany under the name The Happy
                  Boys, playing jazz concerts for American soldiers and Jewish
                  survivors. After the war, he emigrated to New York, where he
                  continued his musical activities with The Happy Boys.
                </h6>
              </div>
              <div class="col-6">
                <Slide {...properties}>
                  <div className="each-slide" display="flex-container">
                    <div
                      style={{ backgroundImage: `url(${slideImages[0]})` }}
                    />
                  </div>
                  <div className="each-slide">
                    <div
                      style={{ backgroundImage: `url(${slideImages[1]})` }}
                    />
                  </div>
                  <div className="each-slide">
                    <div
                      style={{ backgroundImage: `url(${slideImages[2]})` }}
                    />
                  </div>
                  <div className="each-slide">
                    <div
                      style={{ backgroundImage: `url(${slideImages[3]})` }}
                    />
                  </div>
                  <div className="each-slide">
                    <div
                      style={{ backgroundImage: `url(${slideImages[4]})` }}
                    />
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
