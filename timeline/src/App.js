import React, { useState, useEffect } from "react";
//import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Switch } from "react-router";
import ScrollButton from "react-scroll-button";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as famData from "./family.json";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { NavLink, Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import { StickyContainer, Sticky } from "react-sticky";
import _ from "lodash";
import { Search, Label } from "semantic-ui-react";
import SearchBar from "react-search-bar-semantic-ui";
import MusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Pre from "./Line/component/pre.jsx";
import WW2 from "./Line/component/ww2.jsx";
import Post from "./Line/component/post.jsx";
import Present from "./Line/component/present.jsx";
import Archive from "./Line/component/archive.jsx";
import About from "./Line/component/about.jsx";
import Tree from "./Line/component/tree.jsx";
import LandingSpan from "./Line/component/landing_span.jsx";
import "firebase/database";
import "./App.css";
import Line from "./Line/component/Line.jsx";
import "bootstrap/dist/css/bootstrap.css";
require("bootstrap");
global.jQuery = require("jquery");

// Loading Animation
const Loader = {
  loop: true,
  autoplay: true,
  animationData: famData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

// Local Search Bank for Search Feature
const searchData = [
  {
    title: "Abram Baigelman 1",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman026.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1935",
      "krakow",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 2",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman027.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1935",
      "krakow",
      "sukienniee",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 3",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman029.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1935",
      "krakow",
      "ploso",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 4",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman030.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1935",
      "krakow",
      "hieia",
      "marjacka",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 5",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman031.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1936",
      "kryneia",
      "october",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 6",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman034.jpeg"),
    tags: ["abram ", "baigelman", "1936", "pre-WWII", "arthur", "bay"],
    id: 1
  },
  {
    title: "Abram Baigelman 7",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman035.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "1936",
      "kryniea",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 8",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Abram.Baigelman038.jpeg"),
    tags: [
      "abram ",
      "baigelman",
      "henry's brother",
      "1936",
      "pre-WWII",
      "arthur",
      "bay"
    ],
    id: 1
  },
  {
    title: "Chana Fodeman",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Chana.Fodeman025.jpeg"),
    tags: [
      "chana",
      "fodeman ",
      "david's wife",
      "actress",
      "1930",
      "warsaw",
      "poland",
      "pre-wwII"
    ]
  },
  {
    title: "David Baigelman 1",
    description: "",
    image: require("./SearchMedia/Pre-WWII/David.Baigelman016.jpeg"),
    tags: ["david ", "baigelman", "1934", "pre-WWII"],
    id: 1
  },
  {
    title: "David Baigelman 2",
    description: "",
    image: require("./SearchMedia/Pre-WWII/David.Baigelman022.jpeg"),
    tags: ["david ", "baigelman", "1934", "pre-WWII"],
    id: 1
  },
  {
    title: "Gita Baigelman",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Gita.Baigelman137.jpeg"),
    tags: ["gita ", "baigelman", "pre-WWII"],
    id: 1
  },
  {
    title: "Henry Baigelman 1",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Henry.Baigelman002.jpeg"),
    tags: ["henry ", "baigelman", "pre-WWII"],
    id: 1
  },
  {
    title: "Henry Baigelman 2",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Henry.Baigelman003.jpeg"),
    tags: ["henry ", "baigelman", "pre-WWII"],
    id: 1
  },
  {
    title: "Henry Baigelman 3",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Henry.Baigelman004.jpeg"),
    tags: ["henry ", "baigelman", "1938", "pre-WWII"],
    id: 1
  },
  {
    title: "Henry Baigelman 4",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Henry.Bogelman001.jpeg"),
    tags: ["henry ", "baigelman", "pre-WWII"],
    id: 1
  },
  {
    title: "Henry David Baigelman",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Henry.David.Baigelman006.jpeg"),
    tags: ["henry ", "baigelman", "pre-WWII", "band"],
    id: 1
  },
  {
    title: "Jolly Boys",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Jolly.Boys008.jpeg"),
    tags: ["jolly", "boys", "pre-WWII"],
    id: 1
  },
  {
    title: "Leon Glazer",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Leon.Glazer143.jpeg"),
    tags: [
      "leon",
      "glazer",
      "polish",
      "army",
      "may",
      "5/26/1927",
      "lodz",
      "pre-wwII"
    ]
  },
  {
    title: "Lodz Theatre",
    description: "",
    image: require("./SearchMedia/Pre-WWII/Lodz.Theatre426.jpeg"),
    tags: [
      "isaac ",
      "simon",
      "david",
      "baigelman",
      "music",
      "1800",
      "1939",
      "pre-WWII"
    ],
    id: 1
  },
  {
    title: "Young Gita Baigelman",
    description: "",
    image: require("./SearchMedia/WWII (during)/gita.Baigelman144 2.jpeg"),
    tags: ["lodz ", "gita", "front row", "3rd from left", "1942", "wwII"],
    id: 1
  },
  {
    title: "Happy Boys",
    description: "",
    image: require("./SearchMedia/WWII (during)/HappyBoys428.jpeg"),
    tags: [
      "henry ",
      "cham",
      "henry eizenman",
      "sam spais",
      "abram",
      "the happy boys",
      "1945",
      "music",
      "wwII"
    ],
    id: 1
  },
  {
    title: "Henry Baigelman 5",
    description: "",
    image: require("./SearchMedia/WWII (during)/Henry.Baigelman101 2.pdf"),
    tags: ["1945", "stamsreid", "wwII"],
    id: 1
  },
  {
    title: "Henry Baigelman 6",
    description: "",
    image: require("./SearchMedia/WWII (during)/Henry.Baigelman102.pdf"),
    tags: ["1945", "stamsreid", "wwII"],
    id: 1
  },
  {
    title: "Inmate Certificate 1",
    description: "",
    image: require("./SearchMedia/WWII (during)/InmateCert2377.pdf"),
    tags: ["henry", "inmate", "certificate", "1945", "wwII"],
    id: 1
  },
  {
    title: "Inmate Certificate 2",
    description: "",
    image: require("./SearchMedia/WWII (during)/InmateCertificate.pdf"),
    tags: ["henry", "inmate", "certificate", "1945", "wwII"],
    id: 1
  },
  {
    title: "Rachella",
    description: "",
    image: require("./SearchMedia/WWII (during)/Rachella148.pdf"),
    tags: [
      "henry",
      "rachella",
      "gita's sister",
      "glazer-merring",
      "1945",
      "wwII"
    ],
    id: 1
  },
  {
    title: "Abram Baigelman 9",
    description: "",
    image: require("./SearchMedia/Post-WWII/Abram.Baigelman097.jpeg"),
    tags: [
      "abram",
      "shlomo",
      "costa rica",
      "grave",
      "b. 1905 ostrowiec.poland",
      "d. 1982 san jose.costarica",
      "musician",
      "b. 07/15/1905",
      "certificate",
      "1945",
      "wwII"
    ],
    id: 1
  },
  {
    title: "Adolfo Spielman 1",
    description: "",
    image: require("./SearchMedia/Post-WWII/adolfo.spielman010.jpeg"),
    tags: [
      "brazil",
      "henry baigelmans's cousin",
      "adolfo",
      "spilman",
      "wife:baigelman descendant"
    ],
    id: 1
  },
  {
    title: "Beatrice Glazer 1",
    description: "",
    image: require("./SearchMedia/Post-WWII/Beatrice.Glazer001.jpg"),
    tags: [
      "beatrice",
      "glazer",
      "l-r",
      "lydia glazer",
      "1950",
      "beatrice glazer"
    ]
  },
  {
    title: "Beatrice Glazer 2",
    description: "",
    image: require("./SearchMedia/Post-WWII/Beatrice.Glazer002.jpg"),
    tags: ["beatrice", "glazer", "beatrice's daughter", "1973"],
    id: 1
  },
  {
    title: "Ed Silver 1",
    description: "",
    image: require("./SearchMedia/Post-WWII/Ed.Silver087.jpeg"),
    tags: [
      "ed",
      "silver",
      "san jose symphony",
      "san francisco",
      "california",
      "april",
      "1951",
      "musician",
      "silberschatz"
    ]
  },
  {
    title: "Fonia 1",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia206.jpeg"),
    tags: ["fania's daughter", "justina", "glazer", "baby"]
  },
  {
    title: "Fonia 2",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia210.jpeg"),
    tags: ["beatrice glazer", "buenos aires", "1950"]
  },
  {
    title: "Fonia 3",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia211.jpeg"),
    tags: [
      "beatrice glazer",
      "lydia glazer",
      "mar del plata",
      "beach",
      "l-r",
      "argentina",
      "1957"
    ]
  },
  {
    title: "Fonia 4",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia212.jpeg"),
    tags: ["beatrice glazer", "lydia glazer", "l-r", "buenos aires", "1950"]
  },
  {
    title: "Fonia 5",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia213 2.jpeg"),
    tags: [
      "fania",
      "glazer",
      "beatrice",
      "glazer",
      "lydia",
      "glazer",
      "l-r",
      "buenos aires",
      "1952",
      "post-wwii"
    ]
  },
  {
    title: "Fonia 6",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia214.jpeg"),
    tags: [
      "beatrice glazer",
      "lydia glazer",
      "fania glazer",
      "sevek glazer",
      "l-r",
      "buenos aires",
      "1950"
    ]
  },
  {
    title: "Fonia 7",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia216.jpeg"),
    tags: [
      "beatrice",
      "glazer",
      "lydia",
      "glazer",
      "fonia",
      "glazer",
      "buenos aires",
      "1950"
    ]
  },
  {
    title: "Fonia 8",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia216.jpeg"),
    tags: [
      "beatrice",
      "glazer",
      "lydia",
      "glazer",
      "fonia",
      "glazer",
      "buenos aires",
      "1950"
    ]
  },
  {
    title: "Fonia 9",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia217.jpeg"),
    tags: ["glazer", "lydia", "buenos aires", "beach", "1950"]
  },
  {
    title: "Fonia 10",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia218.jpeg"),
    tags: ["beatrice", "glazer", "lydia", "l-r", "buenos aires", "1950"]
  },
  {
    title: "Fonia 11",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia221.jpeg"),
    tags: [
      "sevek",
      "fonia",
      "beatrice",
      "lydia",
      "carriage",
      "l-r",
      "sevek glazer",
      "lydia glazer",
      "beatrice glazer",
      "buenos aires",
      "1950"
    ]
  },
  {
    title: "Fonia 12",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia223.jpeg"),
    tags: [
      "sevek glazer",
      "fania glazer",
      "beatrice glazer",
      "lydia glazer",
      "l-r",
      "mar del plata",
      "1957"
    ]
  },
  {
    title: "Fonia 13",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia225.jpeg"),
    tags: [
      "mar del plata",
      "l-r",
      "fania glazer",
      "sevek glazer",
      "argentina",
      "beach",
      "1957"
    ]
  },
  {
    title: "Fonia 14",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia226.jpeg"),
    tags: [
      "sevek glazer",
      "beatrice glazer",
      "lydia glazer",
      "fania glazer",
      "l-r",
      "madrid",
      "spain",
      "1955"
    ]
  },
  {
    title: "Fonia 15",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia235 2.jpeg"),
    tags: ["beatrice glazer", "february", "buenos aires", "1964", "post ww2"]
  },
  {
    title: "Fonia 16",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia242.jpeg"),
    tags: ["sevek glazer", "justina glazer", "l-r", "paris", "1947"]
  },
  {
    title: "Fonia 17",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia244.jpeg"),
    tags: ["justina", "fonia", "1946"]
  },
  {
    title: "Fonia 18",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia245.jpeg"),
    tags: ["fania glazer", "justina glazer", "paris", "1947"]
  },
  {
    title: "Fonia 19",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia246.jpeg"),
    tags: ["fania glazer", "justina glazer", "paris", "1947"]
  },
  {
    title: "Fonia 20",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia247.jpeg"),
    tags: ["justina", "lodz", "1946", "post wwii"]
  },
  {
    title: "Fonia 21",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia248.jpeg"),
    tags: ["justina glazer", "fania glazer", "paris", "1947"]
  },
  {
    title: "Fonia 22",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia249.jpeg"),
    tags: ["justina glazer", "beatrice glazer", "buenos aires", "1949"]
  },
  {
    title: "Fonia 23",
    description: "",
    image: require("./SearchMedia/Post-WWII/Fonia250.jpeg"),
    tags: ["justina glazer", "portrait", "1947"]
  },
  {
    title: "Sevek 1",
    description: "",
    image: require("./SearchMedia/Post-WWII/glazer195.jpeg"),
    tags: ["sevek", "glazer", "israel", "1946"]
  },
  {
    title: "Jack Baigelman 1",
    description: "",
    image: require("./SearchMedia/Post-WWII/Jack.Baigelman059.jpeg"),
    tags: [
      "jack",
      "baigelman",
      "wedding",
      "rita",
      "first on left: sam spais",
      "3rd from left: henry baigelman",
      "center front row:jack and rita"
    ]
  },
  {
    title: "Jack Baigelman 2",
    description: "",
    image: require("./SearchMedia/Post-WWII/Jack.Baigelman060.jpeg"),
    tags: [
      "jack",
      "baigelman",
      "wedding",
      "rita",
      "2nd row 3rd from left: henry baigelman",
      "1st row 1st from left: rita baigelman"
    ]
  },
  {
    title: "Jacques Merring",
    description: "",
    image: require("./SearchMedia/Post-WWII/Jacques.Merring001.jpg"),
    tags: [
      "jacques merring",
      "katie's father",
      "rachella merring's husband",
      "paris",
      "1951"
    ]
  },
  {
    title: "Justina Glazer",
    description: "",
    image: require("./SearchMedia/Post-WWII/justina198.jpeg"),
    tags: [
      "justina glazer",
      "sevek glazer",
      "toby glazer grave",
      "riva's grandmother",
      "l-r",
      "cemetery",
      "lodz"
    ]
  },
  {
    title: "Katie 1",
    description: "",
    image: require("./SearchMedia/Post-WWII/katie154.jpeg"),
    tags: [
      "katie",
      "rachella",
      "rachella's daughter",
      "4th birthday",
      "paris",
      "birthday",
      "post 1950"
    ]
  },
  {
    title: "Katie 2",
    description: "",
    image: require("./SearchMedia/Post-WWII/katie158.jpeg"),
    tags: ["katie", "baby", "grandmother merring", "paris", "1952", "post 1950"]
  },
  {
    title: "Katie 3",
    description: "",
    image: require("./SearchMedia/Post-WWII/katie160.jpeg"),
    tags: [
      "katie",
      "rachella",
      "rachella's daughter",
      "dog",
      "german shepard",
      "france",
      "1956",
      "post 1950"
    ]
  },
  {
    title: "Mina Glazer",
    description: "",
    image: require("./SearchMedia/Post-WWII/Mina.Glazer002.jpg"),
    tags: ["mina glazer", "1946", "december"]
  },
  {
    title: "Mordecai 1",
    description: "",
    image: require("./SearchMedia/Post-WWII/Mordecai185.jpeg"),
    tags: [
      "mordecai glazer",
      "famiy",
      "grave",
      "l-r",
      "third from left",
      "samuel glazer",
      "mina glazer",
      "aryeh lander"
    ]
  },
  {
    title: "Pinek Baigelman 1",
    description: "",
    image: require("./SearchMedia/Post-WWII/Pinek.Baigelman042.jpeg"),
    tags: ["pinek", "baigelman", "grave site", "lodz", "chilek", "post wwii"]
  },
  {
    title: "Pinek Baigelman 2",
    description: "",
    image: require("./SearchMedia/Post-WWII/Pinek.Baigelman043.jpeg"),
    tags: ["pinek", "baigelman", "simon", "szymon", "grave", "d. 1937"]
  },
  {
    title: "Pinek Baigelman 3",
    description: "",
    image: require("./SearchMedia/Post-WWII/Pinek.Baigelman044.jpeg"),
    tags: ["pinek", "baigelman", "chonah baigelman", "lodz", "grave"]
  },
  {
    title: "Pinek Baigelman 4",
    description: "",
    image: require("./SearchMedia/Post-WWII/Pinek.Baigelman047.jpeg"),
    tags: ["pinek", "baigelman", "grave", "abram", "d. 1938", "lodz"]
  },
  {
    title: "Pola Glazer 1",
    description: "",
    image: require("./SearchMedia/Post-WWII/pola167.jpeg"),
    tags: [
      "pola glazer",
      "mina glazer",
      "samuel glazer",
      "cousin rose glazer b. new york",
      "jerusalem",
      "l-r",
      "cousins",
      "glazer factory"
    ]
  },
  {
    title: "Pola Glazer 2",
    description: "",
    image: require("./SearchMedia/Post-WWII/pola169.jpeg"),
    tags: ["mina glazer", "samuel glazer", "munich.germany", "l-r", "1947"]
  },
  {
    title: "Pola Glazer 3",
    description: "",
    image: require("./SearchMedia/Post-WWII/pola170.jpeg"),
    tags: [
      "mina glazer",
      "samuel glazer",
      "rachella glazer",
      "munich",
      "l-r",
      "1947"
    ]
  },
  {
    title: "Pola Glazer 4",
    description: "",
    image: require("./SearchMedia/Post-WWII/pola171.jpeg"),
    tags: [
      "mina glazer",
      "pola glazer",
      "mordecai glazer",
      "gita father",
      "l-r",
      "family",
      "tel aviv",
      "israel",
      "1949"
    ]
  },
  {
    title: "Pola Glazer 5",
    description: "",
    image: require("./SearchMedia/Post-WWII/pola172.jpeg"),
    tags: [
      "pola glazer",
      "mordecai glazer",
      "mina glazer",
      "tel aviv",
      "family",
      "l-r",
      "israel",
      "jerusalem",
      "1953"
    ]
  },
  {
    title: "Pola Glazer 6",
    description: "",
    image: require("./SearchMedia/Post-WWII/pola173.jpeg"),
    tags: [
      "mina glazer",
      "mordecai glazer",
      "samuel glazer",
      "tel aviv",
      "l-r",
      "beach",
      "1953"
    ]
  },
  {
    title: "Pola Glazer 7",
    description: "",
    image: require("./SearchMedia/Post-WWII/pola175.jpeg"),
    tags: ["samuel glazer", "germany", "l-r"]
  },
  {
    title: "Pola Glazer 8",
    description: "",
    image: require("./SearchMedia/Post-WWII/pola176.jpeg"),
    tags: [
      "rachel lander",
      "pola's daughter",
      "baby",
      "tel aviv",
      "israel",
      "1954",
      "post wwii"
    ]
  },
  {
    title: "Rachella 1",
    description: "",
    image: require("./SearchMedia/Post-WWII/Rachella151.jpeg"),
    tags: [
      "rachella",
      "katie",
      "september",
      "paris",
      "1951",
      "09/06/1951",
      "post 1950"
    ]
  },
  {
    title: "Rachella 2",
    description: "",
    image: require("./SearchMedia/Post-WWII/Rachella153.jpeg"),
    tags: [
      "rachella",
      "katie",
      "post 1950",
      "beach",
      "1955",
      "rachella's daughter",
      "france"
    ]
  },
  {
    title: "Sam Spielman",
    description: "",
    image: require("./SearchMedia/Post-WWII/Sam.Spielman067.jpeg"),
    tags: [
      "sam",
      "chiala",
      "spielman",
      "ocean",
      "beach",
      "henry baigelman's cousin",
      "1951",
      "7/4/1951",
      "post wwii"
    ]
  },
  {
    title: "Sam Dinner",
    description: "",
    image: require("./SearchMedia/Post-WWII/Samual.Dinner001.jpg"),
    tags: [
      "samuel glazer",
      "mini glazer",
      "l-r",
      "israel",
      "dinner",
      "post wwii"
    ]
  },
  {
    title: "Adolfo Szpilman",
    description: "",
    image: require("./SearchMedia/Modern/Adolfo.Szpilman099.jpeg"),
    tags: ["szpilman", "rio de janiero", "1998", "modern"]
  },

  {
    title: "Baigelmans in Argentina",
    description: "",
    image: require("./SearchMedia/Modern/Baigelman.Argentina001.jpg"),
    tags: [
      "sevek glazer",
      "fania glazer",
      "gita baigelman",
      "henry baigelman",
      "ruben tencer",
      "lydia's husband",
      "l-r",
      "argentina"
    ]
  },
  {
    title: "Beatrice Glazer",
    description: "",
    image: require("./SearchMedia/Modern/Beatrice.Glazer004.jpg"),
    tags: ["sevek glazer", "beatrice", "l-r", "1973"]
  },
  {
    title: "Henry Baigelman's Birth Certificate",
    description: "",
    image: require("./SearchMedia/Modern/Birth.Certificate454.jpeg"),
    tags: ["henry", "birth certificate", "1983", "modern"]
  },
  {
    title: "Calendar 1",
    description: "",
    image: require("./SearchMedia/Modern/Calendar453.jpeg"),
    tags: ["henry", "henry to riva", "calendar", "modern", "1977"]
  },
  {
    title: "Calendar 2",
    description: "",
    image: require("./SearchMedia/Modern/Calendar459.jpeg"),
    tags: ["happy days", "life reborn", "calendar", "modern", "2001"]
  },
  {
    title: "Carol 1",
    description: "",
    image: require("./SearchMedia/Modern/Carol343.jpeg"),
    tags: ["carol", "wedding", "ron", "1970", "modern"]
  },
  {
    title: "Carol 2",
    description: "",
    image: require("./SearchMedia/Modern/Carol344.jpeg"),
    tags: ["carol", "wedding", "1970", "modern"]
  },
  {
    title: "Carol 3",
    description: "",
    image: require("./SearchMedia/Modern/Carol345.jpeg"),
    tags: ["carol", "wedding", "ron", "1970", "modern"]
  },
  {
    title: "Ed Silver 2",
    description: "",
    image: require("./SearchMedia/Modern/Ed.Silver086.jpeg"),
    tags: [
      "ed silver",
      "san francisco",
      "san jose symphony",
      "california",
      "1951",
      "modern"
    ]
  },
  {
    title: "Ed Silver 3",
    description: "",
    image: require("./SearchMedia/Modern/Ed.Silver088.jpeg"),
    tags: ["ed silver", "tiburon", "san jose symphony", "1992", "modern"]
  },
  {
    title: "Ed Silver 4",
    description: "",
    image: require("./SearchMedia/Modern/Ed.Silver089.jpeg"),
    tags: ["ed silver", "tiburon", "san jose symphony", "1992", "modern"]
  },
  {
    title: "Ed Silver 5",
    description: "",
    image: require("./SearchMedia/Modern/Ed.Silver090.jpeg"),
    tags: ["ed silver", "tiburon", "san jose symphony", "1992", "modern"]
  },
  {
    title: "Ed Silver 6",
    description: "",
    image: require("./SearchMedia/Modern/Ed.Silver092.jpeg"),
    tags: ["ed silver", "tiburon", "san jose symphony", "1992", "modern"]
  },
  {
    title: "Ed Silver 7",
    description: "",
    image: require("./SearchMedia/Modern/Ed.Silver093.jpeg"),
    tags: ["ed silver", "tiburon", "san jose symphony", "1992", "modern"]
  },
  {
    title: "Ed Silver 8",
    description: "",
    image: require("./SearchMedia/Modern/Ed.Silver094.jpeg"),
    tags: ["ed silver", "tiburon", "san jose symphony", "1992", "modern"]
  },
  {
    title: "Ed Silver 9",
    description: "",
    image: require("./SearchMedia/Modern/Ed.Silver095.jpeg"),
    tags: ["ed silver", "tiburon", "san jose symphony", "1992", "modern"]
  },
  {
    title: "Feldafing Sheet Music",
    description: "",
    image: require("./SearchMedia/Modern/Feldafing476.jpeg"),
    tags: ["feldafing", "sheet music", "1999", "modern"]
  },
  {
    title: "Fonia 24",
    description: "",
    image: require("./SearchMedia/Modern/Fonia227.jpeg"),
    tags: ["fonia", "beatrice", "lydia", "sevek", "beach", "1968", "modern"]
  },
  {
    title: "Fonia 25",
    description: "",
    image: require("./SearchMedia/Modern/Fonia230.jpeg"),
    tags: ["fonia", "lydia", "sevek", "beach", "march", "1974", "modern"]
  },
  {
    title: "Fonia 26",
    description: "",
    image: require("./SearchMedia/Modern/Fonia232.jpeg"),
    tags: [
      "fania glazer",
      "fania's grandchild",
      "buenos aires",
      "beatrice",
      "dog",
      "1974",
      "modern"
    ]
  },
  {
    title: "Fonia 27",
    description: "",
    image: require("./SearchMedia/Modern/Fonia233.jpeg"),
    tags: ["fonia", "lydia", "beatrice", "may", "1968", "modern"]
  },
  {
    title: "Fonia 28",
    description: "",
    image: require("./SearchMedia/Modern/Fonia234.jpeg"),
    tags: ["beatrice glazer"]
  },
  {
    title: "Fonia 29",
    description: "",
    image: require("./SearchMedia/Modern/Fonia236.jpeg"),
    tags: ["fonia", "lydia", "beatrice", "november", "1967", "modern"]
  },
  {
    title: "Fonia 30",
    description: "",
    image: require("./SearchMedia/Modern/Fonia237.jpeg"),
    tags: ["lydia", "november", "1967", "modern"]
  },
  {
    title: "Fonia 31",
    description: "",
    image: require("./SearchMedia/Modern/Fonia238.jpeg"),
    tags: ["fonia", "lydia", "sevek", "november", "1967", "modern"]
  },
  {
    title: "Fonia 32",
    description: "",
    image: require("./SearchMedia/Modern/Fonia239.jpeg"),
    tags: ["lydia", "november", "1967", "modern"]
  },
  {
    title: "Henry Memoriam",
    description: "",
    image: require("./SearchMedia/Modern/Henry.Memoriam462.jpeg"),
    tags: ["henry", "memoriam", "newspaper", "2003", "modern"]
  },
  {
    title: "Henry Baigelman 7",
    description: "",
    image: require("./SearchMedia/Modern/Henry251.jpeg"),
    tags: [
      "henry baigelman",
      "gita baigelman",
      "lydia's son",
      "l-r",
      "buenos aires",
      "late 1960's"
    ]
  },
  {
    title: "Henry Baigelman 8",
    description: "",
    image: require("./SearchMedia/Modern/Henry252.jpeg"),
    tags: [
      "henry baigelman",
      "gita baigelman",
      "lydia's son",
      "fania glazer",
      "sevek glazer",
      "l-r",
      "buenos aires",
      "argentina"
    ]
  },
  {
    title: "Henry Baigelman 9",
    description: "",
    image: require("./SearchMedia/Modern/Henry253.jpeg"),
    tags: ["henry", "gita", "airport", "buenos aires", "late 1960's"]
  },
  {
    title: "Henry Baigelman 10",
    description: "",
    image: require("./SearchMedia/Modern/Henry254.jpeg"),
    tags: [
      "henry baigelman",
      "sevek glazer",
      "l-r",
      "buenos aires",
      "late 1960's"
    ]
  },
  {
    title: "Henry Baigelman 11",
    description: "",
    image: require("./SearchMedia/Modern/Henry255.jpeg"),
    tags: [
      "henry baigelman",
      "gita baigelman",
      "sevek glazer",
      "l-r",
      "buenos aires",
      "late 1960's"
    ]
  },
  {
    title: "Henry Baigelman 12",
    description: "",
    image: require("./SearchMedia/Modern/Henry256.jpeg"),
    tags: [
      "henry baigelman",
      "sevek glazer",
      "luggage",
      "l-r",
      "buenos aires",
      "late 1960's"
    ]
  },
  {
    title: "Henry Baigelman 13",
    description: "",
    image: require("./SearchMedia/Modern/Henry257.jpeg"),
    tags: ["henry baigelman", "luggage", "buenos aires", "late 1960's"]
  },
  {
    title: "Henry Baigelman 14",
    description: "",
    image: require("./SearchMedia/Modern/Henry367.jpeg"),
    tags: [
      "henry",
      "gita",
      "july",
      "kiamesha",
      "kiameska lake",
      "1991",
      "modern"
    ]
  },
  {
    title: "David's Humanitarian Award",
    description: "",
    image: require("./SearchMedia/Modern/Humanitarian.Award481.jpeg"),
    tags: ["david", "humanitarian award", "1994", "modern"]
  },
  {
    title: "Mordecai 2",
    description: "",
    image: require("./SearchMedia/Modern/Mordecai186.jpeg"),
    tags: ["mina", "samuel", "1977", "modern"]
  },
  {
    title: "Henry's Nursing Certificate",
    description: "",
    image: require("./SearchMedia/Modern/NursingCertificate436.jpeg"),
    tags: [
      "henry",
      "nursing admin",
      "certificate",
      "1972",
      "new york",
      "modern"
    ]
  },
  {
    title: "Pola Glazer 9",
    description: "",
    image: require("./SearchMedia/Modern/pola179.jpeg"),
    tags: [
      "rachela glazer-merring",
      "samual glazer",
      "lausanne.switzerland",
      "1977",
      "rooftop",
      "modern"
    ]
  },
  {
    title: "Pola Glazer 10",
    description: "",
    image: require("./SearchMedia/Modern/pola192.jpeg"),
    tags: ["pola", "samuel", "jerusalem", "1981", "modern"]
  },
  {
    title: "Pola Glazer 11",
    description: "",
    image: require("./SearchMedia/Modern/pola193.jpeg"),
    tags: ["riva", "pola", "may", "tel aviv", "1996", "modern"]
  },
  {
    title: "Rachel Lander",
    description: "",
    image: require("./SearchMedia/Modern/Rachel188.jpeg"),
    tags: [
      "rachel lander",
      "ehoud samsanov",
      "tel aviv",
      "wedding",
      "may",
      "1974",
      "modern"
    ]
  },
  {
    title: "Rachel Lander 2",
    description: "",
    image: require("./SearchMedia/Modern/Rachel189.jpeg"),
    tags: [
      "rachel lander-samsanov",
      "ehoud samsanov",
      "california",
      "highway 1",
      "stinson",
      "1978",
      "modern"
    ]
  },
  {
    title: "Rachel Lander 3",
    description: "",
    image: require("./SearchMedia/Modern/Rachel190.jpeg"),
    tags: [
      "rachel lander-samsanov",
      "ehoud samsanov",
      "san francisco",
      "1978",
      "november",
      "modern"
    ]
  },
  {
    title: "Riva 1",
    description: "",
    image: require("./SearchMedia/Modern/Riva290.jpeg"),
    tags: ["riva", "january", "new york", "1981", "modern"]
  },
  {
    title: "Riva 2",
    description: "",
    image: require("./SearchMedia/Modern/Riva338.jpeg"),
    tags: ["new york", "avon", "new york", "1967", "modern"]
  },
  {
    title: "Riva 3",
    description: "",
    image: require("./SearchMedia/Modern/Riva346.jpeg"),
    tags: ["riva", "lake tahoe", "november", "1979", "modern"]
  },
  {
    title: "Riva 4",
    description: "",
    image: require("./SearchMedia/Modern/Riva347.jpeg"),
    tags: ["riva", "lake tahoe", "november", "1979", "modern"]
  },
  {
    title: "Riva 5",
    description: "",
    image: require("./SearchMedia/Modern/Riva348.jpeg"),
    tags: ["riva", "lake tahoe", "november", "car", "1979", "modern"]
  },
  {
    title: "Riva 6",
    description: "",
    image: require("./SearchMedia/Modern/Riva349.jpeg"),
    tags: ["lake tahoe", "november", "1979", "modern"]
  },
  {
    title: "Riva 7",
    description: "",
    image: require("./SearchMedia/Modern/Riva350.jpeg"),
    tags: ["riva", "marinwood", "car", "honda", "1978", "modern"]
  },
  {
    title: "Riva 8",
    description: "",
    image: require("./SearchMedia/Modern/Riva351.jpeg"),
    tags: ["riva", "david", "henry", "new york", "wedding", "1980", "modern"]
  },
  {
    title: "Riva 9",
    description: "",
    image: require("./SearchMedia/Modern/Riva352.jpeg"),
    tags: ["riva", "new york", "wedding", "1980", "modern"]
  },
  {
    title: "Riva 10",
    description: "",
    image: require("./SearchMedia/Modern/Riva353.jpeg"),
    tags: [
      "riva",
      "rachela",
      "pinek",
      "gita",
      "pola",
      "aryeh",
      "wedding",
      "1980",
      "modern"
    ]
  },
  {
    title: "Riva 11",
    description: "",
    image: require("./SearchMedia/Modern/Riva354.jpeg"),
    tags: ["riva", "bert", "1980", "modern"]
  },
  {
    title: "Riva 12",
    description: "",
    image: require("./SearchMedia/Modern/Riva355.jpeg"),
    tags: ["riva", "bert", "1980", "modern"]
  },
  {
    title: "Serj Invite",
    description: "",
    image: require("./SearchMedia/Modern/Serj482.jpeg"),
    tags: [
      "serj",
      "bar-mitzvah",
      "henry",
      "gita",
      "invitation",
      "rsvp",
      "2002",
      "modern"
    ]
  },
  {
    title: "Sevek 2",
    description: "",
    image: require("./SearchMedia/Modern/Sevek.Glazer003.jpg"),
    tags: ["sevek glazer", "fania glazer", "1974", "snow", "modern"]
  },
  {
    title: "Sevek 3",
    description: "",
    image: require("./SearchMedia/Modern/Sevek259.jpeg"),
    tags: [
      "sevek glazer",
      "fania glazer",
      "henry baigelman",
      "gita baigelman",
      "hallah milich",
      "jack glazer",
      "l-r",
      "modern"
    ]
  },
  {
    title: "Sevek 4",
    description: "",
    image: require("./SearchMedia/Modern/Sevek260.jpeg"),
    tags: [
      "rose glazer",
      "hallah milich",
      "fania glazer",
      "carol glazer",
      "baigelman residence",
      "new york",
      "1981",
      "l-r",
      "modern"
    ]
  },
  {
    title: "Sevek 5",
    description: "",
    image: require("./SearchMedia/Modern/Sevek261.jpeg"),
    tags: [
      "gita baigelman",
      "henry baigelman",
      "baigelman residence",
      "new york",
      "1981",
      "l-r",
      "modern"
    ]
  },
  {
    title: "Sevek 6",
    description: "",
    image: require("./SearchMedia/Modern/Sevek262.jpeg"),
    tags: [
      "fania glazer",
      "sevek glazer",
      "rachelle glazer-merring",
      "paris",
      "1980's",
      "l-r",
      "modern"
    ]
  },
  {
    title: "Sevek 7",
    description: "",
    image: require("./SearchMedia/Modern/Sevek264.jpeg"),
    tags: [
      "henry baigelman",
      "sevek glazer",
      "fania glazer",
      "gita baigelman",
      "baigelman residence",
      "l-r",
      "new york",
      "modern"
    ]
  },
  {
    title: "Sevek 8",
    description: "",
    image: require("./SearchMedia/Modern/Sevek265.jpeg"),
    tags: [
      "henry baigelman",
      "beatrice glazer",
      "new york",
      "1981",
      "l-r",
      "modern"
    ]
  },
  {
    title: "Sevek 9",
    description: "",
    image: require("./SearchMedia/Modern/Sevek266.jpeg"),
    tags: ["sevek", "fonia", "san francisco", "1978", "december", "modern"]
  },
  {
    title: "Sevek 10",
    description: "",
    image: require("./SearchMedia/Modern/Sevek267.jpeg"),
    tags: [
      "sevek glazer",
      "golden gate bridge",
      "san francisco",
      "1978",
      "december",
      "modern"
    ]
  },
  {
    title: "Sevek 11",
    description: "",
    image: require("./SearchMedia/Modern/Sevek268.jpeg"),
    tags: ["sevek", "david", "riva", "glazer", "buenos aires", "1997", "modern"]
  },
  {
    title: "Sevek 12",
    description: "",
    image: require("./SearchMedia/Modern/Sevek269.jpeg"),
    tags: [
      "david berelson",
      "riva",
      "berelson",
      "fania glazer",
      "buenos aires",
      "1997",
      "modern"
    ]
  },
  {
    title: "Sevek 13",
    description: "",
    image: require("./SearchMedia/Modern/Sevek342.jpeg"),
    tags: ["sevek", "carol", "gita", "wedding", "oster", "modern", "1970"]
  },
  {
    title: "Simon Baigelman Note",
    description: "",
    image: require("./SearchMedia/Modern/Simon.Baigelman.Note461.jpeg"),
    tags: [
      "simon",
      "mount sanai",
      "ms. caroselli",
      "hospital",
      "2002",
      "modern"
    ]
  },
  {
    title: "Starski's Daughter",
    description: "",
    image: require("./SearchMedia/Modern/Starski.Daughter085.jpeg"),
    tags: [
      "starski",
      "starsky",
      "daugter",
      "wedding",
      "paris",
      "1998",
      "modern"
    ]
  },
  {
    title: "Starski",
    description: "",
    image: require("./SearchMedia/Modern/Starski082.jpeg"),
    tags: ["starski", "starsky", "gita", "henry", "1991", "modern"]
  },
  {
    title: "Starski 2",
    description: "",
    image: require("./SearchMedia/Modern/Starski083.jpeg"),
    tags: [
      "starski",
      "starsky",
      "wedding",
      "helen",
      "accordian player",
      "piano player",
      "new york",
      "1991",
      "modern"
    ]
  },
  {
    title: "Henry's Visual History Foundation Interview",
    description: "",
    image: require("./SearchMedia/Modern/visual.history480.jpeg"),
    tags: [
      "henry",
      "interview",
      "thanks",
      "visual history foundation",
      "1995",
      "modern"
    ]
  },
  {
    title: "Henry Windermere",
    description: "",
    image: require("./SearchMedia/Modern/Windernere441.jpeg"),
    tags: ["henry", "windermere", "rooftop", "1973", "modern"]
  },
  {
    title: "Avon Manufacturing 1",
    description: "",
    image: require("./SearchMedia/Riva/Avon Manufacturing(Back)001.jpg"),
    tags: [
      "avon manufacturing laboratories",
      "suffern.new york",
      "postcard",
      "letter",
      "summer",
      "1967",
      "summer camp"
    ]
  },
  {
    title: "Avon Manufacturing 2",
    description: "",
    image: require("./SearchMedia/Riva/Avon Manufacturing001.jpg"),
    tags: [
      "avon manufacturing laboratories",
      "suffern.new york",
      "postcard",
      "summer",
      "1967",
      "summer camp"
    ]
  },
  {
    title: "Concord Hotel 1",
    description: "",
    image: require("./SearchMedia/Riva/Concord Hotel (back)001.jpg"),
    tags: [
      "concord hotel",
      "kiamesha lake",
      "new york",
      "postcard",
      "catskill mountains",
      "borscht belt"
    ]
  },
  {
    title: "Concord Hotel 2",
    description: "",
    image: require("./SearchMedia/Riva/Concord Hotel (back)002.jpg"),
    tags: [
      "concord hotel",
      "kiamesha lake",
      "new york",
      "postcard",
      "catskill mountains",
      "borscht belt"
    ]
  },
  {
    title: "Concord Hotel 3",
    description: "",
    image: require("./SearchMedia/Riva/Concord Hotel (back)003.jpg"),
    tags: [
      "concord hotel",
      "kiamesha lake",
      "new york",
      "postcard",
      "summer",
      "riva",
      "catskill mountains",
      "borscht belt"
    ]
  },
  {
    title: "Concord Hotel 4",
    description: "",
    image: require("./SearchMedia/Riva/Concord Hotel001.jpg"),
    tags: [
      "concord hotel",
      "kiamesha lake",
      "new york",
      "postcard",
      "pool",
      "catskill mountains",
      "borscht belt"
    ]
  },
  {
    title: "Concord Hotel 5",
    description: "",
    image: require("./SearchMedia/Riva/Concord Hotel 002.jpg"),
    tags: [
      "concord hotel",
      "kiamesha lake",
      "new york",
      "postcard",
      "catskill mountains",
      "borscht belt"
    ]
  },
  {
    title: "Concord Hotel 6",
    description: "",
    image: require("./SearchMedia/Riva/Concord Hotel003.jpg"),
    tags: [
      "concord hotel",
      "kiamesha lake",
      "new york",
      "postcard",
      "catskill mountains",
      "borscht belt"
    ]
  },
  {
    title: "Gita 2",
    description: "",
    image: require("./SearchMedia/Riva/Gita361.jpeg"),
    tags: ["gita", "riva"]
  },
  {
    title: "Letter from Gita and Henry to Riva",
    description: "",
    image: require("./SearchMedia/Riva/Henry Gita Letter001.jpg"),
    tags: [
      "from gita and henry",
      "to riva",
      "july",
      "07/24",
      "letter",
      "catskill mountains"
    ]
  },
  {
    title: "Letter from Henry to Riva Envelope",
    description: "",
    image: require("./SearchMedia/Riva/Henry Letter (Back)001.jpg"),
    tags: [
      "from henry",
      "to riva",
      "envelope",
      "forest hills",
      "new york",
      "catskill mountains"
    ]
  },
  {
    title: "Letter from Henry to Riva",
    description: "",
    image: require("./SearchMedia/Riva/Henry Letter 003.jpg"),
    tags: [
      "from henry",
      "to riva",
      "july",
      "07/24",
      "letter",
      "catskill mountains"
    ]
  },
  {
    title: "Letter from Henry to Riva 2",
    description: "",
    image: require("./SearchMedia/Riva/Henry Letter(Back)002.jpg"),
    tags: [
      "from henry",
      "to riva",
      "letter",
      "postcard",
      "07/05/68",
      "1968",
      "letter",
      "catskill mountains"
    ]
  },
  {
    title: "Letter from Henry to Riva 3 Envelope",
    description: "",
    image: require("./SearchMedia/Riva/Henry Letter001.jpg"),
    tags: [
      "from henry",
      "to riva",
      "camp hi li",
      "envelope",
      "livington manor",
      "new york",
      "catskill mountains"
    ]
  },
  {
    title: "Letter from Henry to Riva 4 Envelope",
    description: "",
    image: require("./SearchMedia/Riva/Henry Letter002.jpg"),
    tags: [
      "from henry",
      "to riva",
      "camp hi li",
      "postcard",
      "catskill mountains"
    ]
  },
  {
    title: "Jack Baigelman 3",
    description: "",
    image: require("./SearchMedia/Riva/Jack.Baigelman061 2.jpeg"),
    tags: ["jack", "riva", "modern", "1981"]
  },
  {
    title: "Jack Baigelman 4",
    description: "",
    image: require("./SearchMedia/Riva/Jack370.jpeg"),
    tags: ["jack", "1 year old", "catskill mountains", "1953", "lakeside hotel"]
  },
  {
    title: "Jack Baigelman 5",
    description: "",
    image: require("./SearchMedia/Riva/Jack371.jpeg"),
    tags: ["jack", "1 year old", "mother", "rose glazer", "catskill mountains"]
  },
  {
    title: "Lakeside Hotel",
    description: "",
    image: require("./SearchMedia/Riva/Lakeside Hotel001.jpg"),
    tags: [
      "postcard",
      "lakeside hotel",
      "loch sheldrake",
      "new york",
      "catskill mountains"
    ]
  },
  {
    title: "Regal Hotel Postcard 1 Back",
    description: "",
    image: require("./SearchMedia/Riva/Regal Hotel (Back)001.jpg"),
    tags: ["regal hotel", "postcard", "falburgh.new york", "catskill mountains"]
  },
  {
    title: "Regal Hotel Postcard 1",
    description: "",
    image: require("./SearchMedia/Riva/Regal Hotel001.jpg"),
    tags: ["regal hotel", "postcard", "falburgh.new york", "catskill mountains"]
  },
  {
    title: "Regal Hotel Postcard 2",
    description: "",
    image: require("./SearchMedia/Riva/Regal Hotel002.jpg"),
    tags: ["regal hotel", "postcard", "falburgh.new york", "catskill mountains"]
  },
  {
    title: "Regal Hotel Postcard 2 Back",
    description: "",
    image: require("./SearchMedia/Riva/Regal Hotel002.jpg"),
    tags: ["regal hotel", "postcard", "falburgh.new york", "catskill mountains"]
  },
  {
    title: "Riva Camp Finale",
    description: "",
    image: require("./SearchMedia/Riva/Riva Camp Finale (Back)001.jpg"),
    tags: ["song", "play", "camp hi li", "color war", "catskill mountains"]
  },
  {
    title: "Riva Camp Finale Back",
    description: "",
    image: require("./SearchMedia/Riva/Riva Camp Finale001.jpg"),
    tags: ["camp hi li", "color war", "catskill mountains"]
  },
  {
    title: "Riva 13",
    description: "",
    image: require("./SearchMedia/Riva/Riva.Baigelman001.jpg"),
    tags: [
      "l-r",
      "sarah",
      "julie",
      "riva",
      "august 1962",
      "10 years old",
      "forest hills.new york"
    ]
  },
  {
    title: "Riva 14",
    description: "",
    image: require("./SearchMedia/Riva/Riva.Baigelman002.jpg"),
    tags: [
      "may",
      "l-r",
      "riva",
      "julie",
      "last day of school",
      "5th grade",
      "1963"
    ]
  },
  {
    title: "Riva 15",
    description: "",
    image: require("./SearchMedia/Riva/Riva.Baigelman003.jpg"),
    tags: [
      "riva",
      "1st birthday",
      "catskill mountains",
      "new york",
      "l-r",
      "rose glazer",
      "caroline lukin",
      "riva baigelman",
      "carol glazer"
    ]
  },
  {
    title: "Riva 16",
    description: "",
    image: require("./SearchMedia/Riva/Riva.Baigelman004.jpg"),
    tags: [
      "riva baigelman",
      "fallsburgh.new york",
      "lakeside hotel",
      "henry baigelman"
    ]
  },
  {
    title: "Riva 17",
    description: "",
    image: require("./SearchMedia/Riva/Riva.Baigelman005.jpg"),
    tags: [
      "lakeside hotel",
      "fallsburgh.new york",
      "gita baigelman",
      "henry baigelman"
    ]
  },
  {
    title: "Riva 18",
    description: "",
    image: require("./SearchMedia/Riva/Riva.Baigelman006.jpg"),
    tags: [
      "spring lake",
      "catskill mountains",
      "lakeside hotel",
      "l-r",
      "gita",
      "rose glazer",
      "hania lukin",
      "1953"
    ]
  },
  {
    title: "Riva 19",
    description: "",
    image: require("./SearchMedia/Riva/Riva.Baigelman007.jpg"),
    tags: [
      "l-r",
      "gita baigelman",
      "spring lake",
      "catskill mountains",
      "lakeside hotel",
      "1953"
    ]
  },
  {
    title: "Riva 20",
    description: "",
    image: require("./SearchMedia/Riva/Riva.Baigelman008.jpg"),
    tags: [
      "spring lake",
      "catskill mountains",
      "lakeside hotel",
      "l-r",
      "hania lukin",
      "gita baigelman",
      "1953"
    ]
  },
  {
    title: "Riva 21",
    description: "",
    image: require("./SearchMedia/Riva/Riva.Baigelman009.jpg"),
    tags: [
      "lakeside hotel",
      "catskill mountains",
      "spring lake",
      "riva",
      "1953"
    ]
  },
  {
    title: "Riva 22",
    description: "",
    image: require("./SearchMedia/Riva/Riva280.jpeg"),
    tags: [
      "riva",
      "new york",
      "baby",
      "berelson",
      "baigelman",
      "toby",
      "may",
      "1953",
      "b.august 1952"
    ]
  },
  {
    title: "Riva 23",
    description: "",
    image: require("./SearchMedia/Riva/Riva281.jpeg"),
    tags: [
      "riva",
      "new york",
      "baby",
      "berelson",
      "baigelman",
      "toby",
      "may",
      "1953",
      "b.august 1952"
    ]
  },
  {
    title: "Riva 24",
    description: "",
    image: require("./SearchMedia/Riva/Riva282.jpeg"),
    tags: ["riva", "new york", "baby", "1953"]
  },
  {
    title: "Riva 25",
    description: "",
    image: require("./SearchMedia/Riva/Riva283.jpeg"),
    tags: [
      "riva",
      "new york",
      "baby",
      "1953",
      "carraige",
      "post wwii",
      "background:abram schlamek",
      "henry baigelman's brother in law"
    ]
  },
  {
    title: "Riva 26",
    description: "",
    image: require("./SearchMedia/Riva/Riva284.jpeg"),
    tags: [
      "riva",
      "new york",
      "baby",
      "park",
      "2nd birthday",
      "august",
      "leo glazer's wife",
      "catskill mountains",
      "1954"
    ]
  },
  {
    title: "Riva 27",
    description: "",
    image: require("./SearchMedia/Riva/Riva285.jpeg"),
    tags: [
      "riva",
      "regal",
      "8th birthday",
      "august 22",
      "1960",
      "fallsburgh.new york",
      "catskill mountains",
      "post wwii"
    ]
  },
  {
    title: "Riva 28",
    description: "",
    image: require("./SearchMedia/Riva/Riva287.jpeg"),
    tags: [
      "riva",
      "school play",
      "1962",
      "pirates of penzance",
      "4th grade",
      "forest hills.new york",
      "post wwii"
    ]
  },
  {
    title: "Riva 29",
    description: "",
    image: require("./SearchMedia/Riva/Riva288.jpeg"),
    tags: [
      "riva",
      "new york city",
      "berelson",
      "baigelman",
      "june",
      "swing",
      "1958",
      "post wwii"
    ]
  },
  {
    title: "Riva 30",
    description: "",
    image: require("./SearchMedia/Riva/Riva289.jpeg"),
    tags: ["may dance", "riva", "5th grade", "forest hills", "1963"]
  },
  {
    title: "Riva 31",
    description: "",
    image: require("./SearchMedia/Riva/Riva290.jpeg"),
    tags: [
      "riva",
      "new york",
      "september",
      "1st day of 3rd grade",
      "8 years old",
      "1960",
      "modern"
    ]
  },
  {
    title: "Riva 32",
    description: "",
    image: require("./SearchMedia/Riva/Riva291.jpeg"),
    tags: [
      "riva",
      "last day",
      "graduation",
      "5th grade",
      "gita baigelman",
      "riva baigelman",
      "l-r",
      "1963"
    ]
  },
  {
    title: "Riva 33",
    description: "",
    image: require("./SearchMedia/Riva/Riva293.jpeg"),
    tags: [
      "may dance",
      "riva",
      "8 years old",
      "1961",
      "simon",
      "june",
      "post wwii",
      "brother",
      "5.5 years old"
    ]
  },
  {
    title: "Riva 34",
    description: "",
    image: require("./SearchMedia/Riva/Riva295.jpeg"),
    tags: ["l-r", "sam shlamek spais", "riva baigelman", "4 years old"]
  },
  {
    title: "Riva 35",
    description: "",
    image: require("./SearchMedia/Riva/Riva296.jpeg"),
    tags: ["riva baigelman", "4 years old", "nyc"]
  },
  {
    title: "Riva 36",
    description: "",
    image: require("./SearchMedia/Riva/Riva297.jpeg"),
    tags: [
      "first birthday",
      "riva",
      "spring lake hotel",
      "new york",
      "youngsville",
      "1953"
    ]
  },
  {
    title: "Riva 37",
    description: "",
    image: require("./SearchMedia/Riva/Riva298.jpeg"),
    tags: [
      "1 year old",
      "new york",
      "riva",
      "catskill mountains",
      "l-r",
      "hania lukin",
      "gita baigelman",
      "rose glazer",
      "henry baigelman"
    ]
  },
  {
    title: "Riva 38",
    description: "",
    image: require("./SearchMedia/Riva/Riva300.jpeg"),
    tags: ["riva", "15 months", "new york"]
  },
  {
    title: "Riva 39",
    description: "",
    image: require("./SearchMedia/Riva/Riva301.jpeg"),
    tags: [
      "birthday",
      "1 year old",
      "new york",
      "l-r",
      "caroline lukin",
      "riva",
      "carol glazer",
      "jack glazer",
      "1953",
      "catskill mountains"
    ]
  },
  {
    title: "Riva 40",
    description: "",
    image: require("./SearchMedia/Riva/Riva302.jpeg"),
    tags: ["riva", "1 year old", "birthday", "new york"]
  },
  {
    title: "Riva 41",
    description: "",
    image: require("./SearchMedia/Riva/Riva303.jpeg"),
    tags: ["riva", "1 year old", "new york"]
  },
  {
    title: "Riva 42",
    description: "",
    image: require("./SearchMedia/Riva/Riva304.jpeg"),
    tags: [
      "riva",
      "1 year old",
      "new york",
      "catskill mountains",
      "l-r",
      "hania lukin",
      "caroline lukin",
      "gita baigelman",
      "riva baigelman"
    ]
  },
  {
    title: "Riva 43",
    description: "",
    image: require("./SearchMedia/Riva/Riva305.jpeg"),
    tags: ["riva", "1 year old", "new york"]
  },
  {
    title: "Riva 44",
    description: "",
    image: require("./SearchMedia/Riva/Riva306.jpeg"),
    tags: [
      "l-r",
      "riva baigelman",
      "gita baigelman",
      "carol glazer",
      "1953",
      "new york"
    ]
  },
  {
    title: "Riva 45",
    description: "",
    image: require("./SearchMedia/Riva/Riva307.jpeg"),
    tags: [
      "1 year old",
      "lakeside hotel",
      "catskill mountains",
      "l-r",
      "gita baigelman",
      "riva baigelman",
      "henry baigelman",
      "1953"
    ]
  },
  {
    title: "Riva 46",
    description: "",
    image: require("./SearchMedia/Riva/Riva308.jpeg"),
    tags: [
      "riva",
      "family",
      "lakeside hotel",
      "l-r",
      "gita baigelman",
      "henry baigelman"
    ]
  },
  {
    title: "Riva 47",
    description: "",
    image: require("./SearchMedia/Riva/Riva309.jpeg"),
    tags: [
      "riva",
      "spring lake hotel",
      "1 year old",
      "l-r",
      "gita baigelman",
      "henry baigelman",
      "riva baigelman"
    ]
  },
  {
    title: "Riva 48",
    description: "",
    image: require("./SearchMedia/Riva/Riva310.jpeg"),
    tags: ["spring lake hotel", "l-r", "rose glazer", "gita baigelman"]
  },
  {
    title: "Riva 49",
    description: "",
    image: require("./SearchMedia/Riva/Riva311.jpeg"),
    tags: ["gita", "spring lake hotel", "gita baigelman"]
  },
  {
    title: "Riva 50",
    description: "",
    image: require("./SearchMedia/Riva/Riva312.jpeg"),
    tags: ["l-r", "henry", "gita", "spring lake hotel"]
  },
  {
    title: "Riva 51",
    description: "",
    image: require("./SearchMedia/Riva/Riva313.jpeg"),
    tags: ["l-r", "henry baigelman", "lakeside hotel"]
  },
  {
    title: "Riva 52",
    description: "",
    image: require("./SearchMedia/Riva/Riva314.jpeg"),
    tags: ["catskill mountains", "new york", "l-r", "gita baigelman", "riva"]
  },
  {
    title: "Riva 53",
    description: "",
    image: require("./SearchMedia/Riva/Riva315.jpeg"),
    tags: [
      "l-r",
      "carol glazer",
      "jack glazer",
      "5 and 2",
      "catskill mountains"
    ]
  },
  {
    title: "Riva 54",
    description: "",
    image: require("./SearchMedia/Riva/Riva316.jpeg"),
    tags: ["lakeside hotel", "l-r", "caroline lukin", "caroline's grandmother"]
  },
  {
    title: "Riva 55",
    description: "",
    image: require("./SearchMedia/Riva/Riva317.jpeg"),
    tags: ["henry", "riva", "lakeside hotel", "catskill mountains"]
  },
  {
    title: "Riva 56",
    description: "",
    image: require("./SearchMedia/Riva/Riva318.jpeg"),
    tags: ["spring lake hotel", "catskill mountains", "l-r", "henry baigelman"]
  },
  {
    title: "Riva 57",
    description: "",
    image: require("./SearchMedia/Riva/Riva319.jpeg"),
    tags: ["1954", "riva baigelman"]
  },
  {
    title: "Riva 58",
    description: "",
    image: require("./SearchMedia/Riva/Riva320.jpeg"),
    tags: [
      "november",
      "9/8/1955",
      "1955",
      "riva",
      "l-r",
      "gita baigelman",
      "jack glazer",
      "riva baigelman",
      "caroline lukin"
    ]
  },
  {
    title: "Riva 59",
    description: "",
    image: require("./SearchMedia/Riva/Riva321.jpeg"),
    tags: [
      "riva",
      "birthday",
      "midwood hotel",
      "catskill mountains",
      "1959",
      "7 years old"
    ]
  },
  {
    title: "Riva 60",
    description: "",
    image: require("./SearchMedia/Riva/Riva322.jpeg"),
    tags: [
      "riva",
      "8th birthday",
      "henry baigelman",
      "birthday",
      "regal hotel",
      "catskill mountains"
    ]
  },
  {
    title: "Riva 61",
    description: "",
    image: require("./SearchMedia/Riva/Riva323.jpeg"),
    tags: [
      "riva",
      "birthday",
      "1961",
      "tennis",
      "9 years old",
      "regal hotel",
      "catskill mountains",
      "fallsburgh.new york",
      "south"
    ]
  },
  {
    title: "Riva 62",
    description: "",
    image: require("./SearchMedia/Riva/Riva324.jpeg"),
    tags: [
      "riva",
      "8 years old",
      "1960",
      "tennis",
      "9 years old",
      "regal hotel",
      "catskill mountains",
      "fallsburgh.new york",
      "south"
    ]
  },
  {
    title: "Riva 63",
    description: "",
    image: require("./SearchMedia/Riva/Riva325.jpeg"),
    tags: ["riva", "simon", "1963", "11 years", "regal hotel"]
  },
  {
    title: "Riva 64",
    description: "",
    image: require("./SearchMedia/Riva/Riva326.jpeg"),
    tags: [
      "riva",
      "birthday",
      "swimming",
      "pool",
      "11 years",
      "regal hotel",
      "catskill mountains",
      "fallsburgh.new york",
      "south",
      "1963"
    ]
  },
  {
    title: "Riva 65",
    description: "",
    image: require("./SearchMedia/Riva/Riva327.jpeg"),
    tags: [
      "riva",
      "david greenbaum",
      "11 years",
      "swimming",
      "pool",
      "regal hotel",
      "catskill mountains",
      "fallsburgh.new york",
      "south"
    ]
  },
  {
    title: "Riva 66",
    description: "",
    image: require("./SearchMedia/Riva/Riva328.jpeg"),
    tags: [
      "riva",
      "friends",
      "catskill mountains",
      "regal hotel",
      "13 years old",
      "l-r",
      "irene weiss",
      "riva baigelman"
    ]
  },
  {
    title: "Riva 67",
    description: "",
    image: require("./SearchMedia/Riva/Riva329.jpeg"),
    tags: [
      "riva",
      "14 years",
      "camp hi li",
      "l-r",
      "lenore",
      "riva baigelman",
      "gail",
      "sheila",
      "judie",
      "betsy"
    ]
  },
  {
    title: "Letter from Rose to Riva",
    description: "",
    image: require("./SearchMedia/Riva/Rose Glazer Letter001.jpg"),
    tags: [
      "postcard",
      "from rose glazer",
      "to riva",
      "camp hi li",
      "catskill mountains"
    ]
  },
  {
    title: "Letter from Rose to Riva Back",
    description: "",
    image: require("./SearchMedia/Riva/Rose Glazer Letter(back)001.jpg"),
    tags: [
      "postcard",
      "from rose glazer",
      "to riva",
      "letter",
      "camp hi li",
      "catskill mountains"
    ]
  },
  {
    title: "Simon Baigelman 001",
    description: "",
    image: require("./SearchMedia/Riva/Simon.Baigelman001.jpg"),
    tags: [
      "august",
      "1951",
      "simon baigelman",
      "6.5 years old",
      "catskill mountains",
      "upstate new york"
    ]
  },
  {
    title: "Ushmim Concert",
    description: "",
    image: require("./SearchMedia/Riva/Ushmim.Concert471.jpeg"),
    tags: ["ushmim", "concert", "music", "henry", "david", "riva"]
  },
  {
    title: "Zalkin Lodge 1",
    description: "",
    image: require("./SearchMedia/Riva/Zalkin Lodge001.jpg"),
    tags: [
      "zalkin lodge",
      "greenfield park",
      "postcard",
      "new york",
      "catskill mountains"
    ]
  },
  {
    title: "Zalkin Lodge 1 Back",
    description: "",
    image: require("./SearchMedia/Riva/Zalkin Lodge (back)001.jpg"),
    tags: [
      "zalkin lodge",
      "greenfield park",
      "postcard",
      "new york",
      "catskill mountains"
    ]
  },
  {
    title: "Zalkin Lodge 2",
    description: "",
    image: require("./SearchMedia/Riva/Zalkin Lodge002.jpg"),
    tags: [
      "zalkin lodge",
      "greenfield park",
      "postcard",
      "new york",
      "pool",
      "catskill mountains"
    ]
  },
  {
    title: "Zalkin Lodge 2 Back",
    description: "",
    image: require("./SearchMedia/Riva/Zalkin Lodge (Back)002.jpg"),
    tags: [
      "zalkin lodge",
      "greenfield park",
      "postcard",
      "new york",
      "catskill mountains"
    ]
  }
];

