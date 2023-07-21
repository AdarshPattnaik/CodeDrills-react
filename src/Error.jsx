// Error Component: Error.jsx
import React from "react";

// Importing 404Error image:
import image from "./React-Images/404error.png";

// Importing Link & useNavigate:
import { Link, useNavigate } from "react-router-dom";

const Error = () => {

    const backPage = useNavigate();

    return (
        <>
            <div className="error-section">
            <img
                className="error-img"
                src={image}
                alt="error-img" />
            <Link
                type="button"
                class="btn btn-outline-primary"
                onClick={backPage(-1)}>Go Back</Link>

            </div>
        </>
    );
};

export default Error;