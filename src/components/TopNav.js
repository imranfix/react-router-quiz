import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {
    return (
        <div className='d-flex justify-content-around bg-secondary h-auto'>

            <div>
                <h3 className='path'>Development Path</h3>
            </div>

            <div className='fs-4'>  
            <Link to='/home'></Link>
            <Link className='responsive' to='/home'>Home</Link>
            <Link className='responsive' to='/chart'>Chart</Link>
            <Link className='responsive' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default TopNav;