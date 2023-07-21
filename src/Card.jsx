// Card Component: Card.jsx
import React from "react";

// Importing Link:
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgSrc} className="card-img-top" alt={props.imgSrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.detail}</p>
                        <Link to={props.link} className="btn btn-primary">Start</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;