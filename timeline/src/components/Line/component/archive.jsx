import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
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
import Gallery from "react-grid-gallery";
import "react-vertical-timeline-component/style.min.css";
import Present from "./present";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";
import About from "./about";

const routes = [
  {
    component: Pre,
    path: "/pre"
  },
  {
    component: WWII,
    path: "/ww2"
  },
  {
    component: Post,
    path: "/post"
  },
  {
    component: Present,
    path: "/present"
  },
  {
    component: About,
    path: "/about"
  }
];

const preImages = [
  {
    src: require("../../Media/Pre-WWII/Abram.Baigelman026.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Abram.Baigelman026.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Abram Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Abram.Baigelman027 2.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Abram.Baigelman027 2.jpeg"),
    isSelected: false,
    caption: "Abram Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Abram.Baigelman029.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Abram.Baigelman029.jpeg"),
    isSelected: false,
    caption: "Abram Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Abram.Baigelman030.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Abram.Baigelman030.jpeg"),
    isSelected: false,
    caption: "Abram Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Abram.Baigelman031.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Abram.Baigelman031.jpeg"),
    isSelected: false,
    caption: "Abram Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Abram.Baigelman034.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Abram.Baigelman034.jpeg"),
    isSelected: false,
    caption: "Abram Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Abram.Baigelman035.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Abram.Baigelman035.jpeg"),
    isSelected: false,
    caption: "Abram Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Abram.Baigelman038.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Abram.Baigelman038.jpeg"),
    caption: "Abram Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Chana.Fodeman025.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Chana.Fodeman025.jpeg"),
    isSelected: false,
    caption: "Chana Fodeman"
  },
  {
    src: require("../../Media/Pre-WWII/David.Baigelman016.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/David.Baigelman016.jpeg"),
    isSelected: false,
    caption: "Chana Fodeman"
  },
  {
    src: require("../../Media/Pre-WWII/David.Baigelman022.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/David.Baigelman022.jpeg"),
    isSelected: false,
    caption: "David Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Gita.Baigelman137.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Gita.Baigelman137.jpeg"),
    isSelected: false,
    caption: "Gita Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Gita.Baigelman138.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Gita.Baigelman138.jpeg"),
    isSelected: false,
    caption: "Gita Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Gita.Baigelman139.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Gita.Baigelman139.jpeg"),
    isSelected: false,
    caption: "Gita Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Gita.Baigelman140.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Gita.Baigelman140.jpeg"),
    isSelected: false,
    caption: "Gita Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Gita.Baigelman142.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Gita.Baigelman142.jpeg"),
    isSelected: false,
    caption: "Gita Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Henry.Baigelman002.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Henry.Baigelman002.jpeg"),
    isSelected: false,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Henry.Baigelman002.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Henry.Baigelman002.jpeg"),
    isSelected: false,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Henry.Baigelman003.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Henry.Baigelman003.jpeg"),
    isSelected: false,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Henry.Baigelman004.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Henry.Baigelman004.jpeg"),
    isSelected: false,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Henry.Baigelman009.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Henry.Baigelman009.jpeg"),
    isSelected: false,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Henry.Bogelman001.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Henry.Bogelman001.jpeg"),
    isSelected: false,
    caption: "Henry Bogelman"
  },
  {
    src: require("../../Media/Pre-WWII/Henry.David.Baigelman006.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Henry.David.Baigelman006.jpeg"),
    isSelected: false,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Pre-WWII/Jolly.Bays008.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Jolly.Bays008.jpeg"),
    isSelected: false,
    caption: "Jolly Boys"
  },
  {
    src: require("../../Media/Pre-WWII/Leon.Glazer143.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Leon.Glazer143.jpeg"),
    isSelected: false,
    caption: "Leon Glazer"
  },
  {
    src: require("../../Media/Pre-WWII/Lodz.Theatre426.jpeg"),
    thumbnail: require("../../Media/Pre-WWII/Lodz.Theatre426.jpeg"),
    isSelected: false,
    caption: "Lodz Theatre"
  }
];

