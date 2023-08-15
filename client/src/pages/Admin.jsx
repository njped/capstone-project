import React from "react";
import { NavBar } from './components/NavBar.jsx'
import { AdminManage } from "./components/AdminManage.jsx";
import './Admin.css';
import { AppHeader } from "./components/AppHeader.jsx";

export function Admin() {

    return(
        <>  
            <div id="adminPageContainer">
                <div id="adminPageNav">
                    <NavBar/>
                </div> 
                <div id="adminMainContentContainer">
                    <div id="adminPageHeaderBar">
                        <AppHeader/>
                    </div>
                    <div id="adminPageManage">
                        <AdminManage/>
                    </div>
                </div>
            </div>
        </>
    )
}