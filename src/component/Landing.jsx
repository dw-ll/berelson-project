import React, { Component, createRef } from "react";
import { Link, withRouter } from "react-router-dom";
import classNames from "classnames";
import { connect } from "react-redux";
import { changeDock } from "../redux/actions/changeDock";
import { fetchLandingPhotos } from "../redux/actions/fetchLandingPhotos";

const publicIds = ["Henry251_qkb4sa"];

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
          img:
            "https://res.cloudinary.com/vessel-archives/image/upload/v1591053003/Baigelman%20Family%20Photos/Baigelman.Argentina001_qbrrks.jpg",
        },
        {
          city: "Glazer",
          path: "/glazer-family",
          img:
            "https://res.cloudinary.com/vessel-archives/image/upload/v1590269227/Baigelman%20Family%20Photos/Fonia228_xg6v8q.jpg",
        },
        {
          city: "Archives",
          path: "/archive",
          img:
            "https://res.cloudinary.com/vessel-archives/image/upload/v1590269725/Henry%20Document/Calendar459_h8afod.jpg",
        },
        {
          city: "Family Tree",
          path: "/tree",
          img:
            "https://res.cloudinary.com/vessel-archives/image/upload/v1590269284/Baigelman%20Family%20Photos/Henry251_qkb4sa.jpg",
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
    fetchLandingPhotos(publicIds);
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
                    <Link className="slider-link" to={slide.path}>
                      <h2 className="slider__slide-heading">
                        {slide.city.split("").map((l) => (
                          <span>{l}</span>
                        ))}
                      </h2>

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
export default withRouter(connect(null, { changeDock })(Span));
