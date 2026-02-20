import React from 'react';
import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";

function Layouts(props) {
    return (
        <div className="main">
            <Header />
            <Outlet/>
            <footer>it is footer</footer>
        </div>
    );
}

export default Layouts;