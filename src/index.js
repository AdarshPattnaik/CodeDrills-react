// Main React File: index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing CSS File:
import './index.css';

// Importing App Component:
import App from './App.jsx';

// Install ReactRouter: npm install react-router-dom
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