import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import {
    BrowserRouter as Router,
    Route,
    Link, Redirect,
    withRouter
} from "react-router-dom";
import searchData from '../json/searchData';
import { connect } from 'react-redux';
import { changeMode } from '../redux/actions/changeMode.js';
import { addSearchData } from '../redux/actions/addSearchData';




const NavBar = (props) => {
    console.log(props);
    var dark = props.props.dark.dark;
    var changeMode = props.props.changeMode;
    var addSearchData = props.props.addSearchData;
    console.log('NavProps:', props.props)
    const [searchInput, setSearchInput] = useState('');
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    }
    const search = () => {
        addSearchData(searchInput);
        setSearchInput('');
        
    };



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
                    <form class='form-inline photo-search' onSubmit={search}>
                        <input class='form-control mr-sm-2' type='search' value={searchInput} onChange={handleSearch} placeholder='Search...' aria-label='search'></input>
                    </form>
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
export default withRouter(connect(null, { changeMode, addSearchData })(NavBar));