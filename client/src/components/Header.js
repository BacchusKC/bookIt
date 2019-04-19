import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Book It</Link>
                <Link to="/search" className="nav-link">Search</Link>
                <Link to="/saved" className="nav-link">Saved</Link>
            </nav>
        </div>
    );
};

export default Header;