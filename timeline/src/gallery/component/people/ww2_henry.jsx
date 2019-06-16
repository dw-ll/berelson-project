import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import WW2 from "../../../Line/component/ww2.jsx";
const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/timeline/src/Media/WWII/";
const slideImages = [
  `${IMGURL}Henry.Baigelman101.jpeg`,
  `${IMGURL}Henry.Baigelman102.jpeg`,
  `${IMGURL}Henry.Baigelman118.jpeg`
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
          path="/ww2"
          exact
          render={() => {
            return <WW2 />;
          }}
        />
        <div>
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

          <h6>
            Henry Baigelman was lorem ipsumdolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </h6>
          <Link to="/ww2">Go back to World War II</Link>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
