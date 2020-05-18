import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Greeting from "react-lazy-hero";
import "react-vertical-timeline-component/style.min.css";
import GreetImage from "../../Media/Post-WWII 2/rachella156.jpeg";
import { postEraObjects } from "./eraConfig";

class Line extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
    this.myRef = createRef(); // Create a ref object
    this.state = {
      popped: false,
    };
  }

  componentDidMount() {
    this.myRef.current.scrollIntoView({
      behavior: "auto",
    });
  }
  handleScrollToElement(event) {
    window.scrollTo(0, this.myRef.current.offsetTop);
  }
  handlePop = (e, i) => {
    e.preventDefault();

    this.setState({
      popped: i,
      anchorEl: e.currentTarget,
    });
  };
  handleRequestClose = () => {
    this.setState({
      popped: null,
    });
  };

  render() {
    return (
      <div ref={this.myRef} className="back">
        <div id="landing">
          <Greeting
            opacity="0.1"
            isCentered={true}
            imageSrc={GreetImage}
            className="greeting"
          >
            <div class="hero-message" align="center">
              <h3 style={{ color: "white", fontFamily: "Times" }}>
                After The War
              </h3>
              <div
                className="scroll-down"
                onClick={() => {
                  this.scrollDiv.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              ></div>
            </div>
          </Greeting>
        </div>
        <div ref={this.scrollDiv}>
          <div id="timeline-start" href="/timeline">
            <div className="era-starter-info">
              <h4 style={{ textAlign: "center" }}>Post World War 2</h4>
              <h6 style={{ textAlign: "center" }}>
                History and more information about the family after the second
                World War.
              </h6>
            </div>
          </div>
          <ul className="eras">
            {postEraObjects.map((person, i) => (
              <li className="era-span">
                <Link to={person.path} className="span-link">
                  <a
                    class={person.style}
                    style={{
                      backgroundImage: 'url("' + person.image + '")',
                    }}
                    href="!#"
                  >
                    &nbsp;
                  </a>
                </Link>
                <div className="l-container era-text-container">
                  <div className="page-section__row era-text-inner-container">
                    <div className="page-section__title-container era-text-break"></div>
                    <div className="page-section__content era-text">
                      <Link to={person.path} className="span-title-link">
                        <h3 className="era-text-link">{person.title}</h3>
                      </Link>
                      <p className="era-date">
                        <span>1900-1950</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Line;
