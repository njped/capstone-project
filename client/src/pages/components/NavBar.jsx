import React from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {

    return (
        <>
            <nav>
                <div id="navLinks">
                    <Link to='/home'><FontAwesomeIcon icon={faHouse} /><p>Home</p></Link>

                    <Link to='/admin'><FontAwesomeIcon icon={faGear} /><p>Admin</p></Link>

                    <Link to='/courses'><FontAwesomeIcon icon={faBook} /><p>Courses</p></Link>

                    <Link to='/user-info'><FontAwesomeIcon icon={faUser} /><p>User</p></Link>

                    <Link to='/user-reg'><FontAwesomeIcon icon={faUserPlus} /><p>Sign Up</p></Link>
                </div>
            </nav>
        </>
    );
};