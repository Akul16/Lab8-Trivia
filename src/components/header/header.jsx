import React from 'react';
import './header.css';

const Header = () => {
    return (
        <nav>
            <div>
                <h1>Trivia</h1>
            </div>
            <div>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;
