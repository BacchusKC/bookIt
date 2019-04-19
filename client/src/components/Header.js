import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Book It</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/saved" className="nav-link">Saved</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;