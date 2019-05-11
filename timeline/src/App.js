import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
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
  Collapse,
  DropdownItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import Pre from './Line/component/pre.jsx';
import WW2 from "./Line/component/ww2.jsx";
import Post from "./Line/component/post.jsx";
import Present from "./Line/component/present.jsx";

import About from './Line/component/about';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

import Line from './Line/component/Line.jsx';
import Wheel from './carousel/carousel.jsx'
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery=require('jquery');
require('bootstrap');



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="#home"
            exact
            render={() => {
              return <Line />;
            }}
          />
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
              return <WW2 />;
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

          <div className="App">
            <Navbar
              className="navbar-header"
              theme="dark"
              light
              expand="md"
            >
              <NavbarBrand href="/">{" The Berelson Project"}</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />

              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/dw-ll/Berelson-Project">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Eras
                  </DropdownToggle>
                  <DropdownMenu right>
                    <LinkContainer to="/pre/">
                      <DropdownItem>Pre WWII</DropdownItem>
                    </LinkContainer>
                    <DropdownItem>WWII</DropdownItem>
                    <DropdownItem>Post WWII</DropdownItem>
                    <DropdownItem>Modern</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Navbar>

            <Line />
          </div>
        </Switch>
      </Router>
    );
    }
  }
  export default App;
