// Service Component: Service.jsx
import React from "react";

// Importing Card Component:
import Card from "./Card.jsx";

// Importing CoursesInfo:
import CoursesInfo from "./CoursesInfo.jsx";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center section-title">Our Services</h1>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className="row gy-4">

                            {
                                CoursesInfo.map((value, index) => {
                                    return (
                                        <Card
                                            key={index}
                                            imgSrc={value.imgSrc}
                                            title={value.name}
                                            detail={value.detail}
                                            link={value.link} />
                                    );
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;