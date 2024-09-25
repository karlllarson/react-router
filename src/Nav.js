import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <h3>MyLogo</h3>
            <ul className="nav-links">
                <Link style={{ textDecoration: 'none' }} to="/about"><li>About</li></Link>
                <Link style={{ textDecoration: 'none' }} to="/items"><li>Items</li></Link>
            </ul>
        </nav>
    )
}


