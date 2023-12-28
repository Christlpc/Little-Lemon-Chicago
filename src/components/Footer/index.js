import React from "react";
import './style.css';

import imageUrl from "../../assets/footer-logo.png";

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container footer-wrap">
                <img src={imageUrl} alt="Retauran food"/>
                {props.children}
            </div>
        </footer>
    )
}

export default Footer;