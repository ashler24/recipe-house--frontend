import React from "react";
import './hamburger.css';

const Hamburger = ({ isNavOpen, toggleNav }) => {
    return (
        <>
            <button
                type="button"
                className={`hambuger-menu ${isNavOpen ? "menu--active" : ""}`}
                onClick={toggleNav}
            >
                <span className="hambuger-menu-inner"></span>
            </button>
        </>
    );
};

export default Hamburger;