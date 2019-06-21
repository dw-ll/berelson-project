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

import Gita from "../../gallery/component/people/ww2_gita.jsx";
import Henry from "../../gallery/component/people/ww2_henry.jsx";
import Happy from "../../gallery/component/people/ww2_happy.jsx";
import Rachella from "../../gallery/component/people/ww2_rachella.jsx";

import "react-vertical-timeline-component/style.min.css";
const routes = [
  {
    component: Gita,
    path: "/ww2/gita"
  },
  {
    component: Happy,
    path: "/ww2/happy_boys"
  },
  {
    component: Henry,
    path: "/ww2/henry"
  },
  {
    component: Rachella,
    path: "/ww2/rachella"
  }
];
const ww2TimelineObjects = [
  {
    title: "Gita Baigelman",
    subtitle: "More info about Gita.",
    image: require("../../Media/WWII/gita.Baigelman144.jpeg"),
    path: "/ww2/gita"
  },
  {
    title: "Happy Boys",
    subtitle: "More info about the Happy Boys.",
    image: require("../../Media/WWII/HappyBoys4282.jpeg"),
    path: "/ww2/happy_boys"
  },
  {
    title: "Henry Baigelman",
    subtitle: "More info about Henry.",
    image: require("../../Media/WWII/Henry.Baigelman118.jpeg"),
    path: "/ww2/henry"
  },
  {
    title: "Rachella",
    subtitle: "More info about Rachella.",
    image: require("../../Media/WWII/Rachella148.jpeg"),
    path: "/ww2/rachella"
  }
];

//import {Print} from 'material-ui-icons/AccessAlarm';

class Line extends Component {
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

          <div className="back">
            <div className="card card-default post-body">
              <div className="card-body main-nav">
                Images and information during World War II.
              </div>
            </div>
            <VerticalTimeline>
              {ww2TimelineObjects.map((card, i) => (
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
                          style={{ height: 0, paddingTop: "50%" }}
                          image={card.image}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {card.title}
                          </Typography>
                          <Typography component="p">{card.subtitle}</Typography>
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
