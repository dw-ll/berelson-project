import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

import Pre from './Line/component/pre';
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
   
      
      <div className="App">
     

          <Navbar className="navbar-header" theme="dark" light expand="md">
            <NavbarBrand href="/">
            
              {' The Berelson Project'}
            </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
         
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="https://github.com/dw-ll/Berelson-Project">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Eras
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Pre WWII
                  </DropdownItem>
                  <DropdownItem>
                    WWII
                  </DropdownItem>
                  <DropdownItem>
                    Post WWII
                  </DropdownItem>
                 <DropdownItem>
                  Modern
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>

          </Navbar>
        
         <Line/>
      </div>
  
      );
    }
  }
  export default App;
