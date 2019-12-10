import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import Post from "../../../component/post.jsx";
const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/timeline/src/Media/Post-WWII%202/";
const slideImages = [
  `${IMGURL}Henry.Baigelman106.jpeg`,
  `${IMGURL}Henry.Baigelman108.jpeg`,
  `${IMGURL}Henry.Baigelman109.jpeg`,
  `${IMGURL}Henry.Baigelman110.jpeg`,
  `${IMGURL}Henry.Baigelman119.jpeg`,
  `${IMGURL}Henry.Baigelman121.jpeg`,
  `${IMGURL}Henry.Baigelman122.jpeg`,
  `${IMGURL}Henry.Baigelman124.jpeg`,
  `${IMGURL}Henry.Baigelman125.jpeg`,
  `${IMGURL}Henry.Baigelman126.jpeg`,
  `${IMGURL}Henry.Baigelman128.jpeg`,
  `${IMGURL}Henry.Baigelman129.jpeg`,
  `${IMGURL}Henry.Baigelman130.jpeg`,
  `${IMGURL}Henry.Baigelman131.jpeg`,
  `${IMGURL}Henry.Baigelman134.jpeg`,
  `${IMGURL}Henry.David.Baigelman007.jpeg`,
  `${IMGURL}Henry271.jpeg`,
  `${IMGURL}Henry279.jpeg`
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
          path="/post"
          exact
          render={() => {
            return <Post />;
          }}
        />
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h3 className="profile_title"> Henry Baigelman</h3>
              <h6>B. 1900 D. 1950</h6>
              <h6 className="profile_bio">
                Chaim (later: Henry) Bajgelman was a violinist, saxophonist and
                composer and the only one out of nine musical siblings to
                survive the war. He played professionally since the age of
                fifteen. He was a member of a family band, The Jolly Boys, which
                he revived in post-war Germany under the name The Happy Boys,
                playing jazz concerts for American soldiers and Jewish
                survivors. After the war, he emigrated to New York, where he
                continued his musical activities with The Happy Boys.
              </h6>
            </div>
            <div class="col-6">
              <Slide {...properties}>
                <div className="each-slide" display="flex-container">
                  <div style={{ backgroundImage: `url(${slideImages[0]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[1]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[2]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[3]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[4]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[5]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[6]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[7]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[8]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[9]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[10]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[11]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[12]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[13]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[14]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[15]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[16]})` }} />
                </div>
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${slideImages[17]})` }} />
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
