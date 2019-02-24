import React, { Component } from 'react';
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
         <Line/>
      </div>
    );
  }
}
export default App;
