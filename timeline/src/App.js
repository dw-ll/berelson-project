import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import {CircleArrow as ScrollUpButton } from "react-scroll-up-button"; 
import {
  DropdownItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

import Pre from "./Line/component/pre.jsx";
import WW2 from "./Line/component/ww2.jsx";
import Post from "./Line/component/post.jsx";
import Present from "./Line/component/present.jsx";
import Archive from "./Line/component/archive.jsx";
import "firebase/database";
import "./App.css";
import Line from "./Line/component/Line.jsx";
import "bootstrap/dist/css/bootstrap.css";
global.jQuery = require("jquery");
require("bootstrap");
//test

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/berelson-project"
            exact
            render={() => {
              return <Line />;
            }}
          />
          <Route
            path="/berelson-project/pre/"
            exact
            render={() => {
              return <Pre />;
            }}
          />
          <Route
            path="/berelson-project/ww2/"
            exact
            render={() => {
              return <WW2 />;
            }}
          />
          <Route
            path="/berelson-project/post/"
            exact
            render={() => {
              return <Post />;
            }}
          />
          <Route
            path="/berelson-project/present/"
            exact
            render={() => {
              return <Present />;
            }}
          />
          <Route
            path="/berelson-project/archive/"
            exact
            render={() => {
              return <Archive />;
            }}
          />

          <div className="App">
            <Navbar
              className="navbar-header"
              theme="dark"
              light
              expand="md"
            >
              <NavbarBrand href="/berelson-project/">
                {" The Berelson Project"}
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />

              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/about/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/archive/"> Archive</NavLink>
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
            <div>
              <ScrollUpButton />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default App;
