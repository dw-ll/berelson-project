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
  NavLink,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavDropdown
} from "reactstrap";

import Pre from './Line/component/pre';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

import Line from './Line/component/Line.jsx';
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery=require('jquery');
require('bootstrap');



class App extends Component {
  render() {
    return (
   
      
      <div className="App">
     

          <Navbar color="dark" variant="light">
            <NavbarBrand href="/">
              <img
                alt=""
                src="logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' The Berelson Project'}
            </NavbarBrand>
          </Navbar>
         <Line/>
      </div>
  
      );
    }
  }
  export default App;
