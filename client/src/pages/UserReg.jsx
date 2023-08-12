import React from "react";
import { Link } from "react-router-dom";
import { RegField } from "./components/RegField.jsx";
import './UserReg.css';

export function UserReg() {

    return(
        <>  
            <div id="regPageContainer">
                <RegField/>
            </div>
        </>
    );
};