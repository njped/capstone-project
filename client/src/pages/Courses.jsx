import React from "react";
import { NavBar } from './components/NavBar.jsx'
import { CourseManage } from "./components/CourseManage.jsx";

export function Courses() {

    return (
        <>
            <NavBar/>
            <h1>Courses Page</h1>
            <CourseManage/>
        </>
    )
}