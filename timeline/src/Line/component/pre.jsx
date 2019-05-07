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
                date="Abram Baigelman was lorem ipsum."
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img classname="profile" src={Abram26} alt="" />
                <h3 className="vertical-timeline-element-title">
                  Abram Baigelman
                </h3>

                <div>
                  <Link to="/pre/abram">View</Link>
                </div>
                <p />
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(145,53,53)", color: "#fff" }}
              >
                <img
                  classname="profile"
                  src={ChanaProfile}
                  alt=""
                  height="350"
                />
                <h3 className="vertical-timeline-element-title">
                  Chana Fodeman
                </h3>
                <div>
                  <Link to="/pre/chana">View</Link>
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
                <img src={DavidProfile} alt="" height="350" />
                <h3 className="vertical-timeline-element-title">
                  David Baigelman
                </h3>
                <div>
                  <Link to="/pre/david">View</Link>
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
                <img src={GitaProfile} alt="" height="350" />
                <h3 className="vertical-timeline-element-title">
                  Gita Baigelman
                </h3>
                <div>
                  <Link to="/pre/gita">View</Link>
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
                <img src={HenryProfile} alt="" height="350" />
                <h3 className="vertical-timeline-element-title">
                  Henry Baigelman
                </h3>
                <div>
                  <Link to="/pre/henry">View</Link>
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
                <img src={JollyProfile} alt="" height="350" />
                <h3 className="vertical-timeline-element-title">
                  Jolly Boys
                </h3>
                <div>
                  <Link to="/pre/jolly_boys">View</Link>
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
                <img src={LeonProfile} alt="" height="350" />
                <h3 className="vertical-timeline-element-title">
                  Leon Glazer
                </h3>
                <div>
                  <Link to="/pre/leon">View</Link>
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
                <img src={LodzProfile} alt="" height="350" />
                <h3 className="vertical-timeline-element-title">
                  Lodz Theatre
                </h3>
                <div>
                  <Link to="/pre/lodz">View</Link>
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
