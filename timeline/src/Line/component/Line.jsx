import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Switch } from "react-router";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Archive from "./archive.jsx";
import Present from "./present";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";
import About from "./about";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import Greeting from "react-lazy-hero";
import { Provider, Heading, Subhead } from "rebass";
import { Hero, CallToAction, ScrollDownIndicator } from "react-landing-page";
import FoniaGreet from "../../Media/Post-WWII 2/Fonia213.jpeg";

const routes = [
  {
    component: Pre,
    path: "/pre"
  },
  {
    component: WWII,
    path: "/ww2"
  },
  {
    component: Post,
    path: "/post"
  },
  {
    component: Present,
    path: "/present"
  },
  {
    component: About,
    path: "/about"
  },
  {
    component: Archive,
    path: "/archive"
  }
];

const timelineObjects = [
  {
    title: " Pre-World War II",
    subtitle: "Photos and information spanning the time before World War Two",
    image: require("../../Media/Pre-WWII/Lodz.Theatre426.jpeg"),
    path: "/pre"
  },
  {
    title: "World War II",
    subtitle: "Photos and information spanning the time during World War Two.",
    image: require("../../Media/WWII/HappyBoys4282.jpeg"),
    path: "/ww2"
  },
  {
    title: "Post-World War II",
    subtitle: "Photos and information spanning the time after World War Two.",
    image: require("../../Media/Post-WWII 2/pola178.jpeg"),
    path: "/post"
  },
  {
    title: "Present",
    subtitle: "Photos and information about recent days.",
    image: require("../../Media/Modern/Sevek261.jpeg"),
    path: "/present"
  }
];

export default class Line extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
    this.attachRef = target => this.setState({ target });
    this.state = {
      popped: false
    };
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
    const cards = timelineObjects.map((card, i) => (
      <React.Fragment key={i}>
        {i % 2 === 0 ? (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            key={i}
            iconStyle={{
              background: "rgb(40,49,72)",
              color: "#000"
            }}
            paddingTop="0em"

            //icon={<Print/>}
          >
            <div>
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    style={{ height: 0, paddingTop: "100%" }}
                    image={card.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography component="p">{card.subtitle}</Typography>
                  </CardContent>
                </CardActionArea>

                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={card.path}
                >
                  Learn More
                </Button>
                <Popover
                  open={this.state.popped === i}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    horizontal: "right",
                    vertical: "center "
                  }}
                  transformOrigin={{
                    horizontal: "right",
                    vertical: "bottom"
                  }}
                  onClose={this.handleRequestClose}
                >
                  Right popover text
                </Popover>
              </Card>
            </div>
          </VerticalTimelineElement>
        ) : (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            key={i}
            iconStyle={{
              background: "rgb(40,49,72)",
              color: "#000"
            }}
            paddingTop="0em"

            //icon={<Print/>}
          >
            <div>
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    style={{ height: 0, paddingTop: "100%" }}
                    image={card.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography component="p">{card.subtitle}</Typography>
                  </CardContent>
                </CardActionArea>

                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={card.path}
                >
                  Learn More
                </Button>
                <Popover
                  open={this.state.popped === i}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    horizontal: "left",
                    vertical: "center "
                  }}
                  transformOrigin={{
                    horizontal: "left",
                    vertical: "bottom"
                  }}
                  onClose={this.handleRequestClose}
                >
                  Left popover text
                </Popover>
              </Card>
            </div>
          </VerticalTimelineElement>
        )}
      </React.Fragment>
    ));

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

          <div className="back">
            <div id="landing">
              <div id="hero-greet">
                <Greeting
                  minHeight="100vh"
                  opacity="0.1"
                  isCentered={true}
                  imageSrc={FoniaGreet}
                >
                  <h3 style={{ color: "white", fontFamily: "Times" }}>
                    The Berelson Project
                  </h3>
                  <Button
                    variant="contained"
                    size="large"
                    color="light"
                    onClick={() => {
                      this.scrollDiv.current.scrollIntoView({
                        behavior: "smooth"
                      });
                    }}
                  >
                    Explore Timeline
                  </Button>
                </Greeting>
              </div>
            </div>
            <div ref={this.scrollDiv}>
              <div id="timeline-start" href="/timeline">
                <div>
                  <h4>Timeline</h4>
                  <h6>
                    Learn the Berelson lineage through this interactive
                    timeline that spans both sides of the second World War.
                  </h6>
                </div>
                <div>
                  <ButtonGroup
                    size="small"
                    aria-label="Small outlined button group"
                  >
                    <Button>Pre WW2</Button>
                    <Button>WW2</Button>
                    <Button>Post WW2</Button>
                    <Button>Present</Button>
                  </ButtonGroup>
                </div>
              </div>

              <VerticalTimeline style = {{color:"black"}}>
                <div>{cards}</div>
              </VerticalTimeline>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
render(<Line />, document.getElementById("root"));