import React from "react";
import '../App.css';

import { NavBar } from './components/NavBar.jsx'
import UserDetails from "./components/UserDetails.jsx";

export function UserInfo() {

    return (
        <>
            <NavBar/>
            <h1>User Information Page</h1>
            <UserDetails/>
        </>
    )
};