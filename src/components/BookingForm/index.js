import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './style.css';

import { submitAPI } from "../../utils/global";

const BookingForm = ({availableTimes, dispatchAvailableTimes, ...props}) => {
    const navigate = useNavigate();

    const availableOccasions = [
        "Birthday",
        "Anniversary"
    ];

    const initialValues = {
        date: "",
        time: availableTimes[0],
        guests: '1',
        occasion: availableOccasions[0],
        pp: "",
    }

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            date: Yup.date().required("Required"),
            time: Yup.string().required("Required"),
            guests: Yup.number().min(1, "Must be more the 1").max(6, "Must be less then 12").integer().required(),
            occasion: Yup.string().required("Required"),
            pp: Yup.boolean().required("Required")
        }),
        onSubmit: (values) => {
            const response = submitAPI(values);
            if (response) {
                localStorage.setItem("booking", JSON.stringify(values));
                navigate("/thank-you");
            };
        },
    })

    useEffect(() => dispatchAvailableTimes({ type: "UPDATE_TIMES", date: new Date(formik.values.date) }), [dispatchAvailableTimes, formik.values.date]);

    return (
        <div className="form-wrap booking-form">
            <form onSubmit={formik.handleSubmit}>
                <div className="field-wrap">
                    {formik.errors.date ? <div className="field-error">{formik.errors.date}</div> : null}
                    <label htmlFor="date">Choose date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        onChange={formik.handleChange}
                        value={formik.values.date}
                    />
                </div>

                <div className="field-wrap">
                    {formik.errors.time ? <div className="field-error">{formik.errors.time}</div> : null}
                    <label htmlFor="time">Choose time</label>
                    <select
                        id="time"
                        name="time"
                        onChange={formik.handleChange}
                        value={formik.values.time}
                    >
                        {availableTimes.map( (item, index) => <option data-testid="time-option" key={index}>{item}</option>)}
                    </select>
                </div>

                <div className="field-wrap">
                    {formik.errors.guests ? <div className="field-error">{formik.errors.guests}</div> : null}
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        name="guests"
                        onChange={formik.handleChange}
                        value={formik.values.guests}
                    />
                </div>

                <div className="field-wrap">
                    {formik.errors.occasion ? <div className="field-error">{formik.errors.occasion}</div> : null}
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        onChange={formik.handleChange}
                        value={formik.values.occasion}
                    >
                        {availableOccasions.map( (item, index) => <option key={index}>{item}</option>)}
                    </select>
                </div>

                <div className="field-wrap">
                    {formik.errors.pp ? <div className="field-error">{formik.errors.pp}</div> : null}
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            id="pp"
                            name="pp"
                            onChange={formik.handleChange}
                            value={formik.values.pp}
                        />
                        <span>I agree to <a href="/privacy-policy">Privacy Policy</a></span>
                    </label>
                </div>

                <button type="submit" className="btn btn_small" disabled={formik.isSubmitting}>Make Your reservation</button>
            </form>
        </div>
    )
}

export default BookingForm;