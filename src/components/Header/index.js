import React from "react";
import './style.css';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container header-wrap">
                {props.children}
            </div>
        </header>
    )
}

export default Header;