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
            path="/post/ed"
            exact
            render={() => {
              return <Ed />;
            }}
          />
          <Route
            path="/post/fonia"
            exact
            render={() => {
              return <Fonia />;
            }}
          />
          <Route
            path="/post/gita"
            exact
            render={() => {
              return <Gita />;
            }}
          />
          <Route
            path="/post/henry"
            exact
            render={() => {
              return <Henry />;
            }}
          />
          <Route
            path="/post/jack"
            exact
            render={() => {
              return <Jack />;
            }}
          />
          <Route
            path="/post/justina"
            exact
            render={() => {
              return <Justina />;
            }}
          />
          <Route
            path="/post/katie"
            exact
            render={() => {
              return <Katie />;
            }}
          />
          <Route
            path="/post/levin"
            exact
            render={() => {
              return <Levin />;
            }}
          />
          <Route
            path="/post/pinek"
            exact
            render={() => {
              return <Pinek />;
            }}
          />
          <Route
            path="/post/pola"
            exact
            render={() => {
              return <Pola />;
            }}
          />
          <Route
            path="/post/rachella"
            exact
            render={() => {
              return <Rachella />;
            }}
          />
          <Route
            path="/post/riva"
            exact
            render={() => {
              return <Riva />;
            }}
          />
          <Route
            path="/post/sam"
            exact
            render={() => {
              return <Sam />;
            }}
          />
          <Route
            path="/post/sandy"
            exact
            render={() => {
              return <Sandy />;
            }}
          />
          <div>
            <div className="card card-default post-body">
              <div className="card-body main-nav">
                Information covering the time following World War II.
              </div>
            </div>
            <VerticalTimeline>
              {postTimelineObjects.map((card, i) => (
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
