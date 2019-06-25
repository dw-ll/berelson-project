import React, { Component, createRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Switch } from "react-router";
import Scroller from "animated-scroll-to";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Present from "./present";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";
import About from "./about";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Greeting from "react-lazy-hero";
import FoniaGreet from "../../Media/Post-WWII 2/Fonia224.jpeg";
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
const useMountEffect = fun => useEffect(fun, []);

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



class Line extends Component {
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
              exact
              render={() => {
                return <route.component />;
              }}
            />
          ))}

          <div className="back">
            <div>
              <Greeting
                style={{
                  minHeight: "100vh",
                  opacity: "1",
                  isCentered: true,
                  color: "#000000",
                  parallaxOffset: "100"
                }}
                imageSrc={FoniaGreet}
              >
                <h3 style={{ textAlign: "left" }}>The Berelson Project</h3>
                <button
                  onClick={() => {
                    this.scrollDiv.current.scrollIntoView({
                      behavior: "smooth"
                      
                    });
                  }}
                >
                  Click
                </button>
              </Greeting>
            </div>
            <div ref={this.scrollDiv}>
              <div id="timeline-start" href="/timeline">
                <h4>Timeline</h4>
                <h6>
                  Learn the Berelson lineage through this interactive
                  timeline that spans both sides of the second World War.
                </h6>
              </div>
              <VerticalTimeline>
                {timelineObjects.map((card, i) => (
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
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {card.title}
                            </Typography>
                            <Typography component="p">
                              {card.subtitle}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            size="small"
                            color="primary"
                            component={Link}
                            to={card.path}
                          >
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default Line;
