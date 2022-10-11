import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {
    return (
        <div className='d-flex justify-content-around bg-secondary'>

            <div>
                <h3>Development Path</h3>
            </div>

            <div className='fs-4 text-decoration-none'>  
            <Link to='/'></Link>
            <Link to='/home'>Home</Link>
            {/* <Link to='/quiz'>Quiz</Link> */}
            <Link to='/chart'>Chart</Link>
            <Link to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default TopNav;