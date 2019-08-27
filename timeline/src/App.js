import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
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
import Tree from "./Line/component/tree.jsx";
import "firebase/database";
import "./App.css";
import Line from "./Line/component/Line.jsx";
import "bootstrap/dist/css/bootstrap.css";
global.jQuery = require("jquery");
require("bootstrap");
//test


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
            path="/#/"
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
            <Navbar
              className="navbar-header no-shadows"
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
                  <NavLink href={`${process.env.PUBLIC_URL}/tree`}>
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
            <MDBFooter color="grey" className="font-small pt-4 mt-4">
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                  <MDBCol md="4">
                    <h5 className="title">The Berelson Project</h5>
                    <p>
                     An ancestral site built to display and document the Berelson lineage in an archival effort.
                    </p>
                  </MDBCol>
                  <MDBCol md="4">
                    <h5 className="title">Explore</h5>
                    <ul>
                      <li className="list-unstyled">
                        <a href="/archive/">Archive</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="/tree/">Family Tree</a>
                      </li>
                  
                    </ul>
                  </MDBCol>
                  <MDBCol md="4">
                    <h5 className="title">Contact</h5>
                    <ul>
                      <li className="list-unstyled">
                        
                        <p>
                        <i class="fas fa-home  mr-3"></i> Santa Cruz, CA 95062, US</p>
                      </li>
                      <li className="list-unstyled">
                        <p>
                          <i class="fas fa-envelope mr-3"></i> Email</p>
                      </li>
                      <li className="list-unstyled">
                        <p>
                          <i class="fas fa-phone mr-3"></i> Phone</p>
                      </li>
                    </ul>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} 
                  
                </MDBContainer>
              </div>
            </MDBFooter>
          </div>
        </Switch>
      </Router>
    );
  }
}
export default App;
