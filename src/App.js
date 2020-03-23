import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { Switch } from "react-router";
import { useSelector, useDispatch, connect } from "react-redux";
import ScrollButton from "react-scroll-button";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import Context from "./Context.js";
import Fab from '@material-ui/core/Fab'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { changeMode } from './redux/actions/changeMode.js';
import { changeDock } from './redux/actions/changeDock.js';
import SearchBar from "./component/SearchBar.jsx";
import Pre from "./component/pre.jsx";
import WW2 from "./component/ww2.jsx";
import Post from "./component/post.jsx";
import Present from "./component/present.jsx";
import PreHenry from "./profiles/component/people/pre_henry.jsx";
import Archive from "./component/archive.jsx";
import Tree from "./component/tree.jsx";
import DavidResults from './component/DavidResults.js';
import HenryResults from './component/HenryResults.js';
import RivaResults from './component/RivaResults.js';
import Results from "./component/Results.jsx";
import Baigelman from './component/Baigelman.js';
import LandingSpan from "./component/landing_span.jsx";
import MusicDock from './component/MusicDock.js';
import NavBar from './component/Navbar.js';
import Footer from './component/Footer.js';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
require("bootstrap");
global.jQuery = require("jquery");

const fabStyle = { position: 'fixed', top: '85%', left: '2%' };
const App = (props) => {
  const dark = props.dark.dark;
  const visible = props.dock.dock;
  const changeDock = props.changeDock;
  console.log(props);
  console.log(dark);
  return (
    <Router>

      <div className={dark ? "App dark-mode" : "App light-mode"} id="app">
        <Fab className="music-trigger"
          size="large"
          style={fabStyle}
          color="default"
          aria-label="play"
          onClick={changeDock}>
          <MusicNoteIcon />
        </Fab>
        <NavBar props={props} />
        <Switch>
          <Route
            path="/baigelman-family"
            exact
            render={() => {
              return <Baigelman />;
            }}
          />

          <Route
            path="/pre"
            exact
            render={() => {
              return <Pre />;
            }}
          />
          <Route
            path="/pre/henry"
            exact
            render={() => {
              return <PreHenry />;
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
            path="/archive/"
            render={() => (
              <div>
                <Archive />
                <MDBFooter
                  class="fixed-bottom"
                  color={dark ? "dimgrey" : "grey"}
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
                <Tree/>
                <MDBFooter
                  class="fixed-bottom"
                  color={dark ? "dimgrey" : "grey"}
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
            path="/results/"
            render={props => (
              <div>
                <Results {...props} />
                <MDBFooter
                  class="fixed-bottom"
                  color={dark ? "dimgrey" : "grey"}
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
            path="/results/henry"
            render={props => (
              <div>
                <HenryResults />
                <MDBFooter
                  class="fixed-bottom"
                  color={dark ? "dimgrey" : "grey"}
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
            path="/results/david"
            render={props => (
              <div>
                <DavidResults />
                <MDBFooter
                  class="fixed-bottom"
                  color={dark ? "dimgrey" : "grey"}
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
            path="/results/riva"
            render={props => (
              <div>
                <RivaResults />
                <MDBFooter
                  class="fixed-bottom"
                  color={dark ? "dimgrey" : "grey"}
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
            <div>
              <ScrollButton
                className="scroll-up-button"
                targetId={"app"}
                behavior={"smooth"}
                buttonBackgroundColor={dark ? "grey" : "white"}
                buttonColor={dark ? "white" : "black"}
                iconType={"arrow-up"}
              />
              <LandingSpan props={props} />

              <MusicDock />
            </div>
          </div>
        </Switch>
      </div>
    </Router>
  );
};
const mapStateToProps = (state) => {
  return {
    dark: state.dark,
    dock: state.dock
  }
}


export default withRouter(connect(mapStateToProps, { changeMode, changeDock })(App));
