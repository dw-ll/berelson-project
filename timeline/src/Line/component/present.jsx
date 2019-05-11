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
import "react-vertical-timeline-component/style.min.css";

import Adolfo from "../../gallery/component/people/present_adolfo.jsx";
import Carol from "../../gallery/component/people/present_carol.jsx";
import Ed from "../../gallery/component/people/present_ed.jsx";
import Fonia from "../../gallery/component/people/present_fonia.jsx";
import Henry from "../../gallery/component/people/present_henry.jsx";
import Jack from "../../gallery/component/people/present_jack.jsx";
import Mordecai from "../../gallery/component/people/present_mordecai.jsx";
import Pola from "../../gallery/component/people/present_pola.jsx";
import Rachel from "../../gallery/component/people/present_rachel.jsx";
import Riva from "../../gallery/component/people/present_riva.jsx";
import Sevek from "../../gallery/component/people/present_sevek.jsx";
import Starski from "../../gallery/component/people/present_starski.jsx";

import AdolfoProfile from "../../Media/Modern/Adolfo.Szpilman098.jpeg";
import CarolProfile from "../../Media/Modern/Carol344.jpeg";
import EdProfile from "../../Media/Modern/Ed.Silver089.jpeg";
import FoniaProfile from "../../Media/Modern/Fonia239.jpeg";
import HenryProfile from "../../Media/Modern/Henry367.jpeg";
import JackProfile from "../../Media/Modern/Jack.Baigelman061.jpeg";
import MordecaiProfile from "../../Media/Modern/Mordecai186.jpeg";
import PolaProfile from "../../Media/Modern/pola179.jpeg";
import RachelProfile from "../../Media/Modern/Rachel188.jpeg";
import RivaProfile from "../../Media/Modern/Riva346.jpeg";
import SevekProfile from "../../Media/Modern/Sevek267.jpeg";
import StarskiProfile from "../../Media/Modern/Starski083.jpeg";

//import {Print} from 'material-ui-icons/AccessAlarm';
class Line extends Component {
  state = {
    redirect: false
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
    }
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/present/adolfo"
            exact
            render={() => {
              return <Adolfo />;
            }}
          />
          <Route
            path="/present/carol"
            exact
            render={() => {
              return <Carol />;
            }}
          />
          <Route
            path="/present/ed"
            exact
            render={() => {
              return <Ed />;
            }}
          />
          <Route
            path="/present/fonia"
            exact
            render={() => {
              return <Fonia />;
            }}
          />
          <Route
            path="/present/henry"
            exact
            render={() => {
              return <Henry />;
            }}
          />
          <Route
            path="/present/jack"
            exact
            render={() => {
              return <Jack />;
            }}
          />
          <Route
            path="/present/mordecai"
            exact
            render={() => {
              return <Mordecai />;
            }}
          />
          <Route
            path="/present/pola"
            exact
            render={() => {
              return <Pola />;
            }}
          />
          <Route
            path="/present/rachel"
            exact
            render={() => {
              return <Rachel />;
            }}
          />
          <Route
            path="/present/riva"
            exact
            render={() => {
              return <Riva />;
            }}
          />
          <Route
            path="/present/sevek"
            exact
            render={() => {
              return <Sevek />;
            }}
          />
          <Route
            path="/present/starski"
            exact
            render={() => {
              return <Starski />;
            }}
          />
          <div>
            <div className="card card-default post-body">
              <div className="card-body main-nav">
                Information covering the Berelson family in recent years.
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
                      image={require("../../Media/Modern/Adolfo.Szpilman098.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Adolfo Spzilman
                      </Typography>
                      <Typography component="p">
                        More info about Adolfo.
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
                      to="/present/adolfo"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Modern/Carol344.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Carol
                      </Typography>
                      <Typography component="p">
                        More info about Carol.
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
                      to="/present/carol"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Modern/Ed.Silver089.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Ed
                      </Typography>
                      <Typography component="p">
                        More info about Ed.
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
                      to="/present/ed"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Modern/Fonia239.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Fonia
                      </Typography>
                      <Typography component="p">
                        More info about Fonia.
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
                      to="/present/fonia"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Modern/Henry367.jpeg")}
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
                      to="/present/henry"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Modern/Jack.Baigelman061.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Jack Baigelman
                      </Typography>
                      <Typography component="p">
                        More info about Jack.
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
                      to="/present/jack"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Modern/Mordecai186.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Mordecai
                      </Typography>
                      <Typography component="p">
                        More info about Mordecai.
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
                      to="/present/mordecai"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Modern/pola179.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Pola
                      </Typography>
                      <Typography component="p">
                        More info about Pola.
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
                      to="/present/pola"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Modern/Rachel188.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Rachel
                      </Typography>
                      <Typography component="p">
                        More info about Rachel.
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
                      to="/present/rachel"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Modern/Riva346.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Riva
                      </Typography>
                      <Typography component="p">
                        More info about Riva.
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
                      to="/present/riva"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Modern/Sevek267.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Sevek
                      </Typography>
                      <Typography component="p">
                        More info about Sevek.
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
                      to="/present/sevek"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 0, paddingTop: "90%" }}
                      image={require("../../Media/Modern/Starski083.jpeg")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Starski
                      </Typography>
                      <Typography component="p">
                        More info about Starski.
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
                      to="/present/starski"
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
