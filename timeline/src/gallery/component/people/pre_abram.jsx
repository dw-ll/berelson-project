import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import ImageGallery from "react-image-gallery";
import { Slide } from "react-slideshow-image";
import Pre from "../../../Line/component/pre"
import Abram26 from "../../../Media/Pre-WWII/Abram.Baigelman026.jpeg";
import Abram27 from "../../../Media/Pre-WWII/Abram.Baigelman027.jpeg";
import Abram29 from "../../../Media/Pre-WWII/Abram.Baigelman029.jpeg";
import Abram30 from "../../../Media/Pre-WWII/Abram.Baigelman030.jpeg";
import Abram31 from "../../../Media/Pre-WWII/Abram.Baigelman031.jpeg";
import Abram34 from "../../../Media/Pre-WWII/Abram.Baigelman034.jpeg";
import Abram35 from "../../../Media/Pre-WWII/Abram.Baigelman035.jpeg";
import Abram38 from "../../../Media/Pre-WWII/Abram.Baigelman038.jpeg";

const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/timeline/src/Media/Pre-WWII/";
const slideImages = [
  `${IMGURL}Abram.Baigelman026.jpeg`,
  `${IMGURL}Abram.Baigelman027.jpeg`,
  `${IMGURL}Abram.Baigelman029.jpeg`,
  `${IMGURL}Abram.Baigelman030.jpeg`,
  `${IMGURL}Abram.Baigelman031.jpeg`,

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
      <Slide {...properties}>
        <div className="each-slide" display="flex-container">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
          
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
       
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}>
            
          </div>
        </div>
      </Slide>

      <h6>
        Abram Baigelman was lorem ipsumdolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </h6>
      <Link to="/pre">Go back to Pre World War II</Link>
    </div>
    </Switch>
    </Router>
  );
};
export default Slideshow;