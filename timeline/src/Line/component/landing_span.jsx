import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Switch } from "react-router";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView
} from "mdbreact";
import Greeting from "react-lazy-hero";
import Lodz from "../../Media/lodz.jpg";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FoniaGreet from "../../Media/Post-WWII 2/Fonia213.jpeg";
import CarolGreet from "../../Media/Modern/Carol343.jpeg";
import EdGreet from "../../Media/Post-WWII 2/Ed.Silver091.jpeg";
import Fonia2Greet from "../../Media/Post-WWII 2/Fonia208 2.jpeg";
import Pre from "./pre.jsx";
import WW2 from "./ww2.jsx";
import Post from "./post.jsx";
import Modern from "./present.jsx";
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
  }
];

export default class Span extends Component { 
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
                minHeight="100vh"
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
                    The Berelson Project
                  </h3>
                  <div className="greeting-button">
                    <Grid item>
                      <ButtonGroup aria-label="Outlined primary button group">
                        <Button
                          component={Link}
                          to="/archive"
                          className="greeting-button-text"
                        >
                          Visit Archive
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </div>
                </div>
              </Greeting>
            </div>
            <ul className="eras">
              <li className="era-span">
                <Link to="/pre" className="span-link">
                  <a className="era-image1">&nbsp;</a>
                </Link>
                <div className="l-container era-text-container">
                  <div className="page-section__row era-text-inner-container">
                    <div className="page-section__title-container era-text-break"></div>
                    <div className="page-section__content era-text">
                      <Link to="/pre" className="span-title-link">
                        <h3 className="era-text-link">Before the War</h3>
                      </Link>
                      <p className="era-date">
                        <span>1900-1950</span>
                      </p>
                      <div className="rich-text-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="era-span">
                <Link to="/ww2" className="span-link">
                  <a className="era-image2">&nbsp;</a>
                </Link>
                <div className="l-container era-text-container">
                  <div className="page-section__row era-text-inner-container">
                    <div className="page-section__title-container era-text-break"></div>
                    <div className="page-section__content era-text">
                      <Link to="/ww2" className="span-title-link">
                        <h3 className="era-text-link">World War II</h3>
                      </Link>
                      <p className="era-date">
                        <span>1900-1950</span>
                      </p>
                      <div className="rich-text-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="era-span">
                <Link to="/post" className="span-link">
                  <a className="era-image3">&nbsp;</a>
                </Link>
                <div className="l-container era-text-container">
                  <div className="page-section__row era-text-inner-container">
                    <div className="page-section__title-container era-text-break"></div>
                    <div className="page-section__content era-text">
                      <Link to="/post" className="span-title-link">
                        <h3 className="era-text-link">After the War</h3>
                      </Link>
                      <p className="era-date">
                        <span>1900-1950</span>
                      </p>
                      <div className="rich-text-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="era-span">
                <Link to="/present" className="span-link">
                  <a className="era-image4">&nbsp;</a>
                </Link>
                <div className="l-container era-text-container">
                  <div className="page-section__row era-text-inner-container">
                    <div className="page-section__title-container era-text-break"></div>
                    <div className="page-section__content era-text">
                      <Link to="/present" className="span-title-link">
                        <h3 className="era-text-link">Present</h3>
                      </Link>
                      <p className="era-date">
                        <span>1900-1950</span>
                      </p>
                      <div className="rich-text-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Switch>
      </Router>
    );
  }
}
