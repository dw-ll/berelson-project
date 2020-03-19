import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { Switch } from "react-router";
import Greeting from "react-lazy-hero";
import TextLoop from "react-text-loop";
import classNames from 'classnames';
import Lodz from "../Media/lodz.jpg";
import Archive from './archive.jsx';
import Pre from "./pre.jsx";
import WW2 from "./ww2.jsx";
import Post from "./post.jsx";
import Modern from "./present.jsx";
import Tree from './tree.jsx';
import Slideshow from "./Slideshow.js";
import DavidProfile from "../Media/Pre-WWII/DavidProfile.jpeg";
import DavidRouter from "../profiles/component/people/pre_david.jsx";
import HenryProfile from "../Media/Post-WWII 2/Henry.Baigelman119 2.jpeg";
import HenryRouter from "../profiles/component/people/pre_henry.jsx";
import RivaRouter from "../profiles/component/people/present_riva.jsx";
import Baigelman from "./Baigelman.js";
import Glazer from './Glazer.js'

import $ from "jquery";
const routes = [
  {
    component: Archive,
    path:'/archive'
  },
  {
    component: Tree,
    path: "/tree"
  },
  {
    component: Pre,
    path: `${process.env.PUBLIC_URL}/pre/`
  },
  {
    component: WW2,
    path: "/ww2"
  },
  {
    component: Post,
    path: "/post"
  },
  {
    component: Modern,
    path: "/present"
  },
  {
    component: DavidRouter,
    path: "/pre/david/"
  },
  {
    component: HenryRouter,
    path: "/pre/henry/"
  },
  {
    component: RivaRouter,
    path: "/present/riva/"
  },
  {
    component: Baigelman,
    path: "/baigelman-family"
  },
  {
    component: Glazer,
    path: "/glazer-family"
  }
];
const slides = [
  {
    city: "Baigelman",
    path: "/baigelman-family",
    img: require("../Media/Modern/Baigelman.Argentina001.jpg")
  },
  {
    city: "Glazer",
    path: "/glazer-family",
    img: require("../Media/Modern/Sevek.Glazer003.jpg")
  },
  {
    city: "Archives",
    path: "/archive",
    img: require("../Media/Modern/Calendar459.jpeg")
  },
  {
    city: "Family Tree",
    path: "/tree",
    img: require("../Media/Modern/Henry251.jpeg")
  }
];

$(function() {
  $("#david-profile").hover(
    function() {
      console.log("Hovering.");
      $(".hover-text-container").append(
        "<h4 class='hover-text'>David was part of the last group of Lodz Jews to be deported to Auschwitz. He brought his violin and all his scores with him Even in the camp, he tried to provide entertainment for his fellow Jews.</h4>\
        <h5 class= 'hover-text-click' > Click David's portrait to view his full profile.</h5>"
      );
      $(".hover-text").fadeIn(10000);
      $(".hover-prompt").hide();
    },
    function() {
      $(".hover-text-container").html("");
      $(".hover-prompt").show();
    }
  );

  $("#henry-profile").hover(
    function() {
      $(".hover-text-container").html(
        "<h4 class='hover-text'> Chaim (later: Henry) Baigelman was a violinist, saxophonist and composer and the only one out of nine musical siblings to survive the war. He was a member of a family band, The Jolly Boys, which he revived in post-war Germany under the name The Happy Boys, playing jazz concerts for American soldiers and Jewish survivors. </h4>\
         <h5 class= 'hover-text-click' > Click Henry's portrait to view his full profile.</h5>"
      );
      $(".hover-text").fadeIn(10000);
      $(".hover-prompt").hide();
    },
    function() {
      $(".hover-text-container").html("");
      $(".hover-text-container").html("");
      $(".hover-prompt").show();
    }
  );
});

export default class Span extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = {
      activeSlide: -1,
      prevSlide: -1,
      sliderReady: false
    };
  }
  handleScrollToElement(event) {
    window.scrollTo(0, this.myRef.current.offsetTop);
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;

    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          {routes.map((route, i) => (
            <Route
              path={route.path}
              key={i}
              exact
              render={() => {
                return <route.component />;
              }}
            />
          ))}

          <div>
            <div className="greet">
              <div
                className={classNames("slider", { "s--ready": sliderReady })}
              >
                <p className="slider__top-heading"></p>
                <div className="slider__slides">
                  {slides.map((slide, index) => (
                    <div
                      className={classNames("slider__slide", {
                        "s--active": activeSlide === index,
                        "s--prev": prevSlide === index
                      })}
                      key={slide.city}
                    >
                      <div className="slider__slide-content">
                        <h2 className="slider__slide-heading">
                          {slide.city.split("").map(l => (
                            <span>{l}</span>
                          ))}
                        </h2>
                        <Link className="slider-link" to={slide.path}>
                          <p className="slider__slide-readmore">Explore</p>
                        </Link>
                      </div>
                      <div className="slider__slide-parts">
                        {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                          <div className="slider__slide-part" key={i}>
                            <div
                              className="slider__slide-part-inner"
                              style={{ backgroundImage: `url(${slide.img})` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="slider__control"
                  onClick={() => this.changeSlides(-1)}
                />
                <div
                  className="slider__control slider__control--right"
                  onClick={() => this.changeSlides(1)}
                />
              </div>
            </div>
            <div className="intro-text-container" ref={this.scrollDiv}>
              <div class="container" style={{ marginTop: "35px" }}>
                <div className="intro-text-paragraph-container">
                  <h2 className="intro-text-loop">
                    The Baigelman (Beigelman) family of Łódź were &nbsp;
                    <TextLoop>
                      <span className="intro-text-loop">
                        prominent musicians
                      </span>
                      <span className="intro-text-loop"> composers</span>
                      <span className="intro-text-loop"> conductors</span>
                      <span className="intro-text-loop">
                        {" "}
                        theater performers
                      </span>
                    </TextLoop>{" "}
                  </h2>
                  <h4
                    style={{ textAlign: "left" }}
                    className="intro-text-paragraph"
                  >
                    The patriarch, Simon (Szymon) Baigelman was first oboe for
                    the Łódź Symphony Orchestra, which was populated mostly by
                    musicians related to the family including the last names of
                    Spielman, Mutzman, Ostrowiec, and Spaismacher. Perhaps the
                    most famous was prodigy David (Dawid) Beigelman (1887-1945),
                    a violinist, orchestra leader, and composer of Yiddish
                    theater music and songs. He became director of the Łódź
                    Yiddish Theater in 1912. Among other major accomplishments,
                    he arranged the music for the hugely popular S. Ansky play,
                    The Dybbuk. In 1929 he became composer and music director of
                    the Łódź Ararat Theater.
                  </h4>
                </div>
                <div class="row profiles">
                  <div class="col-4">
                    <h4
                      id="toggle-text"
                      style={{ textAlign: "center" }}
                      className="intro-text"
                    >
                      meet the family
                    </h4>
                    <h6 class="hover-prompt">
                      Hover over a portrait to learn more about that person.
                    </h6>

                    <div class="hover-text-container"></div>
                  </div>

                  <div class="col-4">
                    <Card id="david-profile" className="landing-card">
                      <Link to="/pre-henry">
                        <Card.Img src={DavidProfile}></Card.Img>
                      </Link>
                      <Card.Body>
                        <Card.Title>David Baigelman</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>

                  <div class="col-4">
                    <Card id="henry-profile" className="landing-card">
                      <Link to="/pre/henry/">
                        <Card.Img src={HenryProfile}></Card.Img>
                      </Link>
                      <Card.Body>
                        <Card.Title>Henry Baigelman</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
