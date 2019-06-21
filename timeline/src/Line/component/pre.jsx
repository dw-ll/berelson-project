import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
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

import "react-vertical-timeline-component/style.min.css";
//import {Print} from 'material-ui-icons/AccessAlarm';
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
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/pre/abram"
            exact
            render={() => {
              return <Abram />;
            }}
          />
          <Route
            path="/pre/chana"
            exact
            render={() => {
              return <Chana />;
            }}
          />
          <Route
            path="/pre/david"
            exact
            render={() => {
              return <David />;
            }}
          />
          <Route
            path="/pre/gita"
            exact
            render={() => {
              return <Gita />;
            }}
          />
          <Route
            path="/pre/henry"
            exact
            render={() => {
              return <Henry />;
            }}
          />
          <Route
            path="/pre/jolly_boys"
            exact
            render={() => {
              return <Jolly />;
            }}
          />
          <Route
            path="/pre/leon"
            exact
            render={() => {
              return <Leon />;
            }}
          />
          <Route
            path="/pre/lodz"
            exact
            render={() => {
              return <Lodz />;
            }}
          />
          <div className="back">
            <div className="card card-default post-body">
              <div className="card-body main-nav">
                Images and information from before World War II.
              </div>
            </div>
            <VerticalTimeline>
              {preTimelineObjects.map((card, i) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  key={i}
                  iconStyle={{ background: "rgb(40,49,72)", color: "#000" }}
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
        </Switch>
      </Router>
    );
  }
}
export default Line;
