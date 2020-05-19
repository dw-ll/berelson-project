import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import Fab from '@material-ui/core/Fab'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { changeMode } from './redux/actions/changeMode.js';
import { changeDock } from './redux/actions/changeDock.js';
import MusicDock from './component/MusicDock.js';
import NavBar from './component/Navbar.js';
import Routes from './Routes';
import "./App.css";
global.jQuery = require("jquery");

const fabStyle = { position: 'fixed', top: '85%', left: '2%' };
const App = (props) => {
  const dark = props.dark.dark;
  const changeDock = props.changeDock;
  return (
    <Router>
      <div className={dark ? "App container-fluid p-0 m-0 dark-mode" : "App container-fluid p-0 m-0 light-mode"} id="app">
        <NavBar props={props} />
        <Fab className="music-trigger"
          size="large"
          style={fabStyle}
          color="default"
          aria-label="play"
          onClick={changeDock}>
          <MusicNoteIcon />
        </Fab>
        <Routes appProps={{ dark, changeDock }} />
      </div>
      <MusicDock />
    </Router>
  );
};
const mapStateToProps = (state) => {
  return {
    dark: state.dark,
    dock: state.dock
  }
}


export default withRouter(connect(mapStateToProps, { changeMode, changeDock })(App));
