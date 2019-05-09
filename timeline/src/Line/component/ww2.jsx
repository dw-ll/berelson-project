import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import {
  Button,
  Card,
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

import Gita from "../../gallery/component/people/ww2_gita.jsx";
import Henry from "../../gallery/component/people/ww2_henry.jsx";
import Happy from "../../gallery/component/people/ww2_happy.jsx";
import Rachella from "../../gallery/component/people/ww2_rachella.jsx";


import "react-vertical-timeline-component/style.min.css";

import GitaProfile from "../../Media/WWII/gita.Baigelman144.jpeg";
import HenryProfile from "../../Media/WWII/Henry.Baigelman118.jpeg";
import HappyProfile from "../../Media/WWII/HappyBoys4282.jpeg";
import RachellaProfile from "../../Media/WWII/Rachella148.jpeg";

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
                date="Abram Baigelman was lorem ipsum."
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img  src={GitaProfile} alt="" />
                <h3 className="vertical-timeline-element-title">
                  Gita Baigelman
                </h3>

                <div>
                  <Link to="/ww2/gita">View</Link>
                </div>
                <p />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(145,53,53)", color: "#fff" }}
              >
                <img
                  
                  src={HappyProfile}
                  alt=""
                  height="350"
                />
                <h3 className="vertical-timeline-element-title">
                  Happy Boys
                </h3>
                <div>
                  <Link to="/ww2/happy_boys">View</Link>
                </div>

                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1960-1970"
                iconStyle={{
                  background: "rgb(187,187,187)",
                  color: "#fff"
                }}
              >
                <img src={HenryProfile} alt="" height="350" />
                <h3 className="vertical-timeline-element-title">
                  Henry Baigelman
                </h3>
                <div>
                  <Link to="/ww2/henry">View</Link>
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
                <img src={RachellaProfile} alt="" height="350" />
                <h3 className="vertical-timeline-element-title">
                  Rachella
                </h3>
                <div>
                  <Link to="/ww2/rachella">View</Link>
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
