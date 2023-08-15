import React from "react";
import './UserInfo.css';

import { NavBar } from './components/NavBar.jsx'
import UserDetails from "./components/UserDetails.jsx";
import { AppHeader } from "./components/AppHeader";

export function UserInfo() {

    return (
        <> 
            <div id="infoPageContainer">
                <div id="infoPageNav">
                    <NavBar/>
                </div>
                <div id="infoMainPageContentContainer">
                    <div id="infoPageHeaderBar">
                        <AppHeader/>
                    </div>
                    <div id="infoPageManage">
                        <UserDetails/>
                    </div>
                </div>
            </div>
        </>
    )
};