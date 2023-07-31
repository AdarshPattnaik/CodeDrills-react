import React from "react";

// Importing React Media:
import HomeVideo from "../React-Media/welcome.mp4";

// Importing Link:
import { Link } from "react-router-dom";

// Material UI:
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
    let cur_date = new Date().getDate();
    let cur_month = new Date().getMonth();
    let cur_year = new Date().getFullYear();
    let cur_day = new Date().getDay();

    const classicTime = () => {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    const [currentTime, setCurrentTime] = React.useState(classicTime());

    const updateTime = () => {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        setCurrentTime(strTime);
    }

    setInterval(updateTime, 1000);

    const convert_day = (num) => {
        let arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return arr[num];
    }
    const convert_month = (num) => {
        let arr = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return arr[num];
    }

    const todayDate = `${convert_day(cur_day)}, ${cur_date} ${convert_month(cur_month)}, ${cur_year}`;

    const [currentDate, setCurrentDate] = React.useState(todayDate);

    const updateDate = () => {
        let newDate = new Date().getDate();
        let newMonth = new Date().getMonth();
        let newYear = new Date().getFullYear();
        let newDay = new Date().getDay();

        let newTodayDate = `${convert_day(newDay)}, ${newDate} ${convert_month(newMonth)}, ${newYear}`;

        setCurrentDate(newTodayDate);
    }

    setInterval(updateDate, 1000);

    return (
        <>
            <section className="container home-container">
                <div className="row mt-5 home-row">

                    <div className="system-info text-center text-white mx-auto rounded-2 pt-5 mb-5">
                        <h1 className="box-1 ms-0">{currentTime}</h1>
                        <h2 className="box-2 ms-0">{currentDate}</h2>

                        <video
                            loop muted autoPlay
                            className="home-video rounded-2 mt-2"
                            src={HomeVideo}>
                            video/mp4
                        </video>

                    </div>

                    <div className="social-info d-flex flex-column justify-content-between mx-auto mb-5">

                        <div className="social-icons d-flex justify-content-center align-items-center rounded-circle">
                            <Link
                                to="https://www.instagram.com/_ig_adarsh__/">
                                <InstagramIcon />
                            </Link>
                        </div>

                        <div className="social-icons d-flex justify-content-center align-items-center rounded-circle">
                            <Link
                                to="https://www.facebook.com/adarsh.pattanaik.92">
                                <FacebookIcon />
                            </Link>
                        </div>

                        <div className="social-icons d-flex justify-content-center align-items-center rounded-circle">
                            <Link
                                to="https://github.com/AdarshPattnaik">
                                <GitHubIcon />
                            </Link>
                        </div>

                        <div className="social-icons d-flex justify-content-center align-items-center rounded-circle">
                            <Link
                                to="https://www.linkedin.com/in/adarsh-pattnaik-41319026b/">
                                <LinkedInIcon />
                            </Link>
                        </div>

                    </div>

                </div>
                <p className="footer container-fluid text-center text-white fw-semibold" >All rights reserved | Design by <strong className="adarsh">Adarsh</strong> &copy; Copyright {cur_year}</p>
            </section>
        </>
    );
};

export default Home;