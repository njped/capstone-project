import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export const LoginField = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    
    const navigateTo = useNavigate();


    function handleSubmit(Event) {
        Event.preventDefault();

        let storageCondition = localStorage.getItem('Existing-Accounts') === null;
        let userAccounts = storageCondition? [] : JSON.parse(localStorage.getItem('Existing-Accounts'));
        let foundUser = userAccounts.filter(searchUsers);
        
        function searchUsers(item) {
            return item.UserName === username && item.PassWord === password;
        }
        console.log(foundUser);
        console.log(Object.keys(foundUser).length);

        
        if (Object.keys(foundUser).length === 1) {
            if( foundUser[0].UserName === username && foundUser[0].PassWord === password) {
                // console.log(`User Found ${foundUser[0].FirstName} ${foundUser[0].LastName}: UUID - ${foundUser[0].UUID}`)

                if( foundUser[0].isAdmin === true) {
                    navigateTo('/admin')
                } else if( foundUser[0].isAdmin === false) {
                    navigateTo('/home')
                } else(
                    alert(`Cannot detemine isAdmin value of user`)
                )
            } 
        } else if ( Object.keys(foundUser).length === 0){
            alert(`--User not found--\n please try again or create an account if you havnt already.`)
            console.log(`User Not Found`)
        } else {
            alert(`Cannot detirmine if user has an account`)
        };
    };


    return(
        <>
            <div id="loginFormContainer">
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="formHeader">
                        <h1>Login</h1>
                    </div>
                    <div className="formInputs">
                        <input
                            type="text" 
                            id="userNameInput"
                            autoCapitalize="off"
                            placeholder="Username"
                            required={true}
                            onChange={ Event => setUsername( Event.target.value )}

                        />
                        <input
                            type="password"
                            id="passWordInput"
                            placeholder="Password"
                            required={true}
                            onChange={ Event => setPassword( Event.target.value )}
                        />
                        <button type="submit">Go</button>
                    </div>
                    <div className="formLink">
                        <Link to='/user-reg' >Create Account</Link>
                    </div>
                </form>
                
            </div>     
        </>
    );
};