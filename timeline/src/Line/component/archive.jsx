import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
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

              <Navbar
                className="navbar-header"
                theme="dark"
                light
                expand="md"
              >
                <NavbarBrand href="/">
                  {" The Berelson Project"}
                </NavbarBrand>
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

            
                <Gallery images={preImages} enableImageSelection={false}  />
        
            </div>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
export default Line;
