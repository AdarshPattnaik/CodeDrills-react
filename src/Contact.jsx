// Contact Component: Contact.jsx
import React, { useState } from "react";

// Importing Submit Component:
import Submit from "./ModalSubmitButton.jsx";

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setData((prevData) => {
            return (
                {
                    ...prevData,
                    [name]: value,
                }
            );
        });
    };

    const formSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center section-title">Contact Us</h1>
            </div>

            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={formSubmit}>

                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your name" />
                            </div>

                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Phone</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Mobile Number" />
                            </div>

                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">Email Address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter your email" />
                            </div>

                            <div class="mb-3">
                                <label
                                    for="exampleFormControlTextarea1"
                                    class="form-label">Message</label>
                                <textarea
                                    class="form-control msg-area"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}></textarea>
                            </div>

                            <div className="col-12 submit-center">
                                <Submit
                                    fullname={data.fullname}
                                    phone={data.phone}
                                    email={data.email}
                                    msg={data.msg} />
                            </div>


                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;