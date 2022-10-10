import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className='name'><h1>Edu Quizes</h1></div>
                <div className='link'>
                    <Link to="/">Home</Link>
                    <Link to="/topics">Topics</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/blogs">Blogs</Link>
                </div>
            </nav>
            <div>

            </div>
        </div>
    );
};

export default Header;