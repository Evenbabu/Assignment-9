import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
const [bar , setBar] = useState(false)
const handalBar = () =>{

  setBar(!bar)
}

console.log(bar)
    return (
        <div>
             <nav className='nav'> 
             

              <FontAwesomeIcon onClick={()=>handalBar()}  className='bars' icon={faBars}></FontAwesomeIcon>
             
             
                <ul className={`nav_link ${bar ? 'active-bar' : 'disable-bar'}`}>

                    <NavLink to={'/'} className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "" : "pending"
        }>Home</NavLink>

        
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