// Music Player Options
const options = {
  //audio lists model
  audioLists: [
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      musicSrc: () => {
        return Promise.resolve(
          "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
        );
      }
    },
    {
      name: "Bedtime Stories",
      singer: "Jay Chou",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",
      musicSrc:
        "http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3"
    }
  ],

  //default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  //if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  theme: "light",

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  bounds: "body",

  //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //"auto|metadata|none" "true| false"
  preload: false,

  //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: true,

  //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  //The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,

  //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    top: 575,
    left: 55
  },

  // play mode text config of the audio player
  playModeText: {
    order: "In Order",
    orderLoop: "Loop",
    singleLoop: "Loop Once",
    shufflePlay: "Shuffle"
  },

  //audio controller open text  [ type `String | ReactNode` default 'open']
  openText: "Open",

  //audio controller close text  [ type `String | ReactNode` default 'close']
  closeText: "Close",

  // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
  notContentText: "List Empty",

  panelTitle: "Music",

  defaultPlayMode: "order",

  //audio mode        mini | full          [type `String`  default `mini`]
  mode: "mini",

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: true,

  //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: false,

  //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,

  //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: false,

  //audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  //drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  //Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  //play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  //reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  //download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: false,

  //loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: false,

  //lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: false,

  //Extensible custom content       [type 'Array' default '[]' ]
  extendsContent: [],

  //default volume of the audio player [type `Number` default `100` range `0-100`]
  defaultVolume: 100,

  //playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log("[currentPlayId] audio lists change:", currentPlayId);
    console.log("[audioLists] audio lists change:", audioLists);
    console.log("[audioInfo] audio lists change:", audioInfo);
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      "audio play track change:",
      currentPlayId,
      audioLists,
      audioInfo
    );
  },

  // custom music player root node
  getContainer() {
    return document.body;
  }
};
const App = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchBank, setSearchBank] = useState([]);
  const [darkMode, setDarkMode] = useState(fetchInitMode());
  const [open, setOpen] = useState(false);
  const [person, setPerson] = useState("");
  const [params, setParams] = useState(options);

  const handleClose = () => {
    setOpen(false);
  };

  const handleResultSelect = (e, { result }) => {
    setPerson(result);
    setValue(result.title);
    setOpen(true);
  };
  const handleSearchChange = (e, { value }) => {
    setIsLoading(true, value);
    setValue(value);
    setTimeout(() => {
      if (value.length < 1) {
        setIsLoading(false);
        setValue("");
        setResults([]);
      }
      const re = new RegExp(_.escapeRegExp(value), "");
      const isMatch = result => re in setIsLoading(false);
      setFilteredResults(_.filter(searchData, isMatch));
    }, 300);
  };
  const handleTagChange = (e, { value }) => {
    console.log("running HANDLETAGCHANGE");
    const searchQuery = value.toLowerCase();
    setIsLoading(true, value);
    setValue(value);
    let tagMatchArray = searchData;
    let runnerArray = [];

    setTimeout(() => {
      if (searchQuery.length === 0) {
        setIsLoading(false);
        setValue("");
        setFilteredResults([]);
        runnerArray = [];
      }
      const match = figure => {
        return figure.tagMatch === true;
      };

      tagMatchArray.forEach(figure => {
        figure.tags.forEach(tag => {
          figure.tagMatch = false;
          if (tag.includes(searchQuery)) {
            console.log("tag match found:", searchQuery);
            setLoading(false);
            figure.tagMatch = true;
            if (!runnerArray.includes(figure)) {
              runnerArray.push(figure);
            }
            console.log("Runner array:", runnerArray);
          }
        });
      });
      setFilteredResults(runnerArray);
      console.log("Filtered Results:", filteredResults);
    }, 300);
  };

  useEffect(() => {
    
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          setLoading(false);
          setTimeout(() => {
            setDone(true);
          }, 1000);
        });
    }, 2200);
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function fetchInitMode() {
    const isReturningUser = "dark" in localStorage;
    const storedMode = JSON.parse(localStorage.getItem("dark"));
    const userPreference = fetchFeaturePref();

    return storedMode || false;
  }
  function fetchFeaturePref() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme:dark)");
  }

  return (
    <Router>
      {!done ? (
        <FadeIn style={{ paddingTop: "100%" }}>
          <div className="loader" style={{ height: "100%" }}>
            <h1 className="lottie-text">The Berelson Project</h1>
            <h1 className="lottie-text">Building Lineage</h1>
            {!loading ? (
              <Lottie
                options={Loader}
                height={100}
                width={80}
                color="black"
                className="lottie"
              />
            ) : (
              <Lottie
                options={Loader}
                height={100}
                width={80}
                color="black"
                className="lottie"
              />
            )}
          </div>
        </FadeIn>
      ) : (
        <div className={darkMode ? "App dark-mode" : "App light-mode"} id="app">
          <Navbar className="navbar-header no-shadows" light expand="md">
            <NavbarBrand href="/#">
              {"Vessel Archives"}
            </NavbarBrand>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/archive">
                  Archive
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/tree">
                  Family Tree
                </Link>
              </NavItem>
              <NavItem>
                <Search
                  className="search-bar"
                  loading={isLoading}
                  onResultSelect={handleResultSelect}
                  onSearchChange={_.debounce(handleTagChange, 500, {
                    leading: true
                  })}
                  results={filteredResults}
                  value={value}
                  size="large"
                />
              </NavItem>
              <NavItem className="toggle-container">
                {darkMode ? (
                  <span
                    className="mode-toggle"
                    style={{ color: "pink" }}
                    onClick={() => setDarkMode(isDark => !isDark)}
                  >
                    ☾
                  </span>
                ) : (
                  <span
                    className="mode-toggle"
                    style={{ color: "darkgoldenrod" }}
                    onClick={() => setDarkMode(isDark => !isDark)}
                  >
                    ☀︎
                  </span>
                )}
              </NavItem>
            </Nav>
          </Navbar>

          <Switch>
            <Route
              path="/#"
              exact
              render={() => {
                return <Line />;
              }}
            />
            <Route
              path="/pre"
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
              path="/archive/"
              render={() => (
                <div>
                  <Archive />
                  <MDBFooter
                    class="fixed-bottom"
                    color={darkMode ? "dimgrey" : "grey"}
                    className="main-footer font-small pt-4 mt-4"
                  >
                    <MDBContainer fluid className="text-center text-md-left">
                      <MDBRow>
                        <MDBCol md="4">
                          <h5 className="title">The Berelson Project</h5>
                          <p>
                            An ancestral site built to display and document the
                            Berelson lineage in an archival effort.
                          </p>
                        </MDBCol>
                        <MDBCol md="4">
                          <h5 className="title">Explore</h5>
                          <ul>
                            <li className="list-unstyled">
                              <a href="/archive">Archive</a>
                            </li>
                            <li className="list-unstyled">
                              <a href="/tree">Family Tree</a>
                            </li>
                          </ul>
                        </MDBCol>
                        <MDBCol md="4">
                          <h5 className="title">Contact</h5>
                          <ul>
                            <li className="list-unstyled">
                              <p>
                                <i class="fas fa-home  mr-3"></i> Santa Cruz, CA
                                95062, US
                              </p>
                            </li>
                            <li className="list-unstyled">
                              <p>
                                <i class="fas fa-envelope mr-3"></i> Email
                              </p>
                            </li>
                            <li className="list-unstyled">
                              <p>
                                <i class="fas fa-phone mr-3"></i> Phone
                              </p>
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
              )}
            />

            <Route
              exact
              path="/tree"
              render={() => (
                <div>
                  <Tree />
                  <MDBFooter
                    class="fixed-bottom"
                    color={darkMode ? "dimgrey" : "grey"}
                    className="main-footer font-small pt-4 mt-4"
                  >
                    <MDBContainer fluid className="text-center text-md-left">
                      <MDBRow>
                        <MDBCol md="4">
                          <h5 className="title">The Berelson Project</h5>
                          <p>
                            An ancestral site built to display and document the
                            Berelson lineage in an archival effort.
                          </p>
                        </MDBCol>
                        <MDBCol md="4">
                          <h5 className="title">Explore</h5>
                          <ul>
                            <li className="list-unstyled">
                              <a href="/archive">Archive</a>
                            </li>
                            <li className="list-unstyled">
                              <a href="/tree">Family Tree</a>
                            </li>
                          </ul>
                        </MDBCol>
                        <MDBCol md="4">
                          <h5 className="title">Contact</h5>
                          <ul>
                            <li className="list-unstyled">
                              <p>
                                <i class="fas fa-home  mr-3"></i> Santa Cruz, CA
                                95062, US
                              </p>
                            </li>
                            <li className="list-unstyled">
                              <p>
                                <i class="fas fa-envelope mr-3"></i> Email
                              </p>
                            </li>
                            <li className="list-unstyled">
                              <p>
                                <i class="fas fa-phone mr-3"></i> Phone
                              </p>
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
              )}
            />
            <Route
              exact
              path="/about"
              render={() => (
                <div>
                  <About />
                  <MDBFooter
                    class="fixed-bottom"
                    color={darkMode ? "dimgrey" : "grey"}
                    className="main-footer font-small pt-4 mt-4"
                  >
                    <MDBContainer fluid className="text-center text-md-left">
                      <MDBRow>
                        <MDBCol md="4">
                          <h5 className="title">The Berelson Project</h5>
                          <p>
                            An ancestral site built to display and document the
                            Berelson lineage in an archival effort.
                          </p>
                        </MDBCol>
                        <MDBCol md="4">
                          <h5 className="title">Explore</h5>
                          <ul>
                            <li className="list-unstyled">
                              <a href="/archive">Archive</a>
                            </li>
                            <li className="list-unstyled">
                              <a href="/tree">Family Tree</a>
                            </li>
                          </ul>
                        </MDBCol>
                        <MDBCol md="4">
                          <h5 className="title">Contact</h5>
                          <ul>
                            <li className="list-unstyled">
                              <p>
                                <i class="fas fa-home  mr-3"></i> Santa Cruz, CA
                                95062, US
                              </p>
                            </li>
                            <li className="list-unstyled">
                              <p>
                                <i class="fas fa-envelope mr-3"></i> Email
                              </p>
                            </li>
                            <li className="list-unstyled">
                              <p>
                                <i class="fas fa-phone mr-3"></i> Phone
                              </p>
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
              )}
            />
            <div>
              <div>
                <MusicPlayer className="music-player" {...params} />
              </div>
              <div>
                <ScrollButton
                  className="scroll-up-button"
                  targetId={"app"}
                  behavior={"smooth"}
                  buttonBackgroundColor={darkMode ? "grey" : "white"}
                  buttonColor={darkMode ? "white" : "black"}
                  iconType={"arrow-up"}
                />

                {(function() {
                  if (open) {
                    return (
                      <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={open}
                        onHide={() => setOpen(false)}
                        className="modal-container"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title
                            className="modal-body"
                            id="contained-modal-title-vcenter"
                          >
                            {person.title}
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modal-body">
                          <img
                            alt={person.image}
                            class="search-profile"
                            src={person.image}
                          />
                          <p>{person.description}</p>
                        </Modal.Body>
                        <Modal.Footer className="modal-foot">
                          <Button
                            style={{ backgroundColor: "grey !important" }}
                            onClick={handleClose}
                          >
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    );
                  }
                })()}

                <LandingSpan />
              </div>

              <MDBFooter
                class="fixed-bottom"
                color={darkMode ? "dimgrey" : "grey"}
                className="main-footer font-small pt-4 mt-4"
              >
                <MDBContainer fluid className="text-center text-md-left">
                  <MDBRow>
                    <MDBCol md="4">
                      <h5 className="title">The Berelson Project</h5>
                      <p>
                        An ancestral site built to display and document the
                        Berelson lineage in an archival effort.
                      </p>
                    </MDBCol>
                    <MDBCol md="4">
                      <h5 className="title">Explore</h5>
                      <ul>
                        <li className="list-unstyled">
                          <Link to="/archive">Archive</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/tree">Family Tree</Link>
                        </li>
                      </ul>
                    </MDBCol>
                    <MDBCol md="4">
                      <h5 className="title">Contact</h5>
                      <ul>
                        <li className="list-unstyled">
                          <p>
                            <i class="fas fa-home  mr-3"></i> Santa Cruz, CA
                            95062, US
                          </p>
                        </li>
                        <li className="list-unstyled">
                          <p>
                            <i class="fas fa-envelope mr-3"></i> Email
                          </p>
                        </li>
                        <li className="list-unstyled">
                          <p>
                            <i class="fas fa-phone mr-3"></i> Phone
                          </p>
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
        </div>
      )}
    </Router>
  );
};

export default App;
