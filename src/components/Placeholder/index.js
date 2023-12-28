import React from "react";
import './style.css';

import Section from '../../components/Section';

import {ReactComponent as PlaceholderSVG} from '../../assets/icons/placeholder-page.svg';


const Placeholder = () => {
    return (
        <Section sectionClass="placeholder">
            <h2 className="placeholder__title">This page in the progress ...</h2>
            <PlaceholderSVG className="placeholder-image" />
        </Section>
    )
}

export default Placeholder;