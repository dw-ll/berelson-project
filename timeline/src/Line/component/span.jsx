import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Switch } from "react-router";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView
} from "mdbreact";
import FoniaGreet from "../../Media/Post-WWII 2/Fonia213.jpeg";
import CarolGreet from "../../Media/Modern/Carol343.jpeg";
import EdGreet from "../../Media/Post-WWII 2/Ed.Silver091.jpeg";
import Fonia2Greet from "../../Media/Post-WWII 2/Fonia208 2.jpeg";

export default class Span extends Component {
  render() {
    return (
      <div>
        <div className="greet">
          <MDBCarousel
            activeItem={1}
            length={4}
            interval={2500}
            showControls={false}
            showIndicators={false}
            className="carousel z-depth-1"
            style={{ height: "750px", textAlign: "center" }}
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView className="img-slider">
                  <img
                    className="d-block w-100"
                    src={FoniaGreet}
                    alt="First slide"
                  />
                </MDBView>

                <MDBCarouselCaption>
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-6"></div>
                      <div class="col-sm-6"></div>
                    </div>
                  </div>
                  <div
                    className="scroll-down"
                    onClick={() => {
                      this.scrollDiv.current.scrollIntoView({
                        behavior: "smooth"
                      });
                    }}
                  ></div>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView className="img-slider">
                  <img
                    className="d-block w-100"
                    src={Fonia2Greet}
                    alt="First slide"
                  />
                </MDBView>

                <MDBCarouselCaption>
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-6"></div>
                      <div class="col-sm-6"></div>
                    </div>
                  </div>
                  <div
                    className="scroll-down"
                    onClick={() => {
                      this.scrollDiv.current.scrollIntoView({
                        behavior: "smooth"
                      });
                    }}
                  ></div>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={CarolGreet}
                    alt="Second slide"
                  />
                </MDBView>
                <MDBCarouselCaption>
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-6"></div>
                      <div class="col-sm-6"></div>
                    </div>
                  </div>
                  <div
                    className="scroll-down"
                    onClick={() => {
                      this.scrollDiv.current.scrollIntoView({
                        behavior: "smooth"
                      });
                    }}
                  ></div>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={EdGreet}
                    alt="Third slide"
                  />
                </MDBView>
                <MDBCarouselCaption>
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-6"></div>
                      <div class="col-sm-6"></div>
                    </div>
                  </div>
                  <div
                    className="scroll-down"
                    onClick={() => {
                      this.scrollDiv.current.scrollIntoView({
                        behavior: "smooth"
                      });
                    }}
                  ></div>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
        <ul className="eras">
          <li className="era-span">
            <a className="era-image">&nbsp;</a>
            <div className="l-container era-text-container">
              <div className="page-section__row era-text-inner-container">
                <div className="page-section__title-container era-text-break"></div>
                <div className="page-section__content era-text">
                  <h3 className="era-text-link">Before the War</h3>
                  <p className="era-date">
                    <span>1900-1950</span>
                  </p>
                  <div className="rich-text-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="era-span"></li>
        </ul>
      </div>
    );
  }
}
