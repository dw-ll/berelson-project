import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import Post from "../../../Line/component/post.jsx";
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
          <Link to="/post">Go back to Post World War II</Link>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
