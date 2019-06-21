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
const presentTimelineObjects = [
  {
    title: "Adolfo Spzilman",
    subtitle: "More info about Adolfo.",
    image: require("../../Media/Modern/Adolfo.Szpilman098.jpeg"),
    path: "/present/adolfo"
  },
  {
    title: "Carol",
    subtitle: "More info about Carol.",
    image: require("../../Media/Modern/Carol344.jpeg"),
    path: "/present/carol"
  },
  {
    title: "Ed",
    subtitle: "More info about Ed.",
    image: require("../../Media/Modern/Ed.Silver089.jpeg"),
    path: "/present/ed"
  },
  {
    title: "Fonia",
    subtitle: "More info about Fonia.",
    image: require("../../Media/Modern/Fonia239.jpeg"),
    path: "/present/fonia"
  },
  {
    title: "Henry Baigelman",
    subtitle: "More info about Henry.",
    image: require("../../Media/Modern/Henry367.jpeg"),
    path: "/present/henry"
  },
  {
    title: "Jack Baigelman",
    subtitle: "More info about Jack.",
    image: require("../../Media/Modern/Jack.Baigelman061.jpeg"),
    path: "/present/jack"
  },
  {
    title: "Mordecai",
    subtitle: "More info about Mordecai.",
    image: require("../../Media/Modern/Mordecai186.jpeg"),
    path: "/present/mordecai"
  },
  {
    title: "Pola",
    subtitle: "More info about Pola.",
    image: require("../../Media/Modern/pola179.jpeg"),
    path: "/present/pola"
  },
  {
    title: "Rachel",
    subtitle: "More info about Rachel.",
    image: require("../../Media/Modern/Rachel188.jpeg"),
    path: "/present/rachel"
  },
  {
    title: "Riva",
    subtitle: "More info about Riva.",
    image: require("../../Media/Modern/Riva346.jpeg"),
    path: "/present/riva"
  },
  {
    title: "Sevek",
    subtitle: "More info about Sevek.",
    image: require("../../Media/Modern/Sevek267.jpeg"),
    path: "/present/sevek"
  },
  {
    title: "Starski",
    subtitle: "More info about Starski.",
    image: require("../../Media/Modern/Starski083.jpeg"),
    path: "/present/starski"
  }
];

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
              {presentTimelineObjects.map((card, i) => (
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
