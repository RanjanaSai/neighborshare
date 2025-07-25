import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="/add-item">Add Item |  <Link to="/map">MapView</Link> | <Link to="/my-requests">MyRequests</Link></Link>
        </nav>
    );
};

export default NavBar;