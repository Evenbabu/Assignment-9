import React from 'react';
import Header from '../componetns/Header/Header';
import { Outlet } from 'react-router-dom';
import NavBar from '../componetns/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;