// App Component:
import React from "react";

// Importing Components:
import DesktopApp from "./DesktopApp.jsx";
import MobileApp from "./MobileApp.jsx";

const App = () => {
    return (
        <>
            <div className="desktop-app">
                <DesktopApp />
            </div>
            <div className="mobile-app">
                <MobileApp />
            </div>
        </>
    );
};

export default App;