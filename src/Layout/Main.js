import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;