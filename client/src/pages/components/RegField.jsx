import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';



export default function RegField () {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [reEnterPassword, setReEnteredPassword] = useState('')
    const [passwordType, setPasswordType] = useState('')
    

    function handleClick(e) {
        e.preventDefault();

        if(passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        };
    };
    function handleSubmit(e) {
        e.preventDefault()
        // const { firstNameInput }  = setFirstName()
        // const { lastNameInput } = setLastName()
        // const { emailInput } = setEmail()
        // const { phoneNumberInput } = setPhone()
        // const { addressInput } = setAddress()
        // const { userNameInput } = setUsername()
        // const { passWordInput } = setPassword()
        // const { passWordReEnterInput } = setReEnteredPassword()

        // Checking to see if there is a password
        if(password === null || password === "")
        {
            return alert("Password is required")
        }
        if(reEnterPassword === null || reEnterPassword === "")
        {
            return alert("Re-Enter Password is required")
        }

        // Checking Passwords are the same
        if(passWordInput !== reEnterPassword)
        {
            return alert("Passwords are not the same")
        }

        // Checking email is typed
        if(email === null || email === "")
        {
            return alert("Email is required")
        }

        // Checking if username is typed
        if(username === null || username === "")
        {
            return alert("Username is required")
        }

        fetch('http://localhost:5050/user-reg', {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                firstName: firstNameInput, 
                lastName: lastNameInput, 
                email: emailInput, 
                phone: phoneNumberInput,
                address: addressInput,
                username: userNameInput,
                password: passWordInput,
                reEnterPassword: passWordReEnterInput
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data, "userRegister")
            // Checking to see if email is unique
            if(data.status === "Email already in use") {
                alert("Email already in use")
            }
            // Checking to see if username is unique
            if(data.status === "Username already in use") {
                alert("Username already in use")
            }
            if(data.status === 'ok') {
                window.location.href = 'login'
            }
        })
        .catch(error => {
            console.log(error)
        })

    };
    
        return (
        <>
            <div id="regFormContainer">
                <div id="regForm">

                    <form onSubmit={this.handleSubmit}>
                        <div className="regFormHeader">
                            <h1>Registration</h1>
                        </div>
                        <div className="regFormInputs">
                            <input
                                type="text" 
                                id="firstNameInput"
                                placeholder="First Name"
                                onChange={(e) => setFirstName({ firstNameInput: e.target.value })}
                            />


                            <input
                                type="text" 
                                id="lastNameInput"
                                placeholder="Last Name"
                                onChange={(e) => setLastName({ lastNameInput: e.target.value })}
                            />


                            <input
                                type="email" 
                                id="emailInput"
                                placeholder="Email"
                                required={true}
                                onChange={(e) => setEmail({ emailInput: e.target.value })}
                            />


                            <input
                                type="text" 
                                id="phoneNumberInput"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="Ex: 801-000-000"
                                onChange={(e) => setPhone({ phoneNumberInput: e.target.value })}
                            />


                            <input
                                type="text" 
                                id="addressInput"
                                placeholder="Address"
                                onChange={(e) => setAddress({ addressInput: e.target.value })}
                            />

                            <input
                                type="text" 
                                id="userNameInput"
                                placeholder="Username"
                                required={true}
                                onChange={(e) => setUsername({ userNameInput: e.target.value })}
                            />


                            <input
                                type={this.state.passwordType} 
                                id="passWordInput"
                                placeholder="Password"
                                required={true}
                                onChange={(e) => setPassword({ passWordInput: e.target.value })}
                            />


                            <input
                                type={this.state.passwordType} 
                                id="passWordReEnterInput"
                                placeholder="Reenter Password"
                                required={true}
                                onChange={(e) => setReEnteredPassword({ passWordReEnterInput: e.target.value })}
                            />
                            <div className="regFormButtons">
                                <button type="submit" onClick={handleSubmit}>Create User</button>
                                <button className='togglePasswordVisability' onClick={handleClick}>
                                    { passwordType==="password"? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} /> }
                                </button>
                            </div>
                        </div>
                        <div className="regFormLink">
                            <Link to='/'>User Login</Link>
                        </div>           
                    </form>
                </div>
            </div>  
        </>
    )
}