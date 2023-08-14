import React from "react";
import { NavBar } from './components/NavBar.jsx'
import { AdminManage } from "./components/AdminManage.jsx";
import './Admin.css';

export function Admin() {

    return(
        <>  
            <div id="adminPageContainer">
                <div id="adminPageNav">
                    <NavBar/>
                </div>
                <div id="adminPageManage">
                    <AdminManage/>
                </div>
            </div>
        </>
    )
}