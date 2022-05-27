import React from 'react';
import reactLogo from "../images/logo192.png";
import "./style.css";

function Navbar() {
    return (
        <nav className='nav'>
            <img 
            src= {reactLogo}
            alt='React Logo'
            className="nav-icon"
            />
            <h3 className='nav-logo_text'>React Facts</h3>
            <h4 className='nav-title'>React Course Project - 1 </h4>

        </nav>
    );
}

export default Navbar;