import React from "react";

import Hero from '../../components/Hero';
import Specials from '../../components/Specials';
import Testimonials from '../../components/Testimonials';
import Info from '../../components/Info';

import HeroImageSrc from '../../assets/images/restauranfood.jpg';
import InfoImageOne from '../../assets/images/restaurant.jpg';
import InfoImageTwo from '../../assets/images/restaurant chef B.jpg';

const pageInfo = {
    title: 'Little Lemon',
    subtitle: 'Chicago',
    desc: 'We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.',
    btnText: 'Reserve a Table',
    btnLink: '/reservations',
    image: HeroImageSrc
}

const Home = () => {
    return (
        <>
            <Hero content={pageInfo}/>
            <Specials />
            <Testimonials />
            <Info content={{
                title: 'Little Lemon',
                subtitle: 'Chicago',
                desc: ['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', <br/>, 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'],
                imageOne: InfoImageOne,
                imageTwo: InfoImageTwo
            }} />
        </>
    )
}

export default Home;