import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import WWII from "../../../Line/component/ww2.jsx";
const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/timeline/src/Media/WWII/";
const slideImages = `${IMGURL}HappyBoys4282.jpeg`;

const Slideshow = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/ww2"
          exact
          render={() => {
            return <WWII />;
          }}
        />
        <div>
          <img className="single_photo" src={slideImages} alt="" />
          <h6>
            Happy Boys was lorem ipsumdolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </h6>
          <Link to="/ww2">Go back to World War II</Link>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;