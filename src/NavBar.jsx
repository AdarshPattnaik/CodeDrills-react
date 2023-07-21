import React, { useEffect, useState } from "react";

// Importing NavLink:
import { Link, NavLink } from "react-router-dom";

// Material UI Button:
import Button from '@material-ui/core/Button';
const NavBar = () => {

    const [theme, setTheme] = useState("light-theme");
    const [themeIcon, setThemeIcon] = useState("☀");

    const ThemeEvent = () => {
        if(theme === "dark-theme") {
            setTheme("light-theme");
            setThemeIcon("☀");
        }
        else {
            setTheme("dark-theme");
            setThemeIcon("☪");
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <div className="nav-background container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto nav-w">

                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid nav-extend">
                                <Link
                                    className="navbar-brand"
                                    to="/">CodeDrills</Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact
                                                className="nav-link"
                                                aria-current="page"
                                                to="/"
                                                end>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact
                                                className="nav-link"
                                                to="/about"
                                                end>About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact
                                                className="nav-link"
                                                to="/service"
                                                end>Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact
                                                className="nav-link"
                                                to="/contact"
                                                end>Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <Button
                                                className="theme-btn"
                                                onClick={() => ThemeEvent()}>{themeIcon}</Button>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;