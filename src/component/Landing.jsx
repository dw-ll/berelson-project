import React, { Component, createRef } from "react";
import { Link, withRouter } from "react-router-dom";
import classNames from "classnames";
import { connect, useDispatch, useSelector } from "react-redux";
import { changeDock } from "../redux/actions/changeDock";
import { fetchLandingPhotos } from "../redux/actions/fetchLandingPhotos";

const publicIds = [
  "Baigelman.Argentina001_qbrrks",
  "Fonia228_tvfyc7",
  "Calendar459_h8afod",
  "Henry251_qkb4sa",
];

class Span extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.scrollDiv = createRef();
    this.changeDock = props.changeDock;
    this.IMAGE_PARTS = 4;
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = {
      activeSlide: -1,
      prevSlide: -1,
      sliderReady: false,
      slides: [
        {
          city: "Baigelman",
          path: "/baigelman-family",
          img: require("../Media/Modern/Baigelman.Argentina001.jpg"),
        },
        {
          city: "Glazer",
          path: "/glazer-family",
          img: require("../Media/Modern/Sevek.Glazer003.jpg"),
        },
        {
          city: "Archives",
          path: "/archive",
          img: require("../Media/Modern/Calendar459.jpeg"),
        },
        {
          city: "Family Tree",
          path: "/tree",
          img: require("../Media/Modern/Henry251.jpeg"),
        },
      ],
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
    console.log("Mounting");
    fetchLandingPhotos();
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
    const { length } = this.state.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;

    return (
      <div>
        <div className="greet">
          <div className={classNames("slider", { "s--ready": sliderReady })}>
            <p className="slider__top-heading"></p>
            <div className="slider__slides">
              {this.state.slides.map((slide, index) => (
                <div
                  className={classNames("slider__slide", {
                    "s--active": activeSlide === index,
                    "s--prev": prevSlide === index,
                  })}
                  key={slide.city}
                >
                  <div className="slider__slide-content">
                    <h2 className="slider__slide-heading">
                      {slide.city.split("").map((l) => (
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
      </div>
    );
  }
}
export default withRouter(
  connect(null, { changeDock, fetchLandingPhotos })(Span)
);
