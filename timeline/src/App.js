import React, { useState, useEffect } from "react";
//import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import ScrollButton from "react-scroll-button";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as famData from "./family.json";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {  Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import _ from "lodash";
import { Search } from "semantic-ui-react";
//import SearchBar from "react-search-bar-semantic-ui";
import MusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Pre from "./Line/component/pre.jsx";
import WW2 from "./Line/component/ww2.jsx";
import Post from "./Line/component/post.jsx";
import Present from "./Line/component/present.jsx";
import Archive from "./Line/component/archive.jsx";
import About from "./Line/component/about.jsx";
import Tree from "./Line/component/tree.jsx";
import LandingSpan from "./Line/component/landing_span.jsx";
import searchData from "./searchData.js";
import "firebase/database";
import "./App.css";
import Line from "./Line/component/Line.jsx";
import "bootstrap/dist/css/bootstrap.css";
require("bootstrap");
global.jQuery = require("jquery");

// Loading Animation
const Loader = {
  loop: true,
  autoplay: true,
  animationData: famData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

// Music Player Options
const options = {
  //audio lists model
  audioLists: [
    {
      name: "Makh Tsu Di Eygelekh",
      singer: "David Baigelman",
      cover: require("./Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490210/Makh_Tsu_Di_Eygelekh_slzclb.mp3"
    },
    {
      name: "Makh Tsu Di Eygelekh 2",
      singer: "David Baigelman",
      cover: require("./Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490518/Makh_tsu_di_eygelekh_Close_your_little_eyes_qo5fd3.wav"
    },
    {
      name: "Tsigaynerlid",
      singer: "David Baigelman",
      cover: require("./Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490511/03_Tsigaynerlid_fqfelx.wav"
    },
    {
      name: "Der Yungiker Shnayderl",
      singer: "David Baigelman",
      cover: require("./Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490550/Der_yungiker_shnayderl_The_Young_Taylor_itmlrj.wav"
    },
    {
      name: "Es Benkt Zikh Nokh a Heym",
      singer: "David Baigelman",
      cover: require("./Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490560/Es_benkt_zikh_nokh_a_heym_We_long_for_a_home_rst1da.wav"
    },
    {
      name: "Feldafing",
      singer: "David Baigelman",
      cover: require("./Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490443/Feldafing_oeywyb.wav"
    },
    {
      name: "Grzech A Sin",
      singer: "David Baigelman",
      cover: require("./Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490521/Grzech_A_Sin_yvnbgy.wav"
    },
    {
      name: "Ikh Vil Fargesn",
      singer: "David Baigelman",
      cover: require("./Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490509/Ikh_vil_fargesn_I_Will_Forget_ldur41.wav"
    },
    {
      name: "Nie Gniewaj Sie",
      singer: "David Baigelman",
      cover: require("./Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490667/Nie_gniewaj_sie_Don_t_Sulk_My_Dear_bjqbgz.wav"
    },
    {
      name: "Untitled",
      singer: "David Baigelman",
      cover: require("./Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490640/Unknown_Instrumental_Fragment_2_fmi7kc.wav"
    }
  ],

  //default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  //if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  theme: "light",

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  bounds: "body",

  //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //"auto|metadata|none" "true| false"
  preload: false,

  //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: true,

  //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  //The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,

  //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    top: 575,
    left: 55
  },

  // play mode text config of the audio player
  playModeText: {
    order: "In Order",
    orderLoop: "Loop",
    singleLoop: "Loop Once",
    shufflePlay: "Shuffle"
  },

  //audio controller open text  [ type `String | ReactNode` default 'open']
  openText: "Open",

  //audio controller close text  [ type `String | ReactNode` default 'close']
  closeText: "Close",

  // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
  notContentText: "List Empty",

  panelTitle: "Music",

  defaultPlayMode: "order",

  //audio mode        mini | full          [type `String`  default `mini`]
  mode: "mini",

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: true,

  //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: false,

  //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,

  //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: false,

  //audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  //drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  //Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  //play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  //reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  //download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: false,

  //loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: false,

  //lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: false,

  //Extensible custom content       [type 'Array' default '[]' ]
  extendsContent: [],

  //default volume of the audio player [type `Number` default `100` range `0-100`]
  defaultVolume: 100,

  //playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log("[currentPlayId] audio lists change:", currentPlayId);
    console.log("[audioLists] audio lists change:", audioLists);
    console.log("[audioInfo] audio lists change:", audioInfo);
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      "audio play track change:",
      currentPlayId,
      audioLists,
      audioInfo
    );
  },

  // custom music player root node
  getContainer() {
    return document.body;
  }
};
const App = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [darkMode, setDarkMode] = useState(fetchInitMode());
  const [open, setOpen] = useState(false);
  const [person, setPerson] = useState("");
  const [params] = useState(options);

  const handleClose = () => {
    setOpen(false);
  };

  const handleResultSelect = (e, { result }) => {
    setPerson(result);
    setValue(result.title);
    setOpen(true);
  };

  const handleTagChange = (e, { value }) => {
    const searchQuery = value.toLowerCase();
    setIsLoading(true, value);
    setValue(value);
    let tagMatchArray = searchData;
    let runnerArray = [];

    setTimeout(() => {
      if (searchQuery.length === 0) {
        setIsLoading(false);
        setValue("");
        setFilteredResults([]);
        runnerArray = [];
      }

      tagMatchArray.forEach(figure => {
        figure.tags.forEach(tag => {
          if (tag.includes(searchQuery)) {
            setLoading(false);
            if (!runnerArray.includes(figure)) {
              runnerArray.push(figure);
            }
          }
        });
      });
      setFilteredResults(runnerArray);
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          setLoading(false);
          setTimeout(() => {
            setDone(true);
          }, 1000);
        });
    }, 2200);
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function fetchInitMode() {
    const storedMode = JSON.parse(localStorage.getItem("dark"));

    return storedMode || false;
  }

  return (
    <Router>
      {!done ? (
        <FadeIn style={{ paddingTop: "100%" }}>
          <div className="loader" style={{ height: "100%" }}>
            <h1 className="lottie-text">The Berelson Project</h1>
            <h1 className="lottie-text">Building Lineage</h1>
            {!loading ? (
              <Lottie
                options={Loader}
                height={100}
                width={80}
                color="black"
                className="lottie"
              />
            ) : (
              <Lottie
                options={Loader}
                height={100}
                width={80}
                color="black"
                className="lottie"
              />
            )}
          </div>
        </FadeIn>
      ) : (
        <div className={darkMode ? "App dark-mode" : "App light-mode"} id="app">
          <Navbar className="navbar-header no-shadows" light expand="md">
            <NavbarBrand href="/#">{"Vessel Archives"}</NavbarBrand>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/archive">
                  Archive
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/tree">
                  Family Tree
                </Link>
              </NavItem>
              <NavItem>
                <Search
                  className="search-bar"
                  loading={isLoading}
                  onResultSelect={handleResultSelect}
                  onSearchChange={_.debounce(handleTagChange, 500, {
                    leading: true
                  })}
                  results={filteredResults}
                  value={value}
                  size="large"
                />
              </NavItem>
              <NavItem className="toggle-container">
                {darkMode ? (
                  <span
                    className="mode-toggle"
                    style={{ color: "pink" }}
                    onClick={() => setDarkMode(isDark => !isDark)}
                  >
                    ☾
                  </span>
                ) : (
                  <span
                    className="mode-toggle"
                    style={{ color: "darkgoldenrod" }}
                    onClick={() => setDarkMode(isDark => !isDark)}
                  >
                    ☀︎
                  </span>
                )}
              </NavItem>
            </Nav>
          </Navbar>

          <Switch>
            <Route
              path="/#"
              exact
              render={() => {
                return <Line />;
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
                    color={darkMode ? "dimgrey" : "grey"}
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
            />

            <Route
              exact
              path="/tree"
              render={() => (
                <div>
                  <Tree />
                  <MDBFooter
                    class="fixed-bottom"
                    color={darkMode ? "dimgrey" : "grey"}
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
            />
            <Route
              exact
              path="/about"
              render={() => (
                <div>
                  <About />
                  <MDBFooter
                    class="fixed-bottom"
                    color={darkMode ? "dimgrey" : "grey"}
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
            />
            <div>
              <div>
                <MusicPlayer className="music-player" {...params} />
              </div>
              <div>
                <ScrollButton
                  className="scroll-up-button"
                  targetId={"app"}
                  behavior={"smooth"}
                  buttonBackgroundColor={darkMode ? "grey" : "white"}
                  buttonColor={darkMode ? "white" : "black"}
                  iconType={"arrow-up"}
                />

                {(function() {
                  if (open) {
                    return (
                      <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={open}
                        onHide={() => setOpen(false)}
                        className="modal-container"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title
                            className="modal-body"
                            id="contained-modal-title-vcenter"
                          >
                            {person.title}
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modal-body">
                          <img
                            alt={person.image}
                            class="search-profile"
                            src={person.image}
                          />
                          <p>{person.description}</p>
                        </Modal.Body>
                        <Modal.Footer className="modal-foot">
                          <Button
                            style={{ backgroundColor: "grey !important" }}
                            onClick={handleClose}
                          >
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    );
                  }
                })()}

                <LandingSpan />
              </div>

              <MDBFooter
                class="fixed-bottom"
                color={darkMode ? "dimgrey" : "grey"}
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
                          <Link to="/archive">Archive</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/tree">Family Tree</Link>
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
          </Switch>
        </div>
      )}
    </Router>
  );
};

export default App;
