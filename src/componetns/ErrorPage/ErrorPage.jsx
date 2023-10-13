import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className='error-cotainer'>
            <h1>404</h1>
            <h3>Sorry, this Page doesn&#180;t exist</h3>
        <button className='error-btn'><Link to='/'>Go Home</Link></button>
        </div>
    );
};

export default ErrorPage;