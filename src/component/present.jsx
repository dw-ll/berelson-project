import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Greeting from "react-lazy-hero";
import "react-vertical-timeline-component/style.min.css";
import Adolfo from "../profiles/component/people/present_adolfo.jsx";
import Carol from "../profiles/component/people/present_carol.jsx";
import Ed from "../profiles/component/people/present_ed.jsx";
import Fonia from "../profiles/component/people/present_fonia.jsx";
import Henry from "../profiles/component/people/present_henry.jsx";
import Jack from "../profiles/component/people/present_jack.jsx";
import Mordecai from "../profiles/component/people/present_mordecai.jsx";
import Pola from "../profiles/component/people/present_pola.jsx";
import Rachel from "../profiles/component/people/present_rachel.jsx";
import Riva from "../profiles/component/people/present_riva.jsx";
import Sevek from "../profiles/component/people/present_sevek.jsx";
import Starski from "../profiles/component/people/present_starski.jsx";
import GreetImage from "../Media/Modern/Sevek259.jpeg";

const routes = [
  { component: Adolfo, path: "/present/adolfo" },
  { component: Carol, path: "/present/carol" },
  { component: Ed, path: "/present/ed" },
  { component: Fonia, path: "/present/fonia" },
  { component: Henry, path: "/present/henry" },
  { component: Jack, path: "/present/jack" },
  { component: Mordecai, path: "/present/mordecai" },
  { component: Pola, path: "/present/pola" },
  { component: Rachel, path: "/present/rachel" },
  { component: Riva, path: "/present/riva" },
  { component: Sevek, path: "/present/sevek" },
  { component: Starski, path: "/present/starski" }
];
const presentTimelineObjects = [
  {
    title: "Adolfo Spzilman",
    subtitle: "More info about Adolfo.",
    style: "image-adolfo",
    image: require("../Media/Modern/Adolfo.Szpilman098.jpeg"),
    path: "/present/adolfo"
  },
  {
    title: "Carol",
    subtitle: "More info about Carol.",
    style: "image-carol",
    image: require("../Media/Modern/Carol344.jpeg"),
    path: "/present/carol"
  },
  {
    title: "Ed",
    subtitle: "More info about Ed.",
    style: "image-ed",
    image: require("../Media/Modern/Ed.Silver089.jpeg"),
    path: "/present/ed"
  },
  {
    title: "Fonia",
    subtitle: "More info about Fonia.",
    style: "image-fonia",
    image: require("../Media/Modern/Fonia239.jpeg"),
    path: "/present/fonia"
  },
  {
    title: "Henry Baigelman",
    subtitle: "More info about Henry.",
    style: "image-henry",
    image: require("../Media/Modern/Henry367.jpeg"),
    path: "/present/henry"
  },
  {
    title: "Jack Baigelman",
    subtitle: "More info about Jack.",
    style: "image-jack",
    image: require("../Media/Modern/Jack.Baigelman061.jpeg"),
    path: "/present/jack"
  },
  {
    title: "Mordecai",
    subtitle: "More info about Mordecai.",
    style: "image-mordecai",
    image: require("../Media/Modern/Mordecai186.jpeg"),
    path: "/present/mordecai"
  },
  {
    title: "Pola",
    subtitle: "More info about Pola.",
    style: "image-pola",
    image: require("../Media/Modern/pola179.jpeg"),
    path: "/present/pola"
  },
  {
    title: "Rachel",
    subtitle: "More info about Rachel.",
    style: "image-rachel",
    image: require("../Media/Modern/Rachel188.jpeg"),
    path: "/present/rachel"
  },
  {
    title: "Riva",
    subtitle: "More info about Riva.",
    style: "image-riva",
    image: require("../Media/Modern/Riva346.jpeg"),
    path: "/present/riva"
  },
  {
    title: "Sevek",
    subtitle: "More info about Sevek.",
    style: "image-sevek",
    image: require("../Media/Modern/Sevek267.jpeg"),
    path: "/present/sevek"
  },
  {
    title: "Starski",
    subtitle: "More info about Starski.",
    style: "image-starski",
    image: require("../Media/Modern/Starski083.jpeg"),
    path: "/present/starski"
  }
];

//import {Print} from 'material-ui-icons/AccessAlarm';
class Line extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
    this.myRef = createRef(); // Create a ref object
    this.state = {
      popped: false
    };
  }

  componentDidMount() {
    this.myRef.current.scrollIntoView({
      behavior: "auto"
    });
  }
  handleScrollToElement(event) {
    window.scrollTo(0, this.myRef.current.offsetTop);
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
      popped: null
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
          <div ref={this.myRef} className="back">
            <div id="landing">
              <Greeting
                minHeight="100vh"
                opacity="0.5"
                isCentered={true}
                imageSrc={GreetImage}
              >
                <h3 style={{ fontFamily: "Times", color: "white" }}>Present</h3>
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
                  <h4 style={{ textAlign: "center" }}>Present</h4>
                  <h6 style={{ textAlign: "center" }}>
                    History and more information about the family up until now.
                  </h6>
                </div>
              </div>
              <ul className="eras">
                {presentTimelineObjects.map((person, i) => (
                  <li className="era-span">
                    <Link to={person.path} className="span-link">
                      <a
                        class={person.style}
                        style={{
                          backgroundImage: 'url("' + person.image + '")'
                        }}
                        href="!#"
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
