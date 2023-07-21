import React from "react";

const SubmitModal = (props) => {
    return (
        <>
            {/* Button trigger modal */}
            <button
                type="submit"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Submit
            </button>

            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel">
                                {
                                    (props.fullname === "" || props.phone === "" || props.email === "" || props.msg === "")
                                    ? <>Oops!</>
                                    : <>Congratulations</>
                                }
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                (props.fullname === "" || props.phone === "" || props.email === "" || props.msg === "")
                                ? <>Please fill all the fields for successful submission.</>
                                : <>
                                    Name: {props.fullname}
                                    <br />
                                    Phone number: {props.phone}
                                    <br />
                                    Email: {props.email}
                                    <br />
                                    Message: {props.msg}
                                    <br />
                                    <br />
                                    Thanks for showing interest. Your request have been sent to the officials.
                                </>
                            }
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubmitModal;