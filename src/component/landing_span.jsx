import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { Switch } from "react-router";
import Greeting from "react-lazy-hero";
import Lodz from "../Media/lodz.jpg";
import Pre from "./pre.jsx";
import WW2 from "./ww2.jsx";
import Post from "./post.jsx";
import Modern from "./present.jsx";
import DavidProfile from "../Media/Pre-WWII/DavidProfile.jpeg";
import DavidRouter from "../profiles/component/people/pre_david.jsx";
import HenryProfile from "../Media/Post-WWII 2/Henry.Baigelman119 2.jpeg";
import HenryRouter from "../profiles/component/people/pre_henry.jsx";
import RivaProfile from "../SearchMedia/Riva/pola193.jpeg";
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
                parallaxOffset={200}
                imageSrc={Lodz}
                className="greeting"
              >
                <div className="greeting-greet">
                  <h3
                    className="greeting-text"
                    style={{
                      color: "black",
                      fontFamily: "Cambria",
                      marginTop: "7px",
                      marginLeft: "2px",
                      letterSpacing: "2.5px",
                      fontVariant: "small-caps"
                    }}
                  >
                    vessel archives
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
            <div ref={this.scrollDiv}>
              <h4 style={{ textAlign: "center" }} className="intro-text">
                meet the family
              </h4>
              <h4 style={{ textAlign: "center" }} className="intro-text-paragraph">
               "The Baigelman
                (Beigelman) family of Łódź were prominent musicians, composers,
                conductors, and theater performers. The patriarch, Simon
                (Szymon) Baigelman was first oboe for the Łódź Symphony
                Orchestra, which was populated mostly by musicians related to
                the family including the last names of Spielman, Mutzman,
                Ostrowiec, and Spaismacher. Perhaps the most famous was prodigy
                David (Dawid) Beigelman (1887-1945), a violinist, orchestra
                leader, and composer of Yiddish theater music and songs. He
                became director of the Łódź Yiddish Theater in 1912. Among other
                major accomplishments, he arranged the music for the hugely
                popular S. Ansky play, The Dybbuk. In 1929 he became composer
                and music director of the Łódź Ararat Theater."
              </h4>
              <div class="container" style={{ marginTop: "35px" }}>
                <div class="row profiles">
                  <div class="col-6">
                    <Card className="landing-card">
                      <Link to="/pre/david/">
                        <Card.Img src={DavidProfile}></Card.Img>
                      </Link>
                      <Card.Body>
                        <Card.Title>David Baigelman</Card.Title>
                        <Card.Text>
                          A violinist, conductor, composer and songwriter.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>

                  <div class="col-6">
                    <Card className="landing-card landing-card-henry">
                      <Link to="/pre/henry/">
                        <Card.Img src={HenryProfile}></Card.Img>
                      </Link>
                      <Card.Body>
                        <Card.Title>Henry Baigelman</Card.Title>
                        <Card.Text>
                          A violinist, saxophonist, composer. The only one out
                          of nine musical siblings to survive the war.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
