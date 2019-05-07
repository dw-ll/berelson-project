import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link,  } from "react-router-dom";
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink, Navbar, NavbarBrand, NavItem, Nav, NavDropdown } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Pre from './pre';
import Post from './post';
import WWII from './ww2';
import test from '../../carousel/carousel';

import SvgIcon from "@material-ui/core/SvgIcon";
import Home from '@material-ui/icons/Home.js';

//import {Print} from 'material-ui-icons/AccessAlarm';
const homeLink = () => {
    return (
        <button>
            <Link style={{ display: 'block', height: '100%' }} to='/'> </Link> />
    </button>
    )
}
class Line extends Component{
    state = {
        redirect: false

    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
  
        }
    }
render(){
    return (
      <Router>
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
        <div>
          <div className="card card-default post-body">
            <div className="card-body main-nav">
              An ancestral site documenting and displaying the Berelson
              lineage.
            </div>
           
            <div>
              <test />
            </div>
          </div>
        </div>
      </Router>
    );
        
}
}
export default Line;