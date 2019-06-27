import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Greeting from "react-lazy-hero";
import Typography from "@material-ui/core/Typography";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import Abram from "../../../gallery/component/people/pre_abram.jsx";
import Chana from "../../../gallery/component/people/pre_chana.jsx";
import David from "../../../gallery/component/people/pre_david.jsx";
import Gita from "../../../gallery/component/people/pre_gita.jsx";
import Henry from "../../../gallery/component/people/pre_henry.jsx";
import Jolly from "../../../gallery/component/people/pre_jolly.jsx";
import Leon from "../../../gallery/component/people/pre_leon.jsx";
import Lodz from "../../../gallery/component/people/pre_lodz.jsx";
import ChanaGreet from "../../Media/Pre-WWII/Chana.Fodeman025.jpeg";

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
    image: require("../../Media/Pre-WWII/Abram.Baigelman026.jpeg"),
    path: "/pre/abram"
  },
  {
    title: "Chana Fodeman",
    subtitle: "More info about Chana.",
    image: require("../../Media/Pre-WWII/Chana.Fodeman025 2.jpeg"),
    path: "/pre/chana"
  },
  {
    title: "David Baigelman",
    subtitle: "More info about David.",
    image: require("../../Media/Pre-WWII/David.Baigelman016 2.jpeg"),
    path: "/pre/david"
  },
  {
    title: "Gita Baigelman",
    subtitle: "More info about Gita.",
    image: require("../../Media/Pre-WWII/Gita.Baigelman137.jpeg"),
    path: "/pre/gita"
  },
  {
    title: "Henry Baigelman",
    subtitle: "More info about Henry.",
    image: require("../../Media/Pre-WWII/Henry.Baigelman002.jpeg"),
    path: "/pre/henry"
  },
  {
    title: "Jolly Boys",
    subtitle: "More info about the Jolly Boys.",
    image: require("../../Media/Pre-WWII/Jolly.Bays008.jpeg"),
    path: "/pre/jolly_boys"
  },
  {
    title: "Leon Glazer",
    subtitle: "More info about Leon.",
    image: require("../../Media/Pre-WWII/Leon.Glazer143.jpeg"),
    path: "/pre/leon"
  },
  {
    title: "Lodz Theatre",
    subtitle: "More info about the Lodz Theatre.",
    image: require("../../Media/Pre-WWII/Lodz.Theatre426.jpeg"),
    path: "/pre/lodz"
  }
];

class Line extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
    this.myRef = React.createRef(); // Create a ref object
  }

  componentDidMount() {
    this.myRef.current.scrollTo(0, 0);
  }
  handleScrollToElement(event) {
    window.scrollTo(0, this.myRef.current.offsetTop);
  }

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
                style={{
                  minHeight: "100vh",
                  opacity: "100%",
                  isCentered: true,
                  color: "#000000",
                  parallaxOffset: "100"
                }}
                imageSrc={ChanaGreet}
              >
                <h3>The Berelson Project</h3>
                <Button
                  variant="outlined"
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
            <div ref={this.scrollDiv}>
              <div id="timeline-start" href="/timeline" />
              <VerticalTimeline>
                {preTimelineObjects.map((card, i) => (
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
