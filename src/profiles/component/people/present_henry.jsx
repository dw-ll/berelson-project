import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Present from "../../../component/present.jsx";
const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/src/Media/Modern/";
const slideImages = `${IMGURL}Henry367.jpeg`;
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
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h3 className="profile_title">Henry Baigelman</h3>
              <h6>B. 1900 D. 1950</h6>
              <h6 className="profile_bio">
                Chaim (later: Henry) Bajgelman was a violinist, saxophonist and
                composer and the only one out of nine musical siblings to
                survive the war. He played professionally since the age of
                fifteen. He was a member of a family band, The Jolly Boys, which
                he revived in post-war Germany under the name The Happy Boys,
                playing jazz concerts for American soldiers and Jewish
                survivors. After the war, he emigrated to New York, where he
                continued his musical activities with The Happy Boys.
              </h6>
            </div>
            <div class="col-6">
              <img
                className="single_photo"
                src={slideImages}
                alt=""
                height="500px"
              />
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
