import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
             <nav className='nav'> 

                <ul className='nav_link'>

                    <NavLink to={'/'} className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "" : "pending"
        }>Home</NavLink>

        <NavLink to={'/quiz'} className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "" : "pending"
        }>Quiz</NavLink>
        <NavLink to={'/statistics'} className={({ isActive, isPending }) =>
         isActive ? "active" : isPending ? "" : "pending"
        }>Statistics</NavLink>

        <NavLink to={'/about'} className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "" : "pending"
        }>About</NavLink>

        <NavLink to={'/contact'} className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "" : "pending"
        }>Contact us</NavLink>

    
        <NavLink to={'/blog'} className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "" : "pending"
        }>Blog</NavLink>


                </ul>

            </nav>
        </div>
    );
};

export default NavBar;