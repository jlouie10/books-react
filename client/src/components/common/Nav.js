import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <a href="/">Books</a>
            <ul>
                <li><a href="/">Search</a></li>
                <li><a href="/bookshelf">Bookshelf</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
