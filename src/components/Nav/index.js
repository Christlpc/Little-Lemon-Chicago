import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './style.css';

import { ReactComponent as BurgerIcon } from '../../assets/icons/hamburger.svg';
import { ReactComponent as BurgerIconClose } from '../../assets/icons/hamburgerClose.svg';


const Nav = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleBurger = (e) => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {props.showBurger && <button aria-label="Toggle Menu" className="burger" onClick={handleToggleBurger}>{isOpen ? <BurgerIconClose/> : <BurgerIcon />}</button>}
            <nav className={isOpen ? "menu opened" : "menu"}>
                <ul>
                    {props.items && props.items.map( (item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.link || ""} onClick={handleToggleBurger} className={props.isActive ? "active" : ""}>{item.text}</NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Nav;