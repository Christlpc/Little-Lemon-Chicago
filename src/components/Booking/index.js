import React, { useReducer } from "react";
import BookingForm from '../../components/BookingForm'

import './style.css';

import Section from "../Section";

import { updateTimes, initializeTimes } from "../../utils/global";

const Booking = () => {
    const [availableTimes, dispatchAvailableTimes ] = useReducer(updateTimes, initializeTimes());

    return (
        <Section sectionClass="booking">
            <div className="info-block">
                <h2>Book now</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <BookingForm availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} />
        </Section>
    )
}

export default Booking;