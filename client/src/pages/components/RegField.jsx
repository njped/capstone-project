import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';



export default class RegField extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstNameInput: "", 
            lastNameInput: "", 
            emailInput: "", 
            phoneNumberInput: "", 
            addressInput: "", 
            userNameInput: "", 
            passWordInput: "", 
            passWordReEnterInput: "", 
            passwordType: "password"
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleClick(e) {
        e.preventDefault();

        if(this.state.passwordType === 'password') {
            this.setState({passwordType: 'text'});
            // setPasswordType('text');
        } else {
            this.setState({passwordType: 'password'});
            // setPasswordType('password');
        };
    };
    handleSubmit(e) {
        e.preventDefault()
        // const { firstNameInput }  = setFirstName()
        // const { lastNameInput } = setLastName()
        // const { emailInput } = setEmail()
        // const { phoneNumberInput } = setPhone()
        // const { addressInput } = setAddress()
        // const { userNameInput } = setUsername()
        // const { passWordInput } = setPassword()
        // const { passWordReEnterInput } = setReEnteredPassword()

        const {firstNameInput, 
            lastNameInput, 
            emailInput, 
            phoneNumberInput, 
            addressInput, userNameInput, 
            passWordInput, 
            passWordReEnterInput,
        } = this.state


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

        
        // Checking to see if there is a password
        if(this.state.passWordInput === null || this.state.passWordInput === "")
        {
            return alert("Password is required")
        }
        if(this.state.passWordReEnterInput === null || this.state.passWordReEnterInput === "")
        {
            return alert("Re-Enter Password is required")
        }

        // Checking Passwords are the same
        if(this.state.passWordInput !== this.state.passWordReEnterInput)
        {
            return alert("Passwords are not the same")
        }

        // Checking email is typed
        if(this.state.emailInput === null || this.state.emailInput === "")
        {
            return alert("Email is required")
        }

        // Checking if username is typed
        if(this.state.userNameInput === null || this.state.userNameInput === "")
        {
            return alert("Username is required")
        }

    };
    render() {

    
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
                                onChange={(e) => this.setState({ firstNameInput: e.target.value })}
                            />


                            <input
                                type="text" 
                                id="lastNameInput"
                                placeholder="Last Name"
                                onChange={(e) => this.setState({ lastNameInput: e.target.value })}
                            />


                            <input
                                type="email" 
                                id="emailInput"
                                placeholder="Email"
                                required={true}
                                onChange={(e) => this.setState({ emailInput: e.target.value })}
                            />


                            <input
                                type="text" 
                                id="phoneNumberInput"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="Ex: 801-000-000"
                                onChange={(e) => this.setState({ phoneNumberInput: e.target.value })}
                            />


                            <input
                                type="text" 
                                id="addressInput"
                                placeholder="Address"
                                onChange={(e) => this.setState({ addressInput: e.target.value })}
                            />


                            <input
                                type="text" 
                                id="userNameInput"
                                placeholder="Username"
                                required={true}
                                onChange={(e) => this.setState({ userNameInput: e.target.value })}
                            />


                            <input
                                type={this.state.passwordType} 
                                id="passWordInput"
                                placeholder="Password"
                                required={true}
                                onChange={(e) => this.setState({ passWordInput: e.target.value })}
                            />


                            <input
                                type={this.state.passwordType} 
                                id="passWordReEnterInput"
                                placeholder="Reenter Password"
                                required={true}
                                onChange={(e) => this.setState({ passWordReEnterInput: e.target.value })}
                            />
                            <div className="regFormButtons">
                                <button type="submit" onClick={this.handleSubmit}>Create User</button>
                                <button className='togglePasswordVisability' onClick={this.handleClick}>
                                    { this.state.passwordType==="password"? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} /> }
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
    )}
}