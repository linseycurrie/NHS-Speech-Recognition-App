import React from 'react';
import './NavBar.css'

const NavBar = () => {

    return(
        <header>
            <div className="rainbow-logo">
                <img src="/NhsLogo.png" alt="NHS Logo"/>
            </div>
            <div className="nav-links">
                <ul>
                    <li className="navLink">
                        <a href="/">Home</a>
                    </li>
                    <li className="navLink">
                        <a href="/user">User Page</a>
                    </li>
                    <li className="navLink">
                        <a href="/services">Find Services</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default NavBar;