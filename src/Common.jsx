// Common Component: Common.jsx
import React from "react";

// Importing Link:
import { Link } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">

                            <div className="row resp-cls">

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center btn-sub">
                                    <h1 className="home-h1">
                                        {props.name} <strong className="brand-name">CodeDrills</strong>
                                    </h1>
                                    <h2 className="my-3 home-h2">{props.description}</h2>
                                    <div className="mt-3 btn-sub">
                                        <Link
                                            to={props.visit}
                                            className="btn btn-outline-primary">{props.btnName}</Link>

                                    </div>
                                </div>

                                <div className="col-lg-3 order-1 order-lg-2 img-c">
                                    <img
                                        src={props.imgSrc}
                                        alt="home-img"
                                        className="home-img-animation" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;