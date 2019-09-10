import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import ScrollButton from "react-scroll-button";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
// import styled from "@emotion/styled";
import * as legoData from "./legoloading.json";
import * as doneData from "./doneloading.json";
import * as famData from "./family.json";
import * as treeData from "./tree.json";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {
  DropdownItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
// import { themeManager } from "./theme_switch.jsx";
import Pre from "./Line/component/pre.jsx";
import WW2 from "./Line/component/ww2.jsx";
import Post from "./Line/component/post.jsx";
import Present from "./Line/component/present.jsx";
import Archive from "./Line/component/archive.jsx";
import About from "./Line/component/about.jsx";
import Tree from "./Line/component/tree.jsx";
import "firebase/database";
import "./App.css";
import Line from "./Line/component/Line.jsx";
import Load from "./loading.js";
import "bootstrap/dist/css/bootstrap.css";
import loadGreet from "./Media/Post-WWII 2/Fonia220.jpeg";
require("bootstrap");
global.jQuery = require("jquery");
const Loader = {
  loop: true,
  autoplay: true,
  animationData: famData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

/*const ThemeWrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  h1 {
    color: ${props => props.theme.body};
  }
`; */

//test
const App = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const [darkMode, setDarkMode] = useState(fetchInitMode());

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          setLoading(true);
          setTimeout(() => {
            setDone(true);
          }, 1000);
        });
    }, 2200);
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function fetchInitMode() {
    const isReturningUser = "dark" in localStorage;
    const storedMode = JSON.parse(localStorage.getItem("dark"));
    const userPreference = fetchFeaturePref();

    return storedMode || false;
  }
  function fetchFeaturePref() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme:dark)");
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          path="/#/"
          exact
          render={() => {
            return <Line />;
          }}
        />
        <Route
          path={`/pre`}
          exact
          render={() => {
            return <Pre />;
          }}
        />
        <Route
          path={`/ww2`}
          exact
          render={() => {
            return <WW2 />;
          }}
        />
        <Route
          path={`/post`}
          exact
          render={() => {
            return <Post />;
          }}
        />
        <Route
          path={`/present`}
          exact
          render={() => {
            return <Present />;
          }}
        />
        <Route
          exact
          path={`/#/archive`}
          render={() => {
            return <Archive />;
          }}
        />
        <Route
          exact
          path={`/#/tree`}
          render={() => {
            return <Tree />;
          }}
        />
        <Route
          exact
          path={`/#/about`}
          render={() => {
            return <About />;
          }}
        />

        <div className={darkMode ? "App dark-mode" : "App light-mode"} id="app">
          {!done ? (
            <FadeIn style={{ paddingTop: "100%" }}>
              <div className="loader">
                <h1>The Berelson Project</h1>
                <h1>Building Lineage</h1>
                {!loading ? (
                  <Lottie
                    options={Loader}
                    height={100}
                    width={80}
                    color="white"
                    className="lottie"
                  />
                ) : (
                  <Lottie
                    options={Loader}
                    height={100}
                    width={80}
                    color="white"
                    className="lottie"
                  />
                )}
              </div>
            </FadeIn>
          ) : (
            <div>
              <Navbar className="navbar-header no-shadows" light expand="md">
                <NavbarBrand href="/#/">{" The Berelson Project"}</NavbarBrand>

                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/archive">Archive</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="/#/tree">Tree</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/dw-ll/Berelson-Project">
                      GitHub
                    </NavLink>
                  </NavItem>
                  <NavItem className="toggle-container">
                    <button onClick={() => setDarkMode(isDark => !isDark)}>
                      Dark Mode
                    </button>
                  </NavItem>
                </Nav>
              </Navbar>

              <div>
                <ScrollButton
                  className="scroll-up-button"
                  targetId={"app"}
                  behavior={"smooth"}
                  buttonBackgroundColor={darkMode ? "grey" : "white"}
                  buttonColor={darkMode ? "white" : "black"}
                  iconType={"arrow-up"}
                />

                <Line />
              </div>

              <MDBFooter
                class="fixed-bottom"
                color="grey"
                className="footer font-small pt-4 mt-4"
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
                          <a href="/archive">Archive</a>
                        </li>
                        <li className="list-unstyled">
                          <a href="/tree">Family Tree</a>
                        </li>
                      </ul>
                    </MDBCol>
                    <MDBCol md="4">
                      <h5 className="title">Contact</h5>
                      <ul>
                        <li className="list-unstyled">
                          <p>
                            <i class="fas fa-home  mr-3"></i> Santa Cruz, CA
                            95062, US
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
        </div>
      </Switch>
    </Router>
  );
};

export default App;
