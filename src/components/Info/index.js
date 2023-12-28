import React from "react";
import './style.css';

import Section from "../Section";

const Info = (props) => {
    return (
        <Section sectionClass="info">
            <div className="info-content">
                {props.content.title && <h2 className="info-title">{props.content.title}</h2>}
                {props.content.subtitle && <p className="info-subtitle">{props.content.subtitle}</p>}
                {props.content.desc && <p className="info-desc">{props.content.desc}</p>}
            </div>
            <div className="info-images">
                {props.content.imageOne && <div className="info-image"><img src={props.content.imageOne} alt="One"/></div>}
                {props.content.imageTwo && <div className="info-image"><img src={props.content.imageTwo} alt="Two"/></div>}
            </div>
        </Section>
    )
}

export default Info;