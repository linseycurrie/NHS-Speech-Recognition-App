import React from 'react';
import './NavBar.css';

const NavBar = () => {

    return(
        <header>
            <img width="20%" src="/NhsLogo.png" alt="NHS Logo"/>
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
            <li className="navLink">
                <a href="/reminders">Reminders</a>
            </li>
        </ul>
        </header>
    )
}
export default NavBar;