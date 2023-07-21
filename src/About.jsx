// About Component: About.jsx
import React from "react";

// Importing Common Component:
import Common from "./Common.jsx";

// Importing About Image:
import Image from "../src/React-Images/coding-about.png";

const About = () => {

    const aboutPara = `Our mission is to provide free, high-quality coding courses to help people develop in-demand technical skills and launch coding careers. We believe everyone should have access to learning opportunities, regardless of financial background. You can get started right away by browsing our available courses and enrolling in one that interests you. If you have any questions, please don't hesitate to contact us - we're here to help!`;

    return (
        <>
            <Common
                name="Know much more about"
                description={aboutPara}
                imgSrc={Image}
                visit="/contact"
                btnName="Contact Now" />
        </>
    );
};

export default About;