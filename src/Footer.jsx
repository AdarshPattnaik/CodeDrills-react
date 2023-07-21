// Footer Component: Footer.jsx
import React from "react";

// Importing Link:
import { Link } from "react-router-dom";

// Material UI for Images:
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// Importing FooterAccordion Component:
import FooterAccordion from "./FooterAccordion.jsx";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className="overall-foot">
                {/* Upper Content  */}
                <div className="upper-foot">

                    {/* Info Content */}
                    <div className="brand-foot">
                        <h1 className="foot-name">CodeDrills</h1>
                        <p className="foot-para">CodeDrills is an amazing platform for learners to develop their skills to industry level. We provide varieties of technical courses which are on demand in today's world.</p>
                        <div className="foot-img">
                            <Button>
                                <Link to="https://www.facebook.com/adarsh.pattanaik.92">
                                    <FacebookIcon className="foot-btn" />
                                </Link>
                            </Button>
                            <Button>
                                <Link to="https://github.com/AdarshPattnaik">
                                    <GitHubIcon className="foot-btn" />
                                </Link>
                            </Button>
                            <Button>
                                <Link to="https://www.instagram.com/_ig_adarsh__/">
                                    <InstagramIcon className="foot-btn" />
                                </Link>
                            </Button>
                            <Button>
                                <Link to="https://www.linkedin.com/in/adarsh-pattnaik-41319026b">
                                    <LinkedInIcon className="foot-btn" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Footer Accordion */}
                    <FooterAccordion />

                    {/* Info Content */}
                    <div className="product-foot">
                        <h2 className="foot-titles">PRODUCTS</h2>
                        <div className="ul-list">
                            <li>Web Development</li>
                            <li>Data Science</li>
                            <li>Blockchain</li>
                            <li>Cyber Security</li>
                            <li>Ethical Hacking</li>
                            <li>Languages</li>
                            <li>AI</li>
                            <li>DSA</li>
                        </div>
                    </div>

                    {/* Info Content */}
                    <div className="partners-foot">
                        <h2 className="foot-titles">PARTNERS</h2>
                        <div className="ul-list">
                            <li>CodeWithHarry</li>
                            <li>Codepur</li>
                            <li>Apna College</li>
                            <li>codebasics</li>
                            <li>WsCube Tech</li>
                            <li>Ayush Singh</li>
                            <li>Gate Smashers</li>
                            <li>Code Eater</li>
                            <li>Shesh Chauhan</li>
                        </div>
                    </div>

                    {/* Info Content */}
                    <div className="address-foot">
                        <h2 className="foot-titles">ADDRESS</h2>
                        <div className="ul-list">
                            <li>Rourkela,</li>
                            <li>Sundargarh,</li>
                            <li>Odisha, IND</li>
                        </div>
                    </div>

                </div>

                {/* Lower Content */}
                <div className="lower-foot">
                    <h1>All rights reserved by CodeDrills © Copyright {year}</h1>
                </div>
            </footer>
        </>
    );
};

export default Footer;