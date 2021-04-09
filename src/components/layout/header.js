import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavItem, Fade } from "reactstrap";
import { NavLink } from "react-router-dom";
import Hamburger from 'shared/hamburgerMenuButton/hamburger';
import './header.css'


const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);


    return (
        <>
            <Fade>
                <Navbar light color="light" expand="md" id="navb" >
                    <NavbarBrand>
                        <NavLink className="nav-link" to="/" >
                            <h2 className="initialsStyle"><span className="logoStyle">R</span>ecipe<span className="logoStyle">H</span>ouse</h2>
                        </NavLink>
                    </NavbarBrand>

                    <Hamburger isNavOpen={isNavOpen} toggleNav={toggleNav} />

                    <Collapse isOpen={isNavOpen} navbar >
                        <Nav className="ml-auto" navbar >
                            <NavItem>
                                <NavLink className="nav-link btn signUpBtnStyle" to="/signup">
                                    Sign Up
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link btn signInBtnStyle" to="/login">
                                    Sign In
                                </NavLink>
                            </NavItem>


                        </Nav>
                    </Collapse>
                </Navbar>
            </Fade>
        </>
    )
}


export default Header;