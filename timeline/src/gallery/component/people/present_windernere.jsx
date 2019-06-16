import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Present from "../../../Line/component/present.jsx";
const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/timeline/src/Media/Modern/";
const slideImages = `${IMGURL}Henry367.jpeg`;
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
          path="/present/"
          exact
          render={() => {
            return <Present />;
          }}
        />
        <div>
          <img
            className="single_photo"
            src={slideImages}
            alt=""
            height="500px"
          />

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
          <Link to="/present">Go back to Present</Link>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
