import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Switch } from "react-router";
import ScrollButton from "react-scroll-button";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as famData from "./family.json";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { NavLink, Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import { StickyContainer, Sticky } from "react-sticky";
import _ from "lodash";
import { Search, Label } from "semantic-ui-react";
import SearchBar from "react-search-bar-semantic-ui";
import Select from "react-select";
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

// Local Search Bank for Search Feature
const searchData = [
  {
    title: "Abram Baigelman 1",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman026.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1935",
      "krakow",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 2",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman027.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1935",
      "krakow",
      "sukienniee",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 3",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman029.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1935",
      "krakow",
      "ploso",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 4",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman030.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1935",
      "krakow",
      "hieia",
      "marjacka",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 5",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman031.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1936",
      "kryneia",
      "october",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 6",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman034.jpeg"),
    tags: ["abram ", "baigelman", "1936", "pre-WWII", "arthur", "bay"],
    id: 1
  },
  {
    title: "Abram Baigelman 7",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman035.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1936",
      "kryniea",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 8",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman038.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "henry's brother",
      "1936",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Chana Fodeman",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Chana.Fodeman025.jpeg"),
    tags: [
      "chana",
      "fodeman ",
      "david's wife",
      "actress",
      "1930",
      "warsaw",
      "poland",
      "pre-wwII"
    ]
  },
  {
    title: "David Baigelman 1",
    description: "",
    image: require("./SearchMedia/Pre-WWII/David.Baigelman016.jpeg"),
    tags: ["david ", "baigelman", "1934", "pre-WWII"],
    id: 1
  },
  {
    title: "David Baigelman 2",
    description: "",
    image: require("./SearchMedia/Pre-WWII/David.Baigelman022.jpeg"),
    tags: ["david ", "baigelman", "1934", "pre-WWII"],
    id: 1
  },
  {
    title: "Gita Baigelman",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Gita.Baigelman137.jpeg"),
    tags: ["gita ", "baigelman", "pre-WWII"],
    id: 1
  },
  {
    title: "Henry Baigelman 1",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Henry.Baigelman002.jpeg"),
    tags: ["henry ", "baigelman", "pre-WWII"],
    id: 1
  },
  {
    title: "Henry Baigelman 2",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Henry.Baigelman003.jpeg"),
    tags: ["henry ", "baigelman", "pre-WWII"],
    id: 1
  },
  {
    title: "Henry Baigelman 3",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Henry.Baigelman004.jpeg"),
    tags: ["henry ", "baigelman", "1938", "pre-WWII"],
    id: 1
  },
  {
    title: "Henry Baigelman 4",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Henry.Bogelman001.jpeg"),
    tags: ["henry ", "baigelman", "pre-WWII"],
    id: 1
  },
  {
    title: "Henry David Baigelman",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Henry.David.Baigelman006.jpeg"),
    tags: ["henry ", "baigelman", "pre-WWII", "band"],
    id: 1
  },
  {
    title: "Jolly Boys",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Jolly.Boys008.jpeg"),
    tags: ["jolly", "boys", "pre-WWII"],
    id: 1
  },
  {
    title: "Leon Glazer",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Leon.Glazer143.jpeg"),
    tags: [
      "leon",
      "glazer",
      "polish",
      "army",
      "may",
      "5/26/1927",
      "lodz",
      "pre-wwII"
    ]
  },
  {
    title: "Lodz Theatre",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Lodz.Theatre426.jpeg"),
    tags: [
      "isaac ",
      "simon",
      "david",
      "baigelman",
      "music",
      "1800",
      "1939",
      "pre-WWII"
    ],
    id: 1
  }
];

// Music Player Options
const options = {
  //audio lists model
  audioLists: [
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      musicSrc: () => {
        return Promise.resolve(
          "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
        );
      }
    },
    {
      name: "Bedtime Stories",
      singer: "Jay Chou",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",
      musicSrc:
        "http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3"
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
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchBank, setSearchBank] = useState([]);
  const [darkMode, setDarkMode] = useState(fetchInitMode());
  const [open, setOpen] = useState(false);
  const [person, setPerson] = useState("");
  const [params, setParams] = useState(options);

  const handleClose = () => {
    setOpen(false);
  };

  const handleResultSelect = (e, { result }) => {
    setPerson(result);
    setValue(result.title);
    setOpen(true);
  };
  const handleSearchChange = (e, { value }) => {
    setIsLoading(true, value);
    setValue(value);
    setTimeout(() => {
      if (value.length < 1) {
        setIsLoading(false);
        setValue("");
        setResults([]);
      }
      const re = new RegExp(_.escapeRegExp(value), "");
      const isMatch = result => re in setIsLoading(false);
      setFilteredResults(_.filter(searchData, isMatch));
    }, 300);
  };
  const handleTagChange = (e, { value }) => {
    console.log("running HANDLETAGCHANGE");
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
        runnerArray = []
      }
      const match = figure => {
        return figure.tagMatch === true;
      };

      tagMatchArray.forEach(figure => {
        figure.tags.forEach(tag => {
          figure.tagMatch = false;
          if (tag.includes(searchQuery)) {
            console.log("tag match found:",searchQuery);
            setLoading(false);
            figure.tagMatch = true;
            if(!runnerArray.includes(figure)){runnerArray.push(figure);}
            
         
            console.log("Runner array:",runnerArray);
          }
         
        });
      });
        setFilteredResults(runnerArray);
      console.log("Filtered Results:",filteredResults);
    }, 300);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/tutorial/")
      .then(response => {
        console.log("GET passsed.");
        setSearchBank(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
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
            <NavbarBrand href="/berelson-development/#/">
              {"Vessel Archives"}
            </NavbarBrand>

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
          </Switch>
        </div>
      )}
    </Router>
  );
};

export default App;
