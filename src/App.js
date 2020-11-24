import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  withRouter, useLocation
} from "react-router-dom";
import { connect } from "react-redux";
import Fab from '@material-ui/core/Fab'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import TextLoop from "react-text-loop";


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Animated } from "react-animated-css";
import Rodal from 'rodal';
import { fadeIn } from 'react-animations'

import { changeMode } from './redux/actions/changeMode.js';
import { changeDock } from './redux/actions/changeDock.js';
import { fetchArchive } from './redux/actions/fetchArchive';


import MusicDock from './component/MusicDock';
import NavBar from './component/Navbar';

import { loadState, saveState } from './libs/localState'
import Routes from './Routes';


import "./App.css";

const fabStyle = { position: 'fixed', top: '85%', left: '2%' };

const App = (props) => {
  const location = useLocation()
  const dark = props.dark.dark;
  const changeDock = props.changeDock;
  const [isModalVisible, setIsModalVisible] = useState(false)
  const MySwal = withReactContent(Swal)
  useEffect(() => {
    props.fetchArchive()
    if (location.pathname === '/#' && !localStorage.getItem('isReturn') || localStorage.getItem('isReturn') === null) setIsModalVisible(true)
  })

  const hideModal = (e) => {
    e.preventDefault()
    setIsModalVisible(false)
    localStorage.setItem('isReturn', true)

  }

  const resetModal = e => {
    e.preventDefault()
    setIsModalVisible(true)
  }
  return (
    <Router>
      <>
        {isModalVisible ?
          <div className='welcome-modal'>

            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={1000} animationOutDelay={10000} isVisible={true}>
              <p className='welcome-modal-content'>Welcome to</p>
            </Animated>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={1000} animationOutDelay={10000} isVisible={true}>
              <p className='welcome-modal-title'>Vessel Archives</p>
            </Animated>
            <Animated animationIn="fadeIn" animationInDelay={2500} animationOut="fadeOut" isVisible={true}>
              <p className='welcome-modal-content'>The home of a family of
              <TextLoop delay={1000} springConfig={{ stiffness: 180, damping: 8 }}>
                  <span className='welcome-msg-text'>leaders</span>
                  <span className='welcome-msg-text'>musicians</span>

                </TextLoop>
and         <TextLoop delay={2000} springConfig={{ stiffness: 180, damping: 8 }}>
                  <span className='welcome-msg-text'>survivors</span>
                  <span className='welcome-msg-text'>composers</span>

                </TextLoop>
              </p>
            </Animated>
            <Animated animationIn="fadeIn" animationInDelay={3500} animationOut="fadeOut" isVisible={true}>
              <div className='welcome-modal-link' >
                <p className='welcome-modal-content'>Learn more about their stories
                <button className='welcome-modal-button' onClick={hideModal} >here</button>
                </p>
              </div>
            </Animated>
            {/* <Animated animationIn="fadeIn" animationInDelay={4500} animationOut="fadeOut" isVisible={true}>
              <a className='welcome-modal-button' onClick={hideModal} >Explore</a>
            </Animated> */}
          </div>
          :
          <>
            <Animated animationIn='fadeIn'>
              <div className={dark ? "App container-fluid p-0 m-0 dark-mode" : "App container-fluid p-0 m-0 light-mode"} id="app">
                <NavBar props={props} isFirstVisit={resetModal} />

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
            </Animated>

          </>
        }
      </>
    </Router>
  );
};
const mapStateToProps = (state) => {
  return {
    dark: state.dark,
    dock: state.dock
  }
}
export default withRouter(connect(mapStateToProps, { changeMode, changeDock, fetchArchive })(App));
