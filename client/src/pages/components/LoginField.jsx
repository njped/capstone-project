import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginField = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigateTo = useNavigate();

    let studentSavedUsername = 'RegularUser';
    let studentSavedPassword = 'PasswordReg';
    
    let adminSavedUsername = 'AdminUser';
    let adminSavedPassword = 'PasswordAdmin'


    function handleSubmit(Event) {
        Event.preventDefault();

        console.log(username);
        console.log(password);

        if( 
            username === studentSavedUsername
            && 
            password === studentSavedPassword ) {

            navigateTo('/home');

        } else if( 
            username === adminSavedUsername 
            && 
            password === adminSavedPassword ) {

            navigateTo('/admin');

        } else {

            alert('Username or Password are incorrect \nPlease try again');

        };


    }


    return(
        <>
            <form id="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="userNameInput">Username: </label>
                <input
                    type="text" 
                    id="userNameInput"
                    onChange={ Event => setUsername( Event.target.value )}

                />
                <br />
                <label htmlFor="passWordInput">Password: </label>
                <input
                    type="text"
                    id="passWordInput"
                    onChange={ Event => setPassword( Event.target.value )}
                />
                <br />
                <button type="submit">Log In</button>
            </form>
        </>
    );
};