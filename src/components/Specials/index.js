import React from "react";

import Section from '../../components/Section';
import { Link } from "react-router-dom";

import { ReactComponent as GoOrder } from '../../assets/icons/goOrder.svg';

import './style.css';

const Specials = () => {
    const specialItems = [
        {
            image: require('../../assets/images/greek salad.jpg'),
            title: 'Greek salad',
            desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            price: '$12.99',
            slug: '#',
        },
        {
            image: require('../../assets/images/bruchetta.jpg'),
            title: 'Bruchetta',
            desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            price: '$ 5.99',
            slug: '#',
        },
        {
            image: require('../../assets/images/lemon dessert.jpg'),
            title: 'Lemon Dessert',
            desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
            price: '$12.99',
            slug: '#',
        }
    ]

    return (
        <Section sectionClass="specials">
            <div className="specials-head">
                <h2 className="specials__title">Specials</h2>
                <Link to="/reservations" className="btn">Reserve a Table</Link>
            </div>
            <div className="specials-items">
                <ul className="specials-items__wrap">
                    {specialItems.map((item, index) => (
                        <li key={index} className="specials-item">
                            <div className="specials-item__image"><img src={item.image} alt={item.title}/></div>
                            <div className="specials-item__content">
                                <div className="specials-item__meta">
                                    <h4 className="specials-item__title">{item.title}</h4>
                                    <span className="specials-item__price">{item.price}</span>
                                </div>
                                <p className="specials-item__desc">{item.desc}</p>
                                <Link className="specials-item__link" to={"/order/" + item.slug}>Order a delivery <GoOrder /></Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

export default Specials;