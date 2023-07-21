// App Component: App.jsx
import React from "react";

// Importing Bootstrap:
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// Importing Router Components:
import { Route, Routes } from "react-router-dom";

// Importing NavBar, Home, About, Service, Contact, Error & Footer Component:
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import Error from "./Error.jsx";
import Footer from "./Footer.jsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact
                    path="/"
                    element={<Home />} />

                <Route exact
                    path="/about"
                    element={<About />} />

                <Route exact
                    path="/service"
                    element={<Service />} />

                <Route exact
                    path="/contact"
                    element={<Contact />} />

                <Route
                    path="*"
                    element={<Error />} end />
            </Routes>
            <Footer />
        </>
    );
};

export default App;