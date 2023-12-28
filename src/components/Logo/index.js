import React from "react";
import { Link } from 'react-router-dom';


import logo_url from '../../assets/Logo.svg';

const Logo = () => {
    return (
        <Link to="/" className="header-logo">
            <img src={logo_url} alt="Header logo" />
        </Link>
    )
}

export default Logo;