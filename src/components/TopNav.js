import React from 'react';
import icon from '../Pages/icon.png';
import { Link } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => {
    return (
        <div className='d-flex justify-content-around bg-secondary p-2'>

            <div>
                <h3 className='path'>Development
                <span className='path-second m-2'>Path</span><img className='img-icon' src={icon} alt="" /></h3>
            </div>

            <div className='fs-4'>  
            <Link to='/'></Link>
            <Link className='responsive' to='/home'>Home</Link>
            <Link className='responsive' to='/chart'>Chart</Link>
            <Link className='responsive' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default TopNav;