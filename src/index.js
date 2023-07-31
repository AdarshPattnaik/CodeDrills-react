// Main React File: index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing Bootstrap:
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// Importing SCSS File:
import './SCSS/index.scss';

// Importing App Component:
import App from "./Components/App.jsx";

// Importing BrowserRouter:
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
);