import React from 'react';
import NavBar from '../componetns/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const NavLink = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default NavLink;