import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import bookIcon from './images/bookIcon.png';
import { Navbar, Nav } from 'react-bootstrap';

function Header(props) {
    return (
        <div className="header">
            <Navbar bg="light" expand="sm">
                <Link to="/">
                    <img alt="" className="image" src={bookIcon} />
                </Link>
                <Link to="/" className="navbar-brand">Book It</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/search" className="nav-link">Search</Link>
                        <Link to="/saved" className="nav-link">Saved</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;