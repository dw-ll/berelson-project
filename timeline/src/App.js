import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery=require('jquery');
require('bootstrap');


class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="card card-default post-body">
        <div className="card-body">
              The Berelson Project
        </div>
   </div>
      </div>
    );
  }
}
export default App;
