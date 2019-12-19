import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Greeting from "react-lazy-hero";
import "react-vertical-timeline-component/style.min.css";
import Ed from "../profiles/component/people/post_ed.jsx";
import Fonia from "../profiles/component/people/post_fonia.jsx";
import Gita from "../profiles/component/people/post_gita.jsx";
import Henry from "../profiles/component/people/post.henry.jsx";
import Jack from "../profiles/component/people/post_jack.jsx";
import Justina from "../profiles/component/people/post_justina.jsx";
import Katie from "../profiles/component/people/post_katie.jsx";
import Levin from "../profiles/component/people/post_levin.jsx";
import Pinek from "../profiles/component/people/post_pinek.jsx";
import Pola from "../profiles/component/people/post_pola.jsx";
import Rachella from "../profiles/component/people/post_rachella.jsx";
import Riva from "../profiles/component/people/post_riva.jsx";
import Sam from "../profiles/component/people/post_sam.jsx";
import Sandy from "../profiles/component/people/post_sandy.jsx";
import GreetImage from "../Media/Post-WWII 2/rachella156.jpeg";

const routes = [
  { component: Ed, path: "/post/ed" },
  { component: Fonia, path: "/post/fonia" },
  { component: Gita, path: "/post/gita" },
  { component: Henry, path: "/post/henry" },
  { component: Jack, path: "/post/jack" },
  { component: Justina, path: "/post/justina" },
  { component: Katie, path: "/post/katie" },
  { component: Levin, path: "/post/levin" },
  { component: Pinek, path: "/post/pinek" },
  { component: Pola, path: "/post/pola" },
  { component: Rachella, path: "/post/rachella" },
  { component: Riva, path: "/post/riva" },
  { component: Sam, path: "/post/sam" },
  { component: Sandy, path: "/post/sandy" }
];
const postTimelineObjects = [
  {
    title: "Ed",
    subtitle: "More info about Ed.",
    style: "image-ed",
    image: require("../Media/Post-WWII 2/Ed.Silver091.jpeg"),
    path: "/post/ed"
  },
  {
    title: "Fonia",
    subtitle: "More info about Fonia.",
    style: "image-fonia",
    image: require("../Media/Post-WWII 2/Fonia220.jpeg"),
    path: "/post/fonia"
  },
  {
    title: "Gita Baigelman",
    subtitle: "More info about Gita.",
    style: "image-gita",
    image: require("../Media/Post-WWII 2/Gita.Baigelman120.jpeg"),
    path: "/post/gita"
  },
  {
    title: "Henry Baigelman",
    subtitle: "More info about Henry.",
    style: "image-henry",
    image: require("../Media/Post-WWII 2/Henry.Baigelman119.jpeg"),
    path: "/post/henry"
  },
  {
    title: "Jack Baigelman",
    subtitle: "More info about Jack.",
    style: "image-jack",
    image: require("../Media/Post-WWII 2/Jack.Baigelman057.jpeg"),
    path: "/post/jack"
  },
  {
    title: "Justina",
    subtitle: "More info about Justina.",
    style: "image-justina",
    image: require("../Media/Post-WWII 2/justina197.jpeg"),
    path: "/post/justina"
  },
  {
    title: "Katie",
    subtitle: "More info about Katie.",
    style: "image-katie",
    image: require("../Media/Post-WWII 2/katie159.jpeg"),
    path: "/post/katie"
  },
  {
    title: "Levin Baigelman",
    subtitle: "More info about Levin.",
    style: "image-levin",
    image: require("../Media/Post-WWII 2/Levin.Baigelman079.jpeg"),
    path: "/post/levin"
  },
  {
    title: "Pinek Baigelman",
    subtitle: "More info about Pinek.",
    style: "image-pinek",
    image: require("../Media/Post-WWII 2/Pinek.Baigelman041.jpeg"),
    path: "/post/pinek"
  },
  {
    title: "Pola",
    subtitle: "More info about Pola.",
    style: "image-pola",
    image: require("../Media/Post-WWII 2/pola178.jpeg"),
    path: "/post/pola"
  },
  {
    title: "Rachella",
    subtitle: "More info about Rachella.",
    style: "image-rachella",
    image: require("../Media/Post-WWII 2/Rachella150.jpeg"),
    path: "/post/rachella"
  },
  {
    title: "Riva",
    subtitle: "More info about Riva.",
    style: "image-riva",
    image: require("../Media/Post-WWII 2/Riva287.jpeg"),
    path: "/post/riva"
  },
  {
    title: "Samuel Spielman",
    subtitle: "More info about Samuel.",
    style: "image-samuel",
    image: require("../Media/Post-WWII 2/Samuel181.jpeg"),
    path: "/post/sam"
  },
  {
    title: "Sandy Baigelman",
    subtitle: "More info about Sandy.",
    style: "image-sandy",
    image: require("../Media/Post-WWII 2/Sandy.Baigelman056.jpeg"),
    path: "/post/sandy"
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
                opacity="0.1"
                isCentered={true}
                imageSrc={GreetImage}
                className="greeting"
              >
                <div class="hero-message" align="center">
                  <h3 style={{ color: "white", fontFamily: "Times" }}>
                    After The War
                  </h3>
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
              <div id="timeline-start" href="/timeline">
                <div className="era-starter-info">
                  <h4 style={{ textAlign: "center" }}>Post World War 2</h4>
                  <h6 style={{ textAlign: "center" }}>
                    History and more information about the family after the
                    second World War.
                  </h6>
                </div>
              </div>
              <ul className="eras">
                {postTimelineObjects.map((person, i) => (
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
