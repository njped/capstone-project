import React from "react";
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return (
        <>
            <nav>
                <div id="navLinks">
                    <Link to='/'>Home</Link>
                    <br />
                    <Link to='/admin'>Admin</Link>
                    <br />
                    <Link to='/courses'>Courses</Link>
                    <br />
                    <Link to='/userinfo'>User Information</Link>
                    <br />
                    <Link to='/userreg'>User Registration</Link>
                </div>
            </nav>
        </>
    );
};