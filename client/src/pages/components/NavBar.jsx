import React from "react";
import { link } from 'react-router-dom';

export const NavBar = () => {

    return (
        <>
            <nav>
                <div id="navLinks">
                    <Link to='/'>Home</Link>
                </div>
            </nav>
        </>
    );
};