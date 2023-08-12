import React from "react";
import { Link } from "react-router-dom";

import LoginField  from "./components/LoginField";



export function Login() {

    return(
        <>
            <h1>Please Login:</h1>
            <br />
            <LoginField/>
            <br />
            <Link to='/user-reg'>Create Account</Link>
        </>
    )
}