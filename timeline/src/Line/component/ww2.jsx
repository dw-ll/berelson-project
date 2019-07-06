import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Greeting from "react-lazy-hero";
import Popover from "@material-ui/core/Popover";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import Gita from "../../gallery/component/people/ww2_gita.jsx";
import Henry from "../../gallery/component/people/ww2_henry.jsx";
import Happy from "../../gallery/component/people/ww2_happy.jsx";
import Rachella from "../../gallery/component/people/ww2_rachella.jsx";
import GreetImage from "../../Media/WWII/HappyBoys4282.jpeg";

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
    const cards = ww2TimelineObjects.map((card, i) => (
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
                  //onClick={e => {
                  // this.handlePop(e, i);
                  // }}
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
                  //onClick={e => {
                  //  this.handlePop(e, i);
                  //}}
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
                minHeight="100vh"
                opacity="0.4%"
                isCentered={true}
                imageSrc={GreetImage}
              >
                <h3 style={{ color: "white" }}>World War II</h3>
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

            <div ref={this.scrollDiv}>
              <div id="timeline-start" href="/timeline">
                <div>
                  <h4 style={{ textAlign: "center" }}>World War 2</h4>
                  <h6 style={{ textAlign: "center" }}>
                    History and more information about the family during the
                    second World War.
                  </h6>
                </div>
              </div>
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
