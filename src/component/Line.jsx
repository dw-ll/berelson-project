import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import { Switch } from "react-router";
import "react-vertical-timeline-component/style.min.css";
import Archive from "./archive";
import Present from "./present";
import Pre from "./pre";
import Post from "./post";
import WWII from "./ww2";
import About from "./about";
import Tree from "./tree";
const routes = [
  {
    component: Pre,
    path: `${process.env.PUBLIC_URL}/pre/`
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
  },
  {
    component: Archive,
    path: "/archive/"
  },
  {
    component: Tree,
    path: "/tree/"
  }
];
export default class Line extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
    this.preScroll = createRef();
    this.warScroll = createRef();
    this.postScroll = createRef();
    this.presentScroll = createRef();
    this.attachRef = target => this.setState({ target });
    this.state = {
      popped: false
    };
  }

  handleScrollToElement(event) {
    window.scrollTo(0, this.myRef.current.offsetTop);
  }
  handlePop = (e, i) => {
    e.preventDefault();

    this.setState({
      popped: i,
      anchorEl: e.currentTarget
    });
  };
  handleRequestClose = () => {
    this.setState({
      popped: null
    });
  };

  render() {
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

          <div className="back">
            <div id="landing"></div>
          </div>
        </Switch>
      </Router>
    );
  }
}
render(<Line />, document.getElementById("root"));
