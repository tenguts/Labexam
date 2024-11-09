// src/components/Menu.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/styles.css';

const Menu = () => {
    return (
        <nav className="navbar">
            <h2 className="sidebar-title">Book Manager</h2>
            <NavLink to="/" className="menu-link" activeClassName="active-link">Home</NavLink>
            <NavLink to="/add" className="menu-link" activeClassName="active-link">Add Book</NavLink>
            <NavLink to="/edit" className="menu-link" activeClassName="active-link">Edit Books</NavLink>
        </nav>
    );
};

export default Menu;
