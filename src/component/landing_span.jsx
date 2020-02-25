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
            <h4 style={{ textAlign: "center" }} className="intro-text">
              meet the family
            </h4>
            <div class="container" style={{ marginTop: "35px" }}>
              <div class="row profiles">
                <div class="col-4">
                  <Card className="landing-card">
                    <Link to="/pre/david/">
                      <Card.Img src={DavidProfile}></Card.Img>
                    </Link>
                    <Card.Body>
                      <Card.Title>David Baigelman</Card.Title>
                      <Card.Text>
                        A violinist, conductor, composer and songwriter
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col-4" />
                <div class="col-4">
                  <Card className="landing-card">
                    <Link to="/pre/henry/">
                      <Card.Img src={HenryProfile}></Card.Img>
                    </Link>
                    <Card.Body>
                      <Card.Title>Henry Baigelman</Card.Title>
                      <Card.Text>
                        A violinist, saxophonist and composer and the only one
                        out of nine musical siblings to survive the war
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <div class="row profiles">
              <div class="col-4" />
              <div class="col-4">
                {" "}
                <Card className="landing-card">
                  <Link to="/present/riva">
                    <Card.Img src={RivaProfile}></Card.Img>
                  </Link>
                  <Card.Body>
                    <Card.Title>Riva Baigelman</Card.Title>
                    <Card.Text>More info about Riva.</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div class="col-4" />>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
