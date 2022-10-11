import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div class="nav">
            <input type="checkbox" id="nav-check" />
            <div class="nav-header">
                <div class="nav-title">
                    EDU QUIZZES
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div class="nav-links">
                <Link to="/">Home</Link>
                <Link to="/topics">Qiuze Topics</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blogs">Blogs</Link>

            </div>
        </div>
    );
};

export default Nav;