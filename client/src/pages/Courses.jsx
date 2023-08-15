import React from "react";
import { NavBar } from './components/NavBar.jsx'
import { CourseManage } from "./components/CourseManage.jsx";
import './Courses.css';
import { AppHeader } from "./components/AppHeader.jsx";

export function Courses() {

    return (
        <> 
            <div id="coursePageContainer">
                <div id="coursesPageNav">
                    <NavBar/>   
                </div>
                <div id="coursesMainContentContainer">
                    <div id="coursesPageHeaderBar">
                        <AppHeader/>
                    </div>
                    <div id="coursesPageManage">
                        <CourseManage/>
                    </div>
                </div>
                
            </div>
        </>
    )
}