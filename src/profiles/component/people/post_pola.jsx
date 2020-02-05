import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import Post from "../../../component/post.jsx";
const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/src/Media/Post-WWII%202/";
const slideImages = [
  `${IMGURL}pola162.jpeg`,
  `${IMGURL}pola163.jpeg`,
  `${IMGURL}pola164.jpeg`,
  `${IMGURL}pola166.jpeg`,
  `${IMGURL}pola176.jpeg`,
  `${IMGURL}pola177.jpeg`,
  `${IMGURL}pola178.jpeg`,
  `${IMGURL}pola194.jpeg`
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
              <h3 className="profile_title">Pola</h3>
              <h6>B. 1900 D. 1950</h6>
              <h6 className="profile_bio">
                Pola was lorem ipsumdolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
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
              </Slide>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;