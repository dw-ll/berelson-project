import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import Pre from "../../../component/pre";


const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/timeline/src/Media/Pre-WWII/";
const slideImages = [
  `${IMGURL}David.Baigelman016.jpeg`,
  `${IMGURL}DavidBaigelman022.jpeg`
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
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h3 className="profile_title">David Baigelman</h3>
              <h6>B. 1900 D. 1950</h6>
              <h6 className="profile_bio">
                David Baigelman was an extremely versatile person: a violinist
                and violist, a conductor, composer and songwriter. He conducted
                the Łódź Symphony Orchestra and the orchestra of the Jewish
                Icchok Zandberg Theatre, he composed music for many theatres all
                over Poland and conducted their orchestras, he recorded albums
                for Syrena-Electro, but became famous as the author of the music
                for the performance of The Dybbuk by S. Anski, which became an
                international theatre hit. During the war, he founded and
                conducted a 44-member symphony orchestrain the Łódź Ghetto.
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
              </Slide>
            </div>
          </div>
        </div>

        <div>
          <Link to="/pre">Go back to Pre World War II</Link>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
