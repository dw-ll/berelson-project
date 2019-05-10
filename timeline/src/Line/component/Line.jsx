import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import { Switch } from "react-router";
import {  CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink, Navbar, NavbarBrand, NavItem, Nav, NavDropdown } from 'reactstrap';
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

import SvgIcon from "@material-ui/core/SvgIcon";
import Home from '@material-ui/icons/Home.js';
import Lodz from '../../Media/Pre-WWII/Lodz.Theatre426.jpeg'
import HappyBoys from '../../Media/WWII/HappyBoys4282.jpeg'
import Pola from '../../Media/Post-WWII 2/pola178.jpeg'
import Sevek from '../../Media/Modern/Sevek261.jpeg'
//import {Print} from 'material-ui-icons/AccessAlarm';
 const styles = {
   card: {
     maxWidth: 345
   },
   media: {
     height: 250
   }
 };

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
                    style = {{ height: 0, paddingTop: '50%'}}
                    image= {require ("../../Media/Pre-WWII/Lodz.Theatre426.jpeg")}
                  
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
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
                iconStyle={{ background: "rgb(145,53,53)", color: "#fff" }}
              >
                <img src={HappyBoys} height="250" width="350" />
                <h3 className="vertical-timeline-element-title">
                  World War II
                </h3>
                <div>
                  <Link to="/ww2">Learn More</Link>
                </div>

                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: "rgb(187,187,187)",
                  color: "#fff"
                }}
              >
                <img src={Pola} height="250" width="350" />
                <h3 className="vertical-timeline-element-title">
                  Post World War II
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post">Learn More</Link>
                </div>

                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: "rgb(233,238,201)",
                  color: "#fff"
                }}
              >
                <img src={Sevek} height="250" width="350" />
                <h3 className="vertical-timeline-element-title">Present</h3>
                <div>
                  <Link to="/present">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default Line;