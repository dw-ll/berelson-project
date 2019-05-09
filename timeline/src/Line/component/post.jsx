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



import EdProfile from "../../Media/Post-WWII 2/Ed.Silver091.jpeg";
import FoniaProfile from "../../Media/Post-WWII 2/Fonia220.jpeg";
import GitaProfile from "../../Media/Post-WWII 2/Gita.Baigelman120.jpeg";
import HenryProfile from "../../Media/Post-WWII 2/Henry.Baigelman119.jpeg";
import JackProfile from "../../Media/Post-WWII 2/Jack.Baigelman057.jpeg";
import JustinaProfile from "../../Media/Post-WWII 2/justina197.jpeg";
import KatieProfile from "../../Media/Post-WWII 2/katie159.jpeg";
import LevinProfile from "../../Media/Post-WWII 2/Levin.Baigelman079.jpeg";
import PinekProfile from "../../Media/Post-WWII 2/Pinek.Baigelman041.jpeg";
import PolaProfile from "../../Media/Post-WWII 2/pola178.jpeg";
import RachellaProfile from "../../Media/Post-WWII 2/Rachella150.jpeg";
import RivaProfile from "../../Media/Post-WWII 2/Riva287.jpeg";
import SamProfile from "../../Media/Post-WWII 2/Samuel181.jpeg";
import SandyProfile from "../../Media/Post-WWII 2/Sandy.Baigelman056.jpeg";



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
                <img src={GitaProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">
                  Gita Baigelman
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/gita">Learn More</Link>
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
                <img src={JustinaProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">Justina</h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/justina">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={KatieProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">Katie</h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/katie">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={LevinProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">
                  Levin Baigelman
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/levin">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={PinekProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">
                  Pinek Baigelman
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/pinek">Learn More</Link>
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
                  <Link to="/post/pola">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={RachellaProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">
                  Rachella
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/rachella">Learn More</Link>
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
                  <Link to="/post/riva">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={SamProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">
                  Samuel Spielman
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/sam">Learn More</Link>
                </div>
                <p />
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(40,49,72)", color: "#fff" }}
                //icon={<Print/>}
              >
                <img src={SandyProfile} alt="" width="350" />
                <h3 className="vertical-timeline-element-title">
                  Sandy Baigelman
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                />
                <div>
                  <Link to="/post/sandy">Learn More</Link>
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
