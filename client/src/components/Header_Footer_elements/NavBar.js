import React from 'react';
import UserListComponent from '../UserComponents/UserListComponent';
import './NavBar.css';

const NavBar = ({allUsers, onSelection}) => {

    return(
        <header>
            <img width="20%" src="/NhsLogo.png" alt="NHS Logo"/>
        <ul>
            <li className="navLink">
                <a href="/">Home</a>
            </li>
            <li className="navLink">
                <a href="/services">Find Services</a>
            </li>
            <li className="navLink">
                <a href="/reminders">Reminders</a>
            </li>
            <li className="navLink">
                <a href="/user">User Details</a>
            </li>
        </ul>
        <UserListComponent allUsers={allUsers} onSelection={onSelection} />
        </header>
    )
}
export default NavBar;