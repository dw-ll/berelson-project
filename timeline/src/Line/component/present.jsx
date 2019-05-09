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
                <img src={AdolfoProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">
                  Adolfo Spzilman
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/adolfo">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={CarolProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">Carol</h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/carol">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={EdProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">Ed</h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/ed">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={FoniaProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">Fonia</h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/fonia">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={HenryProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">
                  Henry Baigelman
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/henry">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={JackProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">
                  Jack Baigelman
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/jack">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={MordecaiProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">
                  Mordecai
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/present/mordecai">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={PolaProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">Pola</h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/present/pola">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={RachelProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">Rachel</h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/present/rachel">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={RivaProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">Riva</h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/present/riva">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={SevekProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">Sevek</h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/present/sevek">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={StarskiProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">Starski</h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/present/starski">Learn More</Link>
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
