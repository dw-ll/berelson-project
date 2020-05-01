import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Archive from "../../../component/archive.jsx";
import Tree from "../../../component/tree.jsx";
import Pre from "../../../component/pre";

const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/src/Media/WWII/";
const slideImages = `${IMGURL}Henry.Baigelman118.jpeg`;
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
        <Route
          exact
          path="/archive/"
          render={() => (
            <div>
              <Archive />
              <MDBFooter
                class="fixed-bottom"
                color={"grey"}
                className="main-footer font-small pt-4 mt-4"
              >
                <MDBContainer fluid className="text-center text-md-left">
                  <MDBRow>
                    <MDBCol md="4">
                      <h5 className="title">The Berelson Project</h5>
                      <p>
                        An ancestral site built to display and document the
                        Berelson lineage in an archival effort.
                      </p>
                    </MDBCol>
                    <MDBCol md="4">
                      <h5 className="title">Explore</h5>
                      <ul>
                        <li className="list-unstyled">
                          <Link to="/archive/">Archive</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/tree/">Family Tree</Link>
                        </li>
                      </ul>
                    </MDBCol>
                    <MDBCol md="4">
                      <h5 className="title">Contact</h5>
                      <ul>
                        <li className="list-unstyled">
                          <p>
                            <i class="fas fa-home  mr-3"></i> California
                          </p>
                        </li>
                        <li className="list-unstyled">
                          <p>
                            <i class="fas fa-envelope mr-3"></i> Email
                          </p>
                        </li>
                        <li className="list-unstyled">
                          <p>
                            <i class="fas fa-phone mr-3"></i> Phone
                          </p>
                        </li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                  <MDBContainer fluid>
                    &copy; {new Date().getFullYear()}
                  </MDBContainer>
                </div>
              </MDBFooter>
            </div>
          )}
        />

        <Route
          exact
          path="/tree"
          render={() => (
            <div>
              <Tree />
              <MDBFooter
                class="fixed-bottom"
                color={"grey"}
                className="main-footer font-small pt-4 mt-4"
              >
                <MDBContainer fluid className="text-center text-md-left">
                  <MDBRow>
                    <MDBCol md="4">
                      <h5 className="title">The Berelson Project</h5>
                      <p>
                        An ancestral site built to display and document the
                        Berelson lineage in an archival effort.
                      </p>
                    </MDBCol>
                    <MDBCol md="4">
                      <h5 className="title">Explore</h5>
                      <ul>
                        <li className="list-unstyled">
                          <Link to="/archive/">Archive</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/tree/">Family Tree</Link>
                        </li>
                      </ul>
                    </MDBCol>
                    <MDBCol md="4">
                      <h5 className="title">Contact</h5>
                      <ul>
                        <li className="list-unstyled">
                          <p>
                            <i class="fas fa-home  mr-3"></i> California
                          </p>
                        </li>
                        <li className="list-unstyled">
                          <p>
                            <i class="fas fa-envelope mr-3"></i> Email
                          </p>
                        </li>
                        <li className="list-unstyled">
                          <p>
                            <i class="fas fa-phone mr-3"></i> Phone
                          </p>
                        </li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                  <MDBContainer fluid>
                    &copy; {new Date().getFullYear()}
                  </MDBContainer>
                </div>
              </MDBFooter>
            </div>
          )}
        />
        <div>
          <div className="container-wrapper">
            <div class="container profile-container">
              <div class="row">
                <div class="col-6 col-md-4"></div>
                <div class="col-6 col-md-4">
                  <h3 className="profile_title">Henry Baigelman</h3>
                  <img
                    className="single_photo_profile"
                    src={slideImages}
                    style={{ width: "450px", marginLeft: "-50px" }}
                    alt=""
                  />

                  <h5 className="profile_title_date">B. 1911 D. 2002</h5>
                </div>
                <div class="col-6 col-md-4"></div>
              </div>
              <div class="row">
                <h6 className="profile_bio_row">
                  Chaim (later: Henry) Baigelman was a violinist, saxophonist
                  and composer and the only one out of nine musical siblings to
                  survive the war. He played professionally since the age of
                  fifteen. He was a member of a family band, The Jolly Boys,
                  which he revived in post-war Germany under the name The Happy
                  Boys, playing jazz concerts for American soldiers and Jewish
                  survivors. After the war, he emigrated to New York, where he
                  continued his musical activities with The Happy Boys. Henry
                  (Chaim) Baigelman (1911-2002), one of David’s younger
                  brothers, was also an extremely talented musician. When Henry
                  was 6, his brother-in-law, Samuel, taught him to play the
                  violin. He joined a conservatory and at 15 began playing both
                  the violin and the saxophone professionally. He played with
                  the family band, named The Jolly Boys, at the Łódź Ararat
                  Theater. After his family was confined to the ghetto, he
                  played the violin in the ghetto orchestra, conducted by his
                  brother David. On June 10, 1944, when the Nazis ordered the
                  destruction of the ghetto, David hid the family instruments,
                  including Henry’s violin, in the attic of a hat factory where
                  Henry had been working. After horrendous stints at Nazi work
                  camps, Henry became part of a 12,000-person forced march.
                  Starving and freezing, and barely able to walk, he was
                  liberated April 23, 1945 by U.S. Army troops. Only 3,000
                  prisoners survived. to his earlier band name and also to
                  emphasize that they were happy to have survived. The band
                  toured displaced persons camps, bringing the joy of American
                  jazz and swing to refugees and U.S. troops. During this time,
                  Henry wrote the lyrics to the popular Yiddish song “Es Bengt
                  Zich Nuch a Hajm” (“One Longs for Home”). The words, in part,
                  convey the dark past combined with a fierce optimism: . . .
                  <h6 className="profile_bio_subrow profile-text-quote">
                    One longs for home Our mourners must have retribution. It
                    was once terrible,But it has changed for the better. Now one
                    must live. Because the time has come!
                  </h6>
                  Henry’s brother-in-law had retrieved the hidden family
                  instruments from the Łódź ghetto following its liberation by
                  the Soviet Army. After migrating to New York City with his new
                  wife, Gita (who survived the Łódź ghetto and Ravesnbruck),
                  Henry continued performing with his band until 1959 and later
                  became successful in real estate. In 2010, Henry’s children,
                  Riva Berelson and Simon Baigelman, donated their father’s
                  rescued instruments, two violins and a saxophone, to the
                  United States Holocaust Memorial Museum.
                </h6>
              </div>
            </div>
            <div class="row henry_story">
              <div class="col-md-6 ">
                <h1 class="henry_story_title">His Journey</h1>

                <h6 className="henry_story_text">
                  Here is more info about Henry's journey from surviving the
                  war, and making his way to America. After horrendous stints at
                  Nazi work camps, Henry became part of a 12,000-person forced
                  march. Starving and freezing, and barely able to walk, he was
                  liberated April 23, 1945 by U.S. Army troops. Only 3,000
                  prisoners survived. to his earlier band name and also to
                  emphasize that they were happy to have survived. The band
                  toured displaced persons camps, bringing the joy of American
                  jazz and swing to refugees and U.S. troops. Est incididunt
                  sint eu minim dolore mollit velit velit commodo ex nulla
                  exercitation. Veniam velit adipisicing anim excepteur nostrud
                  magna nostrud aliqua dolor. Sunt aute est duis ut nulla
                  officia irure reprehenderit laborum fugiat dolore in elit.
                  Adipisicing do qui duis Lorem est. Est incididunt sint eu
                  minim dolore mollit velit velit commodo ex nulla exercitation.
                  Veniam velit adipisicing anim excepteur nostrud magna nostrud
                  aliqua dolor. Sunt aute est duis ut nulla officia irure
                  reprehenderit laborum fugiat dolore in elit. Adipisicing do
                  qui duis Lorem est.
                </h6>

                <div class="row">
                  <img
                    className="henry_story_photos"
                    src="https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/src/Media/Pre-WWII/Henry.David.Baigelman006.jpeg"
                    alt=""
                  />

                  <img
                    className="henry_story_photos"
                    src="https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/src/Media/WWII/Henry.Baigelman102.jpeg"
                    alt=""
                  />

                  <img
                    className="henry_story_photos"
                    src="https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/src/Media/Modern/Henry367.jpeg"
                    alt=""
                  />
                </div>
              </div>

              <div class="col-md-6 ">
                <Timeline lineColor={"goldenrod"} style={{ padding: "20px" }}>
                  <TimelineItem
                    key="001"
                    dateText="1945"
                    dateInnerStyle={{ backgroundColor: "goldenrod" }}
                  >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>

                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                  </TimelineItem>
                  <TimelineItem
                    key="002"
                    dateText="1945"
                    dateInnerStyle={{ backgroundColor: "goldenrod" }}
                  >
                    <h3 style={{ color: "black" }}>Title</h3>
                    <h4 style={{ color: "black" }}>Subtitle</h4>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                  </TimelineItem>
                  <TimelineItem
                    key="003"
                    dateText="1945"
                    dateInnerStyle={{ background: "goldenrod" }}
                  >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                  </TimelineItem>
                  <TimelineItem
                    key="004"
                    dateText="1945"
                    dateInnerStyle={{ background: "goldenrod" }}
                  >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
