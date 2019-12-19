import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Greeting from "react-lazy-hero";
import Lodz from "../Media/lodz.jpg";
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
              <li className="era-span">
                <a className="era-image1 inactive" href="!#">
                  &nbsp;
                </a>
                <div className="l-container era-text-container">
                  <div className="page-section__row era-text-inner-container">
                    <div className="page-section__title-container era-text-break"></div>
                    <div className="page-section__content era-text">
                      <h3 className="era-text-link inactive">Before the War</h3>

                      <p className="era-date inactive">
                        <span>1900-1939</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="era-span">
                <a className="era-image2 inactive" href="!#">
                  &nbsp;
                </a>

                <div className="l-container era-text-container">
                  <div className="page-section__row era-text-inner-container">
                    <div className="page-section__title-container era-text-break"></div>
                    <div className="page-section__content era-text">
                      <h3 className="era-text-link inactive">World War II</h3>
                      <p className="era-date inactive">
                        <span>1939-1945</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="era-span">
                <a className="era-image3 inactive" href="!#">
                  &nbsp;
                </a>

                <div className="l-container era-text-container">
                  <div className="page-section__row era-text-inner-container">
                    <div className="page-section__title-container era-text-break"></div>
                    <div className="page-section__content era-text">
                      <h3 className="era-text-link inactive">After the War</h3>
                      <p className="era-date inactive">
                        <span>1945 - 1970</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="era-span">
                <a className="era-image4 inactive" href="!#">
                  &nbsp;
                </a>

                <div className="l-container era-text-container">
                  <div className="page-section__row era-text-inner-container">
                    <div className="page-section__title-container era-text-break"></div>
                    <div className="page-section__content era-text">
                      <h3 className="era-text-link inactive">Present</h3>
                      <p className="era-date inactive">
                        <span>1970 - 2000s</span>
                      </p>
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
