import React from 'react';
import { NavLink } from 'react-router-dom'

function Saved(props) {
    return (
        <div>
            <h1>Test Saved</h1>
            <NavLink exact to="/search">Search</NavLink>
        </div>
    );
};

export default Saved;