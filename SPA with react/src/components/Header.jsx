import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="header__navbar">
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/posts">posts</NavLink></li>
                <li><NavLink to="/dashboard">dashboard</NavLink></li>
            </nav>
        </header>
    );
};

export default Header;