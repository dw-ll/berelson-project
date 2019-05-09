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




import EdProfile from "../../Media/Post-WWII 2/Ed.Silver091.jpeg";


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
                <img src={EdProfile} alt = ""/>
                <h3 className="vertical-timeline-element-title">
                  Ed
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  onClick={this.renderRedirect}
                >
                  
                </h4>
                <div>
                  <Link to="/post/ed">Learn More</Link>
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
