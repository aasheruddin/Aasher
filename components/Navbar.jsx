import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="name">
                <h1>Aasher Uddin</h1>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
