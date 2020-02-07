import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import { Switch } from "react-router";
import Greeting from "react-lazy-hero";
import Lodz from "../Media/lodz.jpg";
import Pre from "./pre.jsx";
import WW2 from "./ww2.jsx";
import Post from "./post.jsx";
import Modern from "./present.jsx";
import DavidProfile from "../Media/Pre-WWII/David.Baigelman016.jpeg";
import DavidRouter from "../profiles/component/people/pre_david.jsx";
import HenryProfile from "../Media/Post-WWII 2/Henry.Baigelman119.jpeg";
import HenryRouter from "../profiles/component/people/pre_henry.jsx";
import RivaProfile from "../Media/Modern/Riva346.jpeg";
import RivaRouter from "../profiles/component/people/present_riva.jsx";
const routes = [
  {
    component: Pre,
    path: `${process.env.PUBLIC_URL}/pre/`
  },
  {
    component: WW2,
    path: "/ww2"
  },
  {
    component: Post,
    path: "/post"
  },
  {
    component: Modern,
    path: "/present"
  },
  {
    component: DavidRouter,
    path: "/pre/david/"
  },
  {
    component: HenryRouter,
    path: "/pre/henry/"
  },
  {
    component: RivaRouter,
    path: "/present/riva/"
  }
];

export default class Span extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
  }
  handleScrollToElement(event) {
    window.scrollTo(0, this.myRef.current.offsetTop);
  }
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          {routes.map((route, i) => (
            <Route
              path={route.path}
              key={i}
              exact
              render={() => {
                return <route.component />;
              }}
            />
          ))}
          />
          <div>
            <div className="greet">
              <Greeting
                opacity="0"
                isCentered={true}
                imageSrc={Lodz}
                className="greeting"
              >
                <div className="greeting-greet">
                  <h3
                    className="greeting-text"
                    style={{
                      color: "black",
                      fontFamily: "Times",
                      marginTop: "10px"
                    }}
                  >
                    Vessel Archives
                  </h3>

                  <div className="greeting-button"></div>
                  <div
                    className="scroll-down"
                    onClick={() => {
                      this.scrollDiv.current.scrollIntoView({
                        behavior: "smooth"
                      });
                    }}
                  ></div>
                </div>
              </Greeting>
            </div>
            <ul className="eras" ref={this.scrollDiv}>
              <h4 style={{ textAlign: "center" }} className="intro-text">
                meet the family
              </h4>
              <li className="era-span2 left">
                <div class="landing_container left">
                  <div class="ui cards">
                    <Card
                      fluid
                      color="transparent"
                      header="Option 1"
                      className="profile-card"
                    >
                      <div class="content">
                        <div class="row">
                          <div class="col-6">
                            <Link to="/pre/david/">
                              <img
                                className="single-photo-landing"
                                src={DavidProfile}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div class="col-6 landing-profile-text">
                            <h3 className="profile_title">David Baigelman</h3>
                            <h6>B. 1900 D. 1950</h6>
                            <h5 className="profile_bio_profile">
                              David Baigelman was an extremely versatile person:
                              a violinist and violist, a conductor, composer and
                              songwriter. He conducted the Łódź Symphony
                              Orchestra and the orchestra of the Jewish Icchok
                              Zandberg Theatre, he composed music for many
                              theatres all over Poland and conducted their
                              orchestras, he recorded albums for Syrena-Electro,
                              but became famous as the author of the music for
                              the performance of The Dybbuk by S. Anski, which
                              became an international theatre hit. During the
                              war, he founded and conducted a 44-member symphony
                              orchestrain the Łódź Ghetto.
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </li>
              <div className="space"></div>
              <li className="era-span2 right">
                <div class="landing_container right">
                  <div class="ui cards">
                    <Card
                      fluid
                      color="transparent"
                      header="Option 1"
                      className="profile-card"
                    >
                      <div class="content">
                        <div class="row">
                          <div class="col-6">
                            <Link to="/pre/henry/">
                              <img
                                className="single-photo-landing"
                                src={HenryProfile}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div class="col-6 landing-profile-text">
                            <h3 className="profile_title">Henry Baigelman</h3>
                            <h6>B. 1900 D. 1950</h6>
                            <h5 className="profile_bio_profile">
                              Chaim (later: Henry) Baigelman was a violinist,
                              saxophonist and composer and the only one out of
                              nine musical siblings to survive the war. He
                              played professionally since the age of fifteen. He
                              was a member of a family band, The Jolly Boys,
                              which he revived in post-war Germany under the
                              name The Happy Boys, playing jazz concerts for
                              American soldiers and Jewish survivors. After the
                              war, he emigrated to New York, where he continued
                              his musical activities with The Happy Boys.
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </li>
              <div className="space"></div>
              <li className="era-span2 left">
                <div class="landing_container left">
                  <div class="ui cards">
                    <Card
                      fluid
                      color="transparent"
                      header="Option 1"
                      className="profile-card"
                    >
                      <div class="content">
                        <div class="row">
                          <div class="col-6">
                            <Link to="/present/riva/">
                              <img
                                className="single-photo-landing"
                                src={RivaProfile}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div class="col-6 landing-profile-text">
                            <h3 className="profile_title">Riva Berelson</h3>
                            <h6>B. 1900 D. 1950</h6>
                            <h5 className="profile_bio_profile">
                              Riva was lorem ipsumdolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat nulla pariatur.
                              Excepteur sint occaecat cupidatat non proident,
                              sunt in culpa qui officia deserunt mollit anim id
                              est laborum.
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </li>
              <div className="space"></div>
            </ul>
          </div>
        </Switch>
      </Router>
    );
  }
}
