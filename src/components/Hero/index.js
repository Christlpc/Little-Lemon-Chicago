import React from "react";
import { Link } from "react-router-dom";

import Section from "../Section";

import './style.css';

const Hero = (props) => {
    return (
        <Section sectionClass="hero">
            <div className="hero-content">
                {props.content.title && <h1 className="hero-title">{props.content.title}</h1>}
                {props.content.subtitle && <p className="hero-subtitle">{props.content.subtitle}</p>}
                {props.content.desc && <p className="hero-desc">{props.content.desc}</p>}
                {props.content.btnText && <Link to={props.content.btnLink} className="btn">{props.content.btnText}</Link>}
            </div>
            {props.content.btnText && (
                <div className="hero-image">
                    <img src={props.content.image} alt="Hero"/>
                </div>
            )}
        </Section>
    )
}

export default Hero;