import React from "react";
import { NavBar } from './components/NavBar.jsx'
import { AdminManage } from "./components/AdminManage.jsx";
import '../App.css';

export function Admin() {

    return(
        <>
            <NavBar/>
            <h1>Admin Page</h1>
            <AdminManage/>
        </>
    )
}