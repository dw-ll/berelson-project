import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Greeting from "react-lazy-hero";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import Toast from "react-bootstrap/Toast";
import Popup from "reactjs-popup";
import Container from "react-bootstrap/Container";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import Abram from "../../gallery/component/people/pre_abram.jsx";
import Chana from "../../gallery/component/people/pre_chana.jsx";
import David from "../../gallery/component/people/pre_david.jsx";
import Gita from "../../gallery/component/people/pre_gita.jsx";
import Henry from "../../gallery/component/people/pre_henry.jsx";
import Jolly from "../../gallery/component/people/pre_jolly.jsx";
import Leon from "../../gallery/component/people/pre_leon.jsx";
import Lodz from "../../gallery/component/people/pre_lodz.jsx";
import HenryGreet from "../../Media/Pre-WWII/Henry.Baigelman002.jpeg";

import "react-vertical-timeline-component/style.min.css";

//import {Print} from 'material-ui-icons/AccessAlarm';
const routes = [
  {
    component: Abram,
    path: "/pre/abram"
  },
  {
    component: Chana,
    path: "/pre/chana"
  },
  {
    component: David,
    path: "/pre/david"
  },
  {
    component: Gita,
    path: "/pre/gita"
  },
  {
    component: Henry,
    path: "/pre/henry"
  },
  {
    component: Jolly,
    path: "/pre/jolly_boys"
  },
  {
    component: Leon,
    path: "/pre/leon"
  },
  {
    component: Lodz,
    path: "/pre/lodz"
  }
];
const preTimelineObjects = [
  {
    title: "Abram Baigelman",
    subtitle: "More info about Abram.",
    style: "image-abram",
    image: require("../../Media/Pre-WWII/Abram.Baigelman026.jpeg"),
    path: "/pre/abram"
  },
  {
    title: "Chana Fodeman",
    subtitle: "More info about Chana.",
    style: "image-chana",
    image: require("../../Media/Pre-WWII/Chana.Fodeman025 2.jpeg"),
    path: "/pre/chana"
  },
  {
    title: "David Baigelman",
    subtitle: "More info about David.",
    style: "image-david",
    image: require("../../Media/Pre-WWII/David.Baigelman016 2.jpeg"),
    path: "/pre/david"
  },
  {
    title: "Gita Baigelman",
    subtitle: "More info about Gita.",
    style: "image-gita",
    image: require("../../Media/Pre-WWII/Gita.Baigelman137.jpeg"),
    path: "/pre/gita"
  },
  {
    title: "Henry Baigelman",
    subtitle: "More info about Henry.",
    style: "image-henry",
    image: require("../../Media/Pre-WWII/Henry.Baigelman002.jpeg"),
    path: "/pre/henry"
  },
  {
    title: "Jolly Boys",
    subtitle: "More info about the Jolly Boys.",
    style: "image-jolly",
    image: require("../../Media/Pre-WWII/Jolly.Bays008.jpeg"),
    path: "/pre/jolly_boys"
  },
  {
    title: "Leon Glazer",
    subtitle: "More info about Leon.",
    style: "image-leon",
    image: require("../../Media/Pre-WWII/Leon.Glazer143.jpeg"),
    path: "/pre/leon"
  },
  {
    title: "Lodz Theatre",
    subtitle: "More info about the Lodz Theatre.",
    style: "image-lodz",
    image: require("../../Media/Pre-WWII/Lodz.Theatre426.jpeg"),
    path: "/pre/lodz"
  }
];

class Line extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
    this.topRef = createRef(); // Create a ref object
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.state = {
      popped: false,
      showDetail: false
    };
  }
  handleMouseOver = (e, i) => {
    e.preventDefault();
    this.setState({
      showDetail: i
    });
  };
  handleMouseOut = (e, i) => {
    e.preventDefault();
    this.setState({
      showDetail: false
    });
  };

  componentDidMount() {
    this.topRef.current.scrollIntoView({
      behavior: "auto"
    });
  }
  handleScrollToElement(event) {
    window.scrollTo(0, this.topRef.current.offsetTop);
  }
  handlePop = (e, i) => {
    e.preventDefault();

    this.setState({
      popped: i,
      anchorEl: e.currentTarget
    });
  };
  handleRequestClose = () => {
    this.setState({
      popped: false
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              path={route.path}
              exact
              render={() => {
                return <route.component />;
              }}
            />
          ))}
          <div ref={this.topRef} className="back">
            <div id="landing">
              <Greeting
                minHeight="100vh"
                opacity="0.1%"
                isCentered={true}
                imageSrc={HenryGreet}
              >
                <h3 style={{ color: "white", fontFamily: "Future" }}>
                  Before The War
                </h3>
                <h5 style={{ color: "white", fontFamily: "Future" }}>
                  Some more info about the family before the war.
                </h5>
                <div>
                  <Grid item>
                    <ButtonGroup
                      color="yellow"
                      aria-label="Outlined primary button group"
                    >
                      <Button
                        onClick={() => {
                          this.scrollDiv.current.scrollIntoView({
                            behavior: "smooth"
                          });
                        }}
                        style={{ color: "white" }}
                      >
                        Visit Timeline
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </div>
              </Greeting>
            </div>
            <div ref={this.scrollDiv}>
              <div id="timeline-start" href="/timeline">
                <div className="era-starter-info">
                  <h4 style={{ textAlign: "center" }}>Pre World War 2</h4>
                  <h6 style={{ textAlign: "center" }}>
                    History and more information about the family prior to the
                    beginning of the second World War.
                  </h6>
                </div>
              </div>
              <ul className="eras">
                {preTimelineObjects.map((person, i) => (
                  <li className="era-span">
                    <Link to={person.path} className="span-link">
                      <a
                        class={person.style}
                        style={{ backgroundImage: 'url("' + person.image + '")' }}
                      >
                        &nbsp;
                      </a>
                    </Link>
                    <div className="l-container era-text-container">
                      <div className="page-section__row era-text-inner-container">
                        <div className="page-section__title-container era-text-break"></div>
                        <div className="page-section__content era-text">
                          <Link to={person.path} className="span-title-link">
                            <h3 className="era-text-link">{person.title}</h3>
                          </Link>
                          <p className="era-date">
                            <span>1900-1950</span>
                          </p>
                          <div className="rich-text-desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}

              
              </ul>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default Line;
