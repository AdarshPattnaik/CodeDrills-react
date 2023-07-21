// Home Component: Home.jsx
import React from "react";

// Importing Image:
import Image from "../src/React-Images/anime-girl-coder.png";

// Importing Common Component:
import Common from "./Common.jsx";

const Home = () => {
    return (
        <>
            <Common
                name="Learn your required skills with"
                description="Grow your skills and make yourself a skilled coder."
                imgSrc={Image}
                visit="/service"
                btnName="Get Started" />
        </>
    );
};

export default Home;