import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';

const ContactForm = (props) => {
    const navigate = useNavigate();

    const initialValues = {
        adress: "",
        phone: "",
        email: "",
        pp: "",
    }

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            adress: Yup.string().max(40, "Max 40 characters"),
            phone: Yup.string().required("Required"),
            email: Yup.string().email().required("Required"),
            pp: Yup.boolean().required("Required")
        }),
        onSubmit: (values) => {
            navigate("/thank-you");
        }
    })
    return (
        <div className="form-wrap form-wrap_full">
            <form onSubmit={formik.handleSubmit}>
                <div className="field-wrap">
                    {formik.errors.adress ? <div className="field-error">{formik.errors.adress}</div> : null}
                    <input
                        type="text"
                        id="adress"
                        name="adress"
                        placeholder="Adress"
                        onChange={formik.handleChange}
                        value={formik.values.adress}
                    />
                </div>
                <div className="field-wrap">
                    {formik.errors.phone ? <div className="field-error">{formik.errors.phone}</div> : null}
                    <input
                        type="phone"
                        id="phone"
                        name="phone"
                        placeholder="Phone number"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                </div>
                <div className="field-wrap">
                    {formik.errors.email ? <div className="field-error">{formik.errors.email}</div> : null}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
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
                        <span>I agree to <Link to="/privacy-policy">Privacy Policy</Link></span>
                    </label>
                </div>
                <button type="submit" className="btn btn_small">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;