const warImages = [
  {
    src: require("../../Media/WWII/gita.Baigelman144.jpeg"),
    thumbnail: require("../../Media/WWII/gita.Baigelman144.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Gita Baigelman"
  },
  {
    src: require("../../Media/WWII/HappyBoys4282.jpeg"),
    thumbnail: require("../../Media/WWII/HappyBoys4282.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Happy Boys"
  },
  {
    src: require("../../Media/WWII/Henry.Baigelman101.jpeg"),
    thumbnail: require("../../Media/WWII/Henry.Baigelman101.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/WWII/Henry.Baigelman102.jpeg"),
    thumbnail: require("../../Media/WWII/Henry.Baigelman102.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/WWII/Henry.Baigelman118.jpeg"),
    thumbnail: require("../../Media/WWII/Henry.Baigelman118.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/WWII/InmateCert2377.jpeg"),
    thumbnail: require("../../Media/WWII/InmateCert2377.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/WWII/InmateCertificate.jpeg"),
    thumbnail: require("../../Media/WWII/InmateCertificate.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/WWII/Rachella148.jpeg"),
    thumbnail: require("../../Media/WWII/Rachella148.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Rachella"
  }
];

const postWarImages = [
  {
    src: require("../../Media/Post-WWII 2/Baigelman104.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Baigelman104.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Post-WWII 2/Baigelman105.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Baigelman105.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Post-WWII 2/Diploma437.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Diploma437.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Post-WWII 2/Diploma438.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Diploma438.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Post-WWII 2/Diploma439.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Diploma439.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Post-WWII 2/Ed.Silver091.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Ed.Silver091.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Ed"
  },
  {
    src: require("../../Media/Post-WWII 2/Fonia208.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Fonia208.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Post-WWII 2/Fonia209.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Fonia209.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Post-WWII 2/Fonia213.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Fonia213.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Post-WWII 2/Fonia215.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Fonia215.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Post-WWII 2/Fonia219.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Fonia219.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Post-WWII 2/Fonia220.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Fonia220.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Post-WWII 2/Fonia222.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Fonia222.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Post-WWII 2/Fonia224.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Fonia224.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Post-WWII 2/Fonia235.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Fonia235.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Post-WWII 2/Fonia241.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Fonia241.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Post-WWII 2/Fonia247.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Fonia247.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Post-WWII 2/Gita.Baigelman120.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Gita.Baigelman120.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Gita Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Graduation440.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Graduation440.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman106.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman106.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman108.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman108.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman109.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman109.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman110.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman110.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman119.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman119.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman121.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman121.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman122.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman122.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman124.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman124.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman125.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman125.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman126.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman126.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman128.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman128.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman129.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman129.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman130.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman130.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman131.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman131.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.Baigelman134.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.Baigelman134.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry.David.Baigelman007.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry.David.Baigelman007.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry271.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry271.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Henry279.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Henry279.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Jack.Baigelman057.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Jack.Baigelman057.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Jack Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Jack.Baigelman065.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Jack.Baigelman065.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Jack Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/justina197.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/justina197.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Justina"
  },
  {
    src: require("../../Media/Post-WWII 2/justina202.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/justina202.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Justina"
  },
  {
    src: require("../../Media/Post-WWII 2/katie159.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/katie159.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Katie"
  },
  {
    src: require("../../Media/Post-WWII 2/Levin.Baigelman079.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Levin.Baigelman079.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Levin Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Levin.Baigelman080.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Levin.Baigelman080.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Levin Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Levin.Baigelman081.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Levin.Baigelman081.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Levin Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Pinek.Baigelman040.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Pinek.Baigelman040.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pinek Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/Pinek.Baigelman041.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Pinek.Baigelman041.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pinek Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/pola162.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/pola162.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pola"
  },
  {
    src: require("../../Media/Post-WWII 2/pola163.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/pola163.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pola"
  },
  {
    src: require("../../Media/Post-WWII 2/pola164.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/pola164.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pola"
  },
  {
    src: require("../../Media/Post-WWII 2/pola166.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/pola166.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pola"
  },
  {
    src: require("../../Media/Post-WWII 2/pola176.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/pola176.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pola"
  },
  {
    src: require("../../Media/Post-WWII 2/pola177.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/pola177.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pola"
  },
  {
    src: require("../../Media/Post-WWII 2/pola178.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/pola178.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pola"
  },
  {
    src: require("../../Media/Post-WWII 2/pola194.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/pola194.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pola"
  },
  {
    src: require("../../Media/Post-WWII 2/Rachella146.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Rachella146.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Rachella"
  },
  {
    src: require("../../Media/Post-WWII 2/Rachella147.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Rachella147.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Rachella"
  },
  {
    src: require("../../Media/Post-WWII 2/Rachella149.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Rachella149.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Rachella"
  },
  {
    src: require("../../Media/Post-WWII 2/Rachella150.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Rachella150.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Rachella"
  },
  {
    src: require("../../Media/Post-WWII 2/rachella156.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/rachella156.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Rachella"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva280.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva280.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva281.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva281.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva282.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva282.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva283.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva283.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva285.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva285.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva286.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva286.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva287.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva287.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva288.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva288.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva289.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva289.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva291.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva291.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva292.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva292.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva293.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva293.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva294.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva294.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva301.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva301.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva320.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva320.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva323.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva323.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva324.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva324.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva325.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva325.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Riva326.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Riva326.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Post-WWII 2/Sam.Spielman067.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Sam.Spielman067.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Samuel Spielman"
  },

  {
    src: require("../../Media/Post-WWII 2/Samuel181.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Samuel181.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Samuel Spielman"
  },
  {
    src: require("../../Media/Post-WWII 2/Samuel182.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Samuel182.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Samuel Spielman"
  },
  {
    src: require("../../Media/Post-WWII 2/Sandy.Baigelman056.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/Sandy.Baigelman056.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sandy Baigelman"
  },
  {
    src: require("../../Media/Post-WWII 2/WorkPermit2396.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/WorkPermit2396.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Post-WWII 2/WorkPermit2397.jpeg"),
    thumbnail: require("../../Media/Post-WWII 2/WorkPermit2397.jpeg"),
    customOverlay: <div className="overlay" />
  }
];

const modernImages = [
  {
    src: require("../../Media/Modern/Adolfo.Szpilman098.jpeg"),
    thumbnail: require("../../Media/Modern/Adolfo.Szpilman098.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Adolfo Szpilman"
  },
  {
    src: require("../../Media/Modern/Adolfo.Szpilman099.jpeg"),
    thumbnail: require("../../Media/Modern/Adolfo.Szpilman099.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Adolfo Szpilman"
  },
  {
    src: require("../../Media/Modern/Birth.Certificate454.jpeg"),
    thumbnail: require("../../Media/Modern/Birth.Certificate454.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Modern/Calendar453.jpeg"),
    thumbnail: require("../../Media/Modern/Calendar453.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Modern/Calendar459.jpeg"),
    thumbnail: require("../../Media/Modern/Calendar459.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Modern/Carol343.jpeg"),
    thumbnail: require("../../Media/Modern/Carol343.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Carol"
  },
  {
    src: require("../../Media/Modern/Carol344.jpeg"),
    thumbnail: require("../../Media/Modern/Carol344.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Carol"
  },
  {
    src: require("../../Media/Modern/Carol345.jpeg"),
    thumbnail: require("../../Media/Modern/Carol345.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Carol"
  },
  {
    src: require("../../Media/Modern/Ed.Silver086.jpeg"),
    thumbnail: require("../../Media/Modern/Ed.Silver086.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Ed"
  },
  {
    src: require("../../Media/Modern/Ed.Silver088.jpeg"),
    thumbnail: require("../../Media/Modern/Ed.Silver088.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Ed"
  },
  {
    src: require("../../Media/Modern/Ed.Silver089.jpeg"),
    thumbnail: require("../../Media/Modern/Ed.Silver089.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Ed"
  },
  {
    src: require("../../Media/Modern/Ed.Silver090.jpeg"),
    thumbnail: require("../../Media/Modern/Ed.Silver090.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Ed"
  },
  {
    src: require("../../Media/Modern/Ed.Silver092.jpeg"),
    thumbnail: require("../../Media/Modern/Ed.Silver092.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Ed"
  },
  {
    src: require("../../Media/Modern/Ed.Silver093.jpeg"),
    thumbnail: require("../../Media/Modern/Ed.Silver093.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Ed"
  },
  {
    src: require("../../Media/Modern/Ed.Silver094.jpeg"),
    thumbnail: require("../../Media/Modern/Ed.Silver094.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Ed"
  },
  {
    src: require("../../Media/Modern/Ed.Silver095.jpeg"),
    thumbnail: require("../../Media/Modern/Ed.Silver095.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Ed"
  },
  {
    src: require("../../Media/Modern/Feldafing476.jpeg"),
    thumbnail: require("../../Media/Modern/Feldafing476.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Feldafing"
  },
  {
    src: require("../../Media/Modern/Fonia227.jpeg"),
    thumbnail: require("../../Media/Modern/Fonia227.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Modern/Fonia230.jpeg"),
    thumbnail: require("../../Media/Modern/Fonia230.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Modern/Fonia233.jpeg"),
    thumbnail: require("../../Media/Modern/Fonia233.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Modern/Fonia236.jpeg"),
    thumbnail: require("../../Media/Modern/Fonia236.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Modern/Fonia237.jpeg"),
    thumbnail: require("../../Media/Modern/Fonia237.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Modern/Fonia238.jpeg"),
    thumbnail: require("../../Media/Modern/Fonia238.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Modern/Fonia239.jpeg"),
    thumbnail: require("../../Media/Modern/Fonia239.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Fonia"
  },
  {
    src: require("../../Media/Modern/Henry.Memoriam462.jpeg"),
    thumbnail: require("../../Media/Modern/Henry.Memoriam462.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry"
  },
  {
    src: require("../../Media/Modern/Henry367.jpeg"),
    thumbnail: require("../../Media/Modern/Henry367.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Henry"
  },
  {
    src: require("../../Media/Modern/Humanitarian.Award481.jpeg"),
    thumbnail: require("../../Media/Modern/Humanitarian.Award481.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Modern/Jack.Baigelman061.jpeg"),
    thumbnail: require("../../Media/Modern/Jack.Baigelman061.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Jack Baigelman"
  },
  {
    src: require("../../Media/Modern/Jack.Baigelman062.jpeg"),
    thumbnail: require("../../Media/Modern/Jack.Baigelman062.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Jack Baigelman"
  },
  {
    src: require("../../Media/Modern/Jack.Baigelman063.jpeg"),
    thumbnail: require("../../Media/Modern/Jack.Baigelman063.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Jack Baigelman"
  },
  {
    src: require("../../Media/Modern/Mordecai186.jpeg"),
    thumbnail: require("../../Media/Modern/Mordecai186.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Mordecai"
  },
  {
    src: require("../../Media/Modern/NursingCertificate436.jpeg"),
    thumbnail: require("../../Media/Modern/NursingCertificate436.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Modern/pola179.jpeg"),
    thumbnail: require("../../Media/Modern/pola179.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pola"
  },
  {
    src: require("../../Media/Modern/pola192.jpeg"),
    thumbnail: require("../../Media/Modern/pola192.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pola"
  },
  {
    src: require("../../Media/Modern/pola193.jpeg"),
    thumbnail: require("../../Media/Modern/pola193.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Pola"
  },
  {
    src: require("../../Media/Modern/Rachel188.jpeg"),
    thumbnail: require("../../Media/Modern/Rachel188.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Rachel"
  },
  {
    src: require("../../Media/Modern/Rachel189.jpeg"),
    thumbnail: require("../../Media/Modern/Rachel189.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Rachel"
  },
  {
    src: require("../../Media/Modern/Rachel190.jpeg"),
    thumbnail: require("../../Media/Modern/Rachel190.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Rachel"
  },
  {
    src: require("../../Media/Modern/Riva290.jpeg"),
    thumbnail: require("../../Media/Modern/Riva290.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Riva338.jpeg"),
    thumbnail: require("../../Media/Modern/Riva338.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Riva346.jpeg"),
    thumbnail: require("../../Media/Modern/Riva346.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Riva347.jpeg"),
    thumbnail: require("../../Media/Modern/Riva347.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Riva348.jpeg"),
    thumbnail: require("../../Media/Modern/Riva348.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Riva349.jpeg"),
    thumbnail: require("../../Media/Modern/Riva349.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Riva350.jpeg"),
    thumbnail: require("../../Media/Modern/Riva350.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Riva351.jpeg"),
    thumbnail: require("../../Media/Modern/Riva351.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Riva352.jpeg"),
    thumbnail: require("../../Media/Modern/Riva352.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Riva353.jpeg"),
    thumbnail: require("../../Media/Modern/Riva353.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Riva354.jpeg"),
    thumbnail: require("../../Media/Modern/Riva354.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Riva355.jpeg"),
    thumbnail: require("../../Media/Modern/Riva355.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Riva"
  },
  {
    src: require("../../Media/Modern/Serj482.jpeg"),
    thumbnail: require("../../Media/Modern/Serj482.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Serj"
  },
  {
    src: require("../../Media/Modern/Sevek259.jpeg"),
    thumbnail: require("../../Media/Modern/Sevek259.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sevek"
  },
  {
    src: require("../../Media/Modern/Sevek260.jpeg"),
    thumbnail: require("../../Media/Modern/Sevek260.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sevek"
  },
  {
    src: require("../../Media/Modern/Sevek261.jpeg"),
    thumbnail: require("../../Media/Modern/Sevek261.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sevek"
  },
  {
    src: require("../../Media/Modern/Sevek262.jpeg"),
    thumbnail: require("../../Media/Modern/Sevek262.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sevek"
  },
  {
    src: require("../../Media/Modern/Sevek264.jpeg"),
    thumbnail: require("../../Media/Modern/Sevek264.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sevek"
  },
  {
    src: require("../../Media/Modern/Sevek265.jpeg"),
    thumbnail: require("../../Media/Modern/Sevek265.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sevek"
  },
  {
    src: require("../../Media/Modern/Sevek266.jpeg"),
    thumbnail: require("../../Media/Modern/Sevek266.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sevek"
  },
  {
    src: require("../../Media/Modern/Sevek267.jpeg"),
    thumbnail: require("../../Media/Modern/Sevek267.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sevek"
  },
  {
    src: require("../../Media/Modern/Sevek268.jpeg"),
    thumbnail: require("../../Media/Modern/Sevek268.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sevek"
  },
  {
    src: require("../../Media/Modern/Sevek269.jpeg"),
    thumbnail: require("../../Media/Modern/Sevek269.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sevek"
  },
  {
    src: require("../../Media/Modern/Sevek342.jpeg"),
    thumbnail: require("../../Media/Modern/Sevek342.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Sevek"
  },
  {
    src: require("../../Media/Modern/Simon.Baigelman.Note461.jpeg"),
    thumbnail: require("../../Media/Modern/Simon.Baigelman.Note461.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Modern/Starski.Daughter085.jpeg"),
    thumbnail: require("../../Media/Modern/Starski.Daughter085.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Modern/Starski082.jpeg"),
    thumbnail: require("../../Media/Modern/Starski082.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Starski"
  },
  {
    src: require("../../Media/Modern/Starski083.jpeg"),
    thumbnail: require("../../Media/Modern/Starski083.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Starski"
  },
  {
    src: require("../../Media/Modern/visual.history480.jpeg"),
    thumbnail: require("../../Media/Modern/visual.history480.jpeg"),
    customOverlay: <div className="overlay" />
  },
  {
    src: require("../../Media/Modern/Windernere441.jpeg"),
    thumbnail: require("../../Media/Modern/Windernere441.jpeg"),
    customOverlay: <div className="overlay" />,
    caption: "Windernere"
  }
];

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

class Line extends Component {
  state = {
    redirect: false
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
    }
  };

  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange() {
    let path = `newPath`;
    this.props.history.push(path);
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            {routes.map((route, i) => (
              <Route
                path={route.path}
                exact
                render={() => {
                  return <route.component />;
                }}
              />
            ))}

            <div className="App">
              <link rel="stylesheet" href="css/blueimp-gallery.min.css" />

              <Navbar className="navbar-header" theme="dark" light expand="md">
                <NavbarBrand href="/">{" The Berelson Project"}</NavbarBrand>
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
              <div>An archive of the Berelson Lineage.</div>

              <Gallery images={preImages} enableImageSelection={false} />
              <Gallery images={warImages} enableImageSelection={false} />
              <Gallery images={postWarImages} enableImageSelection={false} />
              <Gallery images={modernImages} enableImageSelection={false} />
            </div>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
export default Line;
