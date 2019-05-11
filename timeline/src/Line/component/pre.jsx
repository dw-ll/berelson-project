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
  CardBody,
  CardGroup,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  NavLink
} from "reactstrap";
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
import Abram26 from "../../Media/Pre-WWII/Abram.Baigelman026.jpeg";
import ChanaProfile from "../../Media/Pre-WWII/Chana.Fodeman025 2.jpeg";
import DavidProfile from "../../Media/Pre-WWII/David.Baigelman016 2.jpeg";
import GitaProfile from "../../Media/Pre-WWII/Gita.Baigelman137.jpeg";
import HenryProfile from "../../Media/Pre-WWII/Henry.Baigelman002.jpeg"
import JollyProfile from "../../Media/Pre-WWII/Jolly.Bays008.jpeg";
import LeonProfile from "../../Media/Pre-WWII/Leon.Glazer143.jpeg";
import LodzProfile from "../../Media/Pre-WWII/Lodz.Theatre426.jpeg";
//import {Print} from 'material-ui-icons/AccessAlarm';

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
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Pre-WWII/Abram.Baigelman026.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Abram Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about Abram.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/pre/abram"
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
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Pre-WWII/Chana.Fodeman025 2.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Chana Fodeman
                      </Typography>
                      <Typography component="p">
                        More info about Chana.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/pre/chana"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: "rgb(187,187,187)",
                  color: "#fff"
                }}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Pre-WWII/David.Baigelman016 2.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        David Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about David.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/pre/david"
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
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Pre-WWII/Gita.Baigelman137.jpeg")}
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
                      size="small"
                      color="primary"
                      component={Link}
                      to="/pre/gita"
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
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Pre-WWII/Henry.Baigelman002.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Henry Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about Henry.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/pre/henry"
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
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Pre-WWII/Jolly.Bays008.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Jolly Boys
                      </Typography>
                      <Typography component="p">
                        More info about the Jolly Boys.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/pre/jolly_boys"
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
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Pre-WWII/Leon.Glazer143.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Leon Glazer
                      </Typography>
                      <Typography component="p">
                        More info about Leon.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/pre/leon"
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
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Pre-WWII/Lodz.Theatre426.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lodz Theatre
                      </Typography>
                      <Typography component="p">
                        More info about the Lodz Theatre.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      size="small"
                      color="primary"
                      component={Link}
                      to="/pre/lodz"
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
