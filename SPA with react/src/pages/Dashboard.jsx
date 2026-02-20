import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

function Dashboard(props) {
    return (
        <div id={'dashboard'} >
            <div id="sidbar">
                <NavLink to={'Profile'}>profile</NavLink>
                <NavLink to={'Payments'}>payments</NavLink>
            </div>
            <Outlet/>
        </div>
    );
}

export default Dashboard;