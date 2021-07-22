import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul>
                <li exact activeClassName="active" className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li exact activeClassName="active" className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                <li exact activeClassName="active" className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
            </ul>
        </nav>
    )
}
