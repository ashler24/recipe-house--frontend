import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import Hamburger from 'shared/hamburgerMenuButton/hamburger';


const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const logoStyle = {
        "color": "#34697f",
    }

    const initialsStyle = {
        "color": "#5ca1bc",
    }

    const signUpBtnStyle={
        "background":"#34697f",
        "color":"#ffffff",
        "border":0,
        "margin":"0.2rem",
    }

    const signInBtnStyle = {
        "color":"#5ca1bc",
        "border":"1px solid #34697f",
        "margin": "0.2rem",
    }

    return (
        <>
            <Navbar light color="light" expand="md" id="navb" fade="false">
                <NavbarBrand>
                    <h2 style={initialsStyle}><span style={logoStyle}>R</span>ecipe<span style={logoStyle}>H</span>ouse</h2>
                </NavbarBrand>

                <Hamburger isNavOpen={isNavOpen} toggleNav={toggleNav} />

                <Collapse isOpen={isNavOpen} navbar fade="false">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link btn" style={signUpBtnStyle} to="/signup">
                                Sign Up
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link btn" style={signInBtnStyle} to="/login">
                                Sign In
                            </NavLink>
                        </NavItem>


                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}


export default Header;