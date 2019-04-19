import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Book It</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/search">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/saved">Saved</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;