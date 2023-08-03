import React from "react";
import { NavBar } from './components/NavBar.jsx'
import { AdminManage } from "./components/AdminManage.jsx";

export function Admin() {

    return(
        <>
            <NavBar/>
            <h1>Admin Page</h1>
            <AdminManage/>
        </>
    )
}