import React from "react";
import './style.css';

const SocialLinks = (props) => {
    return (
        <div className="social-links">
            <ul>
                {props.items && props.items.map( (item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.link || ""} target="_blank" rel="nofollow noreferrer">{item.text}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default SocialLinks;