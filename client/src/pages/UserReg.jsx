import React from "react";
import { Link } from "react-router-dom";

import RegField  from "./components/RegField.jsx";

export function UserReg() {

    return(
        <>
            <h1>User Registration</h1>
            <br />
            <RegField/>
            <br />
            <Link to='/'>User Login</Link>
        </>
    );
};