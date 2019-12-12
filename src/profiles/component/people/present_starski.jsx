import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import Present from "../../../component/present.jsx";

const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/src/Media/Modern/";
const slideImages = [
  `${IMGURL}Starski082.jpeg`,
  `${IMGURL}Starski083.jpeg`,
  `${IMGURL}Starski.Daughter085.jpeg`
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
          path="/present"
          exact
          render={() => {
            return <Present />;
          }}
        />
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h3 className="profile_title">Starski</h3>
              <h6>B. 1900 D. 1950</h6>
              <h6 className="profile_bio">
                Starski was lorem ipsumdolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
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
              </Slide>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
