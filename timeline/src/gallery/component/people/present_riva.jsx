import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import Present from "../../../Line/component/present.jsx";

const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/timeline/src/Media/Modern/";
const slideImages = [
  `${IMGURL}Riva290.jpeg`,
  `${IMGURL}Riva338.jpeg`,
  `${IMGURL}Riva346.jpeg`,
  `${IMGURL}Riva347.jpeg`,
  `${IMGURL}Riva348.jpeg`,
  `${IMGURL}Riva349.jpeg`,
  `${IMGURL}Riva350.jpeg`,
  `${IMGURL}Riva351.jpeg`,
  `${IMGURL}Riva352.jpeg`,
  `${IMGURL}Riva353.jpeg`,
  `${IMGURL}Riva354.jpeg`,
  `${IMGURL}Riva355.jpeg`
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
          </Slide>

          <h6>
            Riva was lorem ipsumdolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h6>
          <Link to="/present">Go back to Present</Link>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
