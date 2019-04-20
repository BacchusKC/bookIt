import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import bookIcon from './images/bookIcon.png';

function Header(props) {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                   <img className="image" src={bookIcon} />
                </Link>
                <Link to="/" className="navbar-brand">Book It</Link>
                <Link to="/search" className="nav-link">Search</Link>
                <Link to="/saved" className="nav-link">Saved</Link>
            </nav>
        </div>
    );
};

export default Header;