import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import Post from "../../../Line/component/post.jsx";
const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/timeline/src/Media/Post-WWII%202/";
const slideImages = [
  `${IMGURL}Jack.Baigelman057.jpeg`,
  `${IMGURL}Jack.Baigelman065.jpeg`
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
        <div>
          <Slide {...properties}>
            <div className="each-slide" display="flex-container">
              <div style={{ backgroundImage: `url(${slideImages[0]})` }} />
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }} />
            </div>
            
          </Slide>

          <h6>
            Jack Baigelman was lorem ipsumdolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h6>
          <Link to="/post">Go back to Post World War II</Link>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
