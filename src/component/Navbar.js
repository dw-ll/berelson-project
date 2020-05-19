import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { changeMode } from '../redux/actions/changeMode.js';

const NavBar = (props) => {
    var dark = props.props.dark.dark;
    var changeMode = props.props.changeMode;
    const [searchInput, setSearchInput] = useState('');
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    }
    const search = () => {
        props.history.push(`/results/${searchInput}`)
        setSearchInput('');

    };
    return (
        <Navbar className={`${dark ? 'navbar-header dark-mode' : 'navbar-header'} no-shadows`} light expand="md">
            <NavbarBrand className="navbar-header-brand" href="/#">{"Vessel Archives"}</NavbarBrand>
            <Nav className="ml-auto my-auto" navbar >
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
                    <form class='input-form' onSubmit={search}>
                        <div class="input-search-wrapper">
                            <input type="text" class="form-control input-search" placeholder="Search.." aria-label="Photo Search" aria-describedby="photo-search" value={searchInput} onChange={handleSearch} onSubmit={search}>
                            </input>
                        </div>
                    </form>
                </NavItem>
                <NavItem className="toggle-container">
                    {dark ? (
                        <span
                            className="mode-toggle"
                            style={{ color: "pink" }}
                            onClick={changeMode}
                        >
                            <svg class="bi bi-moon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    ) : (
                            <span
                                className="mode-toggle"
                                style={{ color: "darkgoldenrod" }}
                                onClick={changeMode}
                            >
                                <svg class="bi bi-sun" width=".95em" height=".95em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
                                    <path fill-rule="evenodd" d="M8.202.28a.25.25 0 00-.404 0l-.91 1.255a.25.25 0 01-.334.067L5.232.79a.25.25 0 00-.374.155l-.36 1.508a.25.25 0 01-.282.19l-1.532-.245a.25.25 0 00-.286.286l.244 1.532a.25.25 0 01-.189.282l-1.509.36a.25.25 0 00-.154.374l.812 1.322a.25.25 0 01-.067.333l-1.256.91a.25.25 0 000 .405l1.256.91a.25.25 0 01.067.334L.79 10.768a.25.25 0 00.154.374l1.51.36a.25.25 0 01.188.282l-.244 1.532a.25.25 0 00.286.286l1.532-.244a.25.25 0 01.282.189l.36 1.508a.25.25 0 00.374.155l1.322-.812a.25.25 0 01.333.067l.91 1.256a.25.25 0 00.405 0l.91-1.256a.25.25 0 01.334-.067l1.322.812a.25.25 0 00.374-.155l.36-1.508a.25.25 0 01.282-.19l1.532.245a.25.25 0 00.286-.286l-.244-1.532a.25.25 0 01.189-.282l1.508-.36a.25.25 0 00.155-.374l-.812-1.322a.25.25 0 01.067-.333l1.256-.91a.25.25 0 000-.405l-1.256-.91a.25.25 0 01-.067-.334l.812-1.322a.25.25 0 00-.155-.374l-1.508-.36a.25.25 0 01-.19-.282l.245-1.532a.25.25 0 00-.286-.286l-1.532.244a.25.25 0 01-.282-.189l-.36-1.508a.25.25 0 00-.374-.155l-1.322.812a.25.25 0 01-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        )}
                </NavItem>
            </Nav >
        </Navbar >
    );

}
export default withRouter(connect(null, { changeMode })(NavBar));