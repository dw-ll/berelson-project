import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
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
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";
// Another way to import
import Headspace from 'react-headspace';

import Pre from "./Line/component/pre.jsx";
import WW2 from "./Line/component/ww2.jsx";
import Post from "./Line/component/post.jsx";
import Present from "./Line/component/present.jsx";
import Archive from "./Line/component/archive.jsx";
import Tree from "./Line/component/tree.jsx";
import "firebase/database";
import "./App.css";
import Line from "./Line/component/Line.jsx";
import "bootstrap/dist/css/bootstrap.css";
global.jQuery = require("jquery");
require("bootstrap");
//test

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path="/berelson-project/"
            exact
            render={() => {
              return <Line />;
            }}
          />
          <Route
            path={`/pre`}
            exact
            render={() => {
              return <Pre />;
            }}
          />
          <Route
            path={`/ww2`}
            exact
            render={() => {
              return <WW2 />;
            }}
          />
          <Route
            path={`/post`}
            exact
            render={() => {
              return <Post />;
            }}
          />
          <Route
            path={`/present`}
            exact
            render={() => {
              return <Present />;
            }}
          />
          <Route
            exact
            path={`/archive`}
            render={() => {
              return <Archive />;
            }}
          />
          <Route
            exact
            path={`/tree`}
            render={() => {
              return <Tree />;
            }}
          />

          <div className="App">
            <Navbar className="navbar-header" theme="dark" light expand="md">
              <NavbarBrand href="/berelson-project/">
                {" The Berelson Project"}
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />

              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={`${process.env.PUBLIC_URL}/archive/`}>
                    Archive
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/dw-ll/Berelson-Project">
                    GitHub
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={`${process.env.PUBLIC_URL}/tree/`}>
                    Tree
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
                    <LinkContainer to="/ww2/">
                      <DropdownItem>WWII</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to="/post/">
                      <DropdownItem>Post WWII</DropdownItem>
                    </LinkContainer>
                    <LinkContainer to="/present/">
                      <DropdownItem>Modern</DropdownItem>
                    </LinkContainer>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Navbar>

            <Line />

            <div>
              <footer class="page-footer font-small blue">
                <div class="footer-copyright text-center py-3">© 2019</div>
              </footer>
              <ScrollUpButton speed="1000" />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default App;
