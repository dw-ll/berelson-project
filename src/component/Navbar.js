import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import { connect } from 'react-redux';
import { changeMode } from '../redux/actions/changeMode.js';




const NavBar = (props) => {
    console.log(props);
    var dark = props.props.dark.dark;
    var changeMode = props.props.changeMode;
    return (

                <Navbar className="navbar-header no-shadows" light expand="md">
                    <NavbarBrand className="navbar-header-brand" href="/#">{"Vessel Archives"}</NavbarBrand>
                    < Nav className="ml-auto" navbar >
                        <NavItem>
                            <Link className="nav-link" to="/tree">
                                Family Tree
                </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/archive">
                                Archives
                </Link>
                        </NavItem>
                        <NavItem>
                            <SearchBar />
                        </NavItem>
                        <NavItem className="toggle-container">
                            {dark ? (
                                <span
                                    className="mode-toggle"
                                    style={{ color: "pink" }}
                                    onClick={changeMode}
                                >
                                    ☾
                                </span>
                            ) : (
                                    <span
                                        className="mode-toggle"
                                        style={{ color: "darkgoldenrod" }}
                                        onClick={changeMode}
                                    >
                                        ☀︎
                                    </span>
                                )}
                        </NavItem>
                    </Nav >
                </Navbar >
    );

}
export default withRouter(connect(null, { changeMode })(NavBar));