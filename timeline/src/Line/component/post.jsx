import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Greeting from "react-lazy-hero";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Ed from "../../gallery/component/people/post_ed.jsx";
import Fonia from "../../gallery/component/people/post_fonia.jsx";
import Gita from "../../gallery/component/people/post_gita.jsx";
import Henry from "../../gallery/component/people/post.henry.jsx";
import Jack from "../../gallery/component/people/post_jack.jsx";
import Justina from "../../gallery/component/people/post_justina.jsx";
import Katie from "../../gallery/component/people/post_katie.jsx";
import Levin from "../../gallery/component/people/post_levin.jsx";
import Pinek from "../../gallery/component/people/post_pinek.jsx";
import Pola from "../../gallery/component/people/post_pola.jsx";
import Rachella from "../../gallery/component/people/post_rachella.jsx";
import Riva from "../../gallery/component/people/post_riva.jsx";
import Sam from "../../gallery/component/people/post_sam.jsx";
import Sandy from "../../gallery/component/people/post_sandy.jsx";
import GreetImage from "../../Media/Post-WWII 2/rachella156.jpeg";

const routes = [
  { component: Ed, path: "/post/ed" },
  { component: Fonia, path: "/post/fonia" },
  { component: Gita, path: "/post/gita" },
  { component: Henry, path: "/post/henry" },
  { component: Jack, path: "/post/jack" },
  { component: Justina, path: "/post/justina" },
  { component: Katie, path: "/post/katie" },
  { component: Levin, path: "/post/levin" },
  { component: Pinek, path: "/post/pinek" },
  { component: Pola, path: "/post/pola" },
  { component: Rachella, path: "/post/rachella" },
  { component: Riva, path: "/post/riva" },
  { component: Sam, path: "/post/sam" },
  { component: Sandy, path: "/post/sandy" }
];
const postTimelineObjects = [
  {
    title: "Ed",
    subtitle: "More info about Ed.",
    image: require("../../Media/Post-WWII 2/Ed.Silver091.jpeg"),
    path: "/post/ed"
  },
  {
    title: "Fonia",
    subtitle: "More info about Fonia.",
    image: require("../../Media/Post-WWII 2/Fonia220.jpeg"),
    path: "/post/fonia"
  },
  {
    title: "Gita Baigelman",
    subtitle: "More info about Gita.",
    image: require("../../Media/Post-WWII 2/Gita.Baigelman120.jpeg"),
    path: "/post/gita"
  },
  {
    title: "Henry Baigelman",
    subtitle: "More info about Henry.",
    image: require("../../Media/Post-WWII 2/Henry.Baigelman119.jpeg"),
    path: "/post/henry"
  },
  {
    title: "Jack Baigelman",
    subtitle: "More info about Jack.",
    image: require("../../Media/Post-WWII 2/Jack.Baigelman057.jpeg"),
    path: "/post/jack"
  },
  {
    title: "Justina",
    subtitle: "More info about Justina.",
    image: require("../../Media/Post-WWII 2/justina197.jpeg"),
    path: "/post/justina"
  },
  {
    title: "Katie",
    subtitle: "More info about Katie.",
    image: require("../../Media/Post-WWII 2/katie159.jpeg"),
    path: "/post/katie"
  },
  {
    title: "Levin Baigelman",
    subtitle: "More info about Levin.",
    image: require("../../Media/Post-WWII 2/Levin.Baigelman079.jpeg"),
    path: "/post/levin"
  },
  {
    title: "Pinek Baigelman",
    subtitle: "More info about Pinek.",
    image: require("../../Media/Post-WWII 2/Pinek.Baigelman041.jpeg"),
    path: "/post/pinek"
  },
  {
    title: "Pola",
    subtitle: "More info about Pola.",
    image: require("../../Media/Post-WWII 2/pola178.jpeg"),
    path: "/post/pola"
  },
  {
    title: "Rachella",
    subtitle: "More info about Rachella.",
    image: require("../../Media/Post-WWII 2/Rachella150.jpeg"),
    path: "/post/rachella"
  },
  {
    title: "Riva",
    subtitle: "More info about Riva.",
    image: require("../../Media/Post-WWII 2/Riva287.jpeg"),
    path: "/post/riva"
  },
  {
    title: "Samuel Spielman",
    subtitle: "More info about Samuel.",
    image: require("../../Media/Post-WWII 2/Samuel181.jpeg"),
    path: "/post/sam"
  },
  {
    title: "Sandy Baigelman",
    subtitle: "More info about Sandy.",
    image: require("../../Media/Post-WWII 2/Sandy.Baigelman056.jpeg"),
    path: "/post/sandy"
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
    const cards = postTimelineObjects.map((card, i) => (
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
                  // onClick={e => {
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
                  //this.handlePop(e, i);
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
                opacity="0.1"
                isCentered={true}
                imageSrc={GreetImage}
              >
                <div class="hero-message" align="center">
                  <h3 style={{ color: "white", fontFamily: "Times" }}>
                    After The War
                  </h3>
                  <div>
                    <Grid item>
                      <ButtonGroup
                        color="yellow"
                        aria-label="Outlined primary button group"
                      >

                        <Button
                          onClick={() => {
                            this.scrollDiv.current.scrollIntoView({
                              behavior: "smooth"
                            });
                          }}
                          style={{ color: "white" }}
                        >
                          Visit Timeline
                        </Button>

                      </ButtonGroup>
                    </Grid>
                  </div>
                </div>
              </Greeting>
            </div>
            <div ref={this.scrollDiv}>
              <div id="timeline-start" href="/timeline">
                <div>
                  <h4 style={{ textAlign: "center" }}>Post World War 2</h4>
                  <h6 style={{ textAlign: "center" }}>
                    History and more information about the family after the second World War.
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
