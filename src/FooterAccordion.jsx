// FooterAccordion Component: FooterAccordion.jsx
import React from "react";

const FooterAccordion = () => {
    return (
        <>
            <div
                className="accordion accordion-flush acc-visible"
                id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            PRODUCTS
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
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
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            PARTNERS
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
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
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            ADDRESS
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="ul-list">
                                <li>Rourkela,</li>
                                <li>Sundargarh,</li>
                                <li>Odisha, IND</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterAccordion;