import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import Fab from '@material-ui/core/Fab'
import MusicNoteIcon from '@material-ui/icons/MusicNote';

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
import Routes from './Routes';


import "./App.css";

const fabStyle = { position: 'fixed', top: '85%', left: '2%' };

const App = (props) => {
  const dark = props.dark.dark;
  const changeDock = props.changeDock;
  const [isModalVisible, setIsModalVisible] = useState(true)
  const MySwal = withReactContent(Swal)
  useEffect(() => {
    props.fetchArchive()
    // if (!localStorage.getItem('firstTimeVisit')) {
    MySwal.fire({
      title:
        <div>
          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <h1 className='welcome-modal-title'>Vessel Archives</h1>
          </Animated>
        </div>,
      html:
        <div>
          <Animated animationIn="fadeIn" animationInDelay={1000} animationOut="fadeOut" isVisible={true}>
            <p className='welcome-modal-content'>Some descriptive content about the Vessel Archives site and what visitors can learn about.</p>
          </Animated>
        </div>,
      showClass: {
        popup: 'animated fadeIn'

      },
      hideClass: {
        popup: 'animated fadeOut',
        backdrop: 'animated fadeOut',
        //backdrop: 'animated fadeOut swal2-backdrop-hide'
      },
      width: '100%',
      backdrop: 'white',
      heightAuto: false,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: true,
      confirmButtonColor: 'goldenrod',
      confirmButtonText: 'Explore',
      imageUrl: "https://res.cloudinary.com/vessel-archives/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max/v1590269232/Baigelman%20Family%20Photos/Fonia224_nhif7n.jpg",
      imageHeight: 350,
      imageWidth: 350

    })

  })
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
export default withRouter(connect(mapStateToProps, { changeMode, changeDock, fetchArchive })(App));
