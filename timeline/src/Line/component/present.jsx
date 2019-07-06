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
import Popover from "@material-ui/core/Popover";


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
import GreetImage from "../../Media/Modern/Sevek259.jpeg";

const routes = [
  { component: Adolfo, path: "/present/adolfo" },
  { component: Carol, path: "/present/carol" },
  { component: Ed, path: "/present/ed" },
  { component: Fonia, path: "/present/fonia" },
  { component: Henry, path: "/present/henry" },
  { component: Jack, path: "/present/jack" },
  { component: Mordecai, path: "/present/mordecai" },
  { component: Pola, path: "/present/pola" },
  { component: Rachel, path: "/present/rachel" },
  { component: Riva, path: "/present/riva" },
  { component: Sevek, path: "/present/sevek" },
  { component: Starski, path: "/present/starski" }
];
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
    const cards = presentTimelineObjects.map((card, i) => (
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
                  //to={card.path}
                  onClick={e => {
                    this.handlePop(e, i);
                  }}
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
                  //to={card.path}
                  onClick={e => {
                    this.handlePop(e, i);
                  }}
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
                imageSrc={GreetImage}
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
                <div>{cards}</div>
              </VerticalTimeline>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default Line;
