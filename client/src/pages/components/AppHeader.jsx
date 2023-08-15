import React from "react";

export const AppHeader = () => {

    const logOutUser = () => {
        window.localStorage.clear();
        window.location.href = 'login';
    };
    
    return (
        <>
            <div id="appHeaderContainer">
                <div className="logOutButton">
                    <button onClick={logOutUser}>LogOut</button>
                </div>
            </div>
        </>
    );
};
