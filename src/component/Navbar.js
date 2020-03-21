import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Context from "../Context.js";
import SearchBar from "./SearchBar.jsx";




const NavBar = () => {
    const [darkMode, setDarkMode] = useState(fetchInitMode());
    function fetchInitMode() {
        const storedMode = JSON.parse(localStorage.getItem("dark"));

        return storedMode || false;
    }

    return (
        <Context.Consumer>
            {context =>
                <Navbar className="navbar-header no-shadows" light expand="md">
                    <NavbarBrand className="navbar-header-brand" href="/#">{"Vessel Archives"}</NavbarBrand>
                    < Nav className="ml-auto" navbar >
                        <NavItem>
                            <Link className="nav-link" to="/archive">
                                Media
                </Link>
                        </NavItem>
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
                            {context.dark ? (
                                <span
                                    className="mode-toggle"
                                    style={{ color: "pink" }}
                                    onClick={() => setDarkMode(darkMode => !darkMode)}
                                >
                                    ☾
                                </span>
                            ) : (
                                    <span
                                        className="mode-toggle"
                                        style={{ color: "darkgoldenrod" }}
                                        onClick={() => setDarkMode(darkMode => !darkMode)}
                                    >
                                        ☀︎
                                    </span>
                                )}
                        </NavItem>
                    </Nav >
                </Navbar >
            }
        </Context.Consumer>
    );

}
export default NavBar;