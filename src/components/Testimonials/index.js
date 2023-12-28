import React from "react";
import './style.css';

import Section from "../Section";

import {ReactComponent as StarSvg} from '../../assets/icons/star.svg';

const testimonialItems = [
    {
        username: 'Alex',
        feedback: 'Review text from Alex',
        imageSrc: require('../../assets/images/testimonials/alex.jpg'),
        rating: 4
    },
    {
        username: 'Sam',
        feedback: 'Review text from Sam',
        imageSrc: require('../../assets/images/testimonials/sam.jpg'),
        rating: 5
    },
    {
        username: 'Jon',
        feedback: 'Review text from Jon',
        imageSrc: require('../../assets/images/testimonials/jon.jpg'),
        rating: 4
    },
    {
        username: 'Alice',
        feedback: 'Review text from Alice',
        imageSrc: require('../../assets/images/testimonials/alice.jpg'),
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <Section sectionClass="testimonials">
            <h2 className="testimonials__title">Testimonials</h2>
            <div className="testimonials-items">
                <ul className="testimonials-items__wrap">
                    {testimonialItems.map((item, index) => (
                        <li key={index} className="testimonials-item">
                            <span className="testimonials-item__rating">
                                {[...Array(5)].map((starItem, index) => (
                                    <span className={index < item.rating ? "testimonials-item__star testimonials-item__star_active" : "testimonials-item__star"}>
                                        <StarSvg />
                                    </span>
                                ))}
                            </span>
                            <span className="testimonials-item__user">
                                <span className="testimonials-item__image"><img src={item.imageSrc} alt={item.username}/></span>
                                <span className="testimonials-item__username">{item.username}</span>
                            </span>
                            <span className="testimonials-item__feedback">{item.feedback}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

export default Testimonials;