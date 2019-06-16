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

//import {Print} from 'material-ui-icons/AccessAlarm';

class Line extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/ww2/gita"
            exact
            render={() => {
              return <Gita />;
            }}
          />
          <Route
            path="/ww2/happy_boys"
            exact
            render={() => {
              return <Happy />;
            }}
          />
          <Route
            path="/ww2/henry"
            exact
            render={() => {
              return <Henry />;
            }}
          />
          <Route
            path="/ww2/rachella"
            exact
            render={() => {
              return <Rachella />;
            }}
          />

          <div className="back">
            <div className="card card-default post-body">
              <div className="card-body main-nav">
                Images and information during World War II.
              </div>
            </div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "50%" }}
                      image={require("../../Media/WWII/gita.Baigelman144.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Gita Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about Gita.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to="/ww2/gita"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(145,53,53)", color: "#fff" }}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "50%" }}
                      image={require("../../Media/WWII/HappyBoys4282.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Happy Boys
                      </Typography>
                      <Typography component="p">
                        More info about the Happy Boys.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to="/ww2/happy_boys"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1960-1970"
                iconStyle={{
                  background: "rgb(187,187,187)",
                  color: "#fff"
                }}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "50%" }}
                      image={require("../../Media/WWII/Henry.Baigelman118.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Henry Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about Henry
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to="/ww2/happy_boys"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: "rgb(233,238,201)",
                  color: "#fff"
                }}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "50%" }}
                      image={require("../../Media/WWII/Rachella148.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Rachella
                      </Typography>
                      <Typography component="p">
                        More info about Rachella.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to="/ww2/rachella"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default Line;
