import React from "react";

import Hero from '../../components/Hero';
import Booking from '../../components/Booking';

const pageInfo = {
    title: 'Reservation',
    description: ''
}
const Reservations = () => {
    return (
        <>
            <Hero content={pageInfo}/>
            <Booking />
        </>
    )
}

export default Reservations;