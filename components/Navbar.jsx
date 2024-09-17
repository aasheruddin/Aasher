import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

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
            <div className="social-links">
                <a href="https://www.linkedin.com/in/aasher-uddin-330407231/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/aasheruddin" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
