import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import { Switch } from "react-router";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Present from "./present";
import Pre from './pre';
import Post from './post';
import WWII from './ww2';
import About from './about';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
 class ScrollToTop extends Component {
   componentDidUpdate(prevProps) {
     if (this.props.location !== prevProps.location) {
       window.scrollTo(0, 0);
     }
   }

   render() {
     return this.props.children;
   }
 }

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
  
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange() {
    let path = `newPath`;
    this.props.history.push(path);
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route
              path="/pre"
              exact
              render={() => {
                return <Pre />;
              }}
            />
            <Route
              path="/ww2"
              exact
              render={() => {
                return <WWII />;
              }}
            />

            <Route
              path="/post"
              exact
              render={() => {
                return <Post />;
              }}
            />
            <Route
              path="/present"
              exact
              render={() => {
                return <Present />;
              }}
            />
            <Route
              path="/about"
              exact
              render={() => {
                return <About />;
              }}
            />

            <div className="back">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: "rgb(40,49,72)", color: "#000" }}
                  paddingTop="0em"

                  //icon={<Print/>}
                >
                  <div>
                    <Card className="card">
                      <CardActionArea>
                        <CardMedia
                          style={{ height: 0, paddingTop: "50%" }}
                          image={require("../../Media/Pre-WWII/Lodz.Theatre426.jpeg")}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            Pre-World War II
                          </Typography>
                          <Typography component="p">
                            Photos and information spanning the time before
                            World War II.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          component={Link}
                          to="/pre"
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{
                    background: "rgb(145,53,53)",
                    color: "#fff"
                  }}
                >
                  <Card className="card">
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 0, paddingTop: "50%" }}
                        image={require("../../Media/WWII/HappyBoys4282.jpeg")}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          World War II
                        </Typography>
                        <Typography component="p">
                          Photos and information spanning the time during
                          World War II.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        component={Link}
                        to="/ww2"
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
                        style={{ height: 0, paddingTop: "50%" }}
                        image={require("../../Media/Post-WWII 2/pola178.jpeg")}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          Post-World War II
                        </Typography>
                        <Typography component="p">
                          Photos and information spanning the time after
                          World War II.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        component={Link}
                        to="/post"
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
                        image={require("../../Media/Modern/Sevek261.jpeg")}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          Present
                        </Typography>
                        <Typography component="p">
                          Photos and information about recent days.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        component={Link}
                        to="/present"
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
export default Line;