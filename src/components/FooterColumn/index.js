import React from "react";
import './style.css';

const FooterColumn = (props) => {
    return (
        <div className="footer-column">
            {props.title ? <h4 className="footer-column__title">{props.title}</h4> : null}
            <div className="footer-column__content">
                {props.children}
            </div>
        </div>
    )
}

export default FooterColumn;