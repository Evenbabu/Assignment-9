import React from 'react';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faBars } from '@fortawesome/free-solid-svg-icons'
import github from './img/github.png'
import react from './img/react.png'
import javascript from './img/javascript.png'
import html from './img/html.png'




import './Header.css'

const Header = () => {
    return (
        <div>
            <div>
                <div className='banner'>
                    <div className='banner_logo_text'>
                        <div className='logo'>
                            <h1 className='text'>LOGO</h1>
                        </div>
                    <div className='banner_text'>
                    <h1 className='text'>Multistep <span className='quiz'>Quiz</span> Form</h1>
                    <p>Are you a budding computer programmer? Take our 10-question quiz to see how much you know about the world of coding! <br /> services or business projects </p>
                    </div>
                    <button className='btn_ply'>Play Us</button>

                    </div>
               
                <div className='banner_img'>
                    <img src={html} className='img' alt="" />
                    <img src={javascript} className='img' alt="" />
                    <img src={react} className='img' alt="" />
                    <img src={github} className='img' alt="" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;