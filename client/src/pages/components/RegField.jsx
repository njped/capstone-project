import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';



export default function RegField() {
    const [passwordType, setPasswordType] = useState('password')
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        username: "",
        password: "",
        reEnterPassword: "",
    })
    const { firstName, lastName, email, phone, address, username, password, reEnterPassword } = inputValue

    function handleOnChange(e) {
        const { name, value } = e.target
        setInputValue({ ...inputValue, [name]: value })
    }

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });

    function handleClick(e) {
        e.preventDefault();

        if (passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        };
    };
    async function handleSubmit(e) {
        e.preventDefault()

        // Checking to see if there is a password
        if (password === null || password === "") {
            return alert("Password is required")
        }
        if (reEnterPassword === null || reEnterPassword === "") {
            return alert("Re-Enter Password is required")
        }

        // Checking Passwords are the same
        if (password !== reEnterPassword) {
            return alert("Passwords are not the same")
        }

        // Checking email is typed
        if (email === null || email === "") {
            return alert("Email is required")
        }

        // Checking if username is typed
        if (username === null || username === "") {
            return alert("Username is required")
        }

        try {
            const { data } = await axios.post(
                "http://localhost:5050/api/user",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            username: "",
            password: "",
            reEnterPassword: "",
        });

        // fetch('http://localhost:5050/user-reg', {
        //     method: "POST",
        //     crossDomain: true,
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //         "Access-Control-Allow-Origin": "*",
        //     },
        //     body: JSON.stringify({
        //         firstName: firstNameInput,
        //         lastName: lastNameInput,
        //         email: emailInput,
        //         phone: phoneNumberInput,
        //         address: addressInput,
        //         username: userNameInput,
        //         password: passWordInput,
        //         reEnterPassword: passWordReEnterInput
        //     }),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data, "userRegister")
        //         // Checking to see if email is unique
        //         if (data.status === "Email already in use") {
        //             alert("Email already in use")
        //         }
        //         // Checking to see if username is unique
        //         if (data.status === "Username already in use") {
        //             alert("Username already in use")
        //         }
        //         if (data.status === 'ok') {
        //             window.location.href = 'login'
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

    };

    return (
        <>
            <div id="regFormContainer">
                <div id="regForm">

                    <form onSubmit={handleSubmit}>
                        <div className="regFormHeader">
                            <h1>Registration</h1>
                        </div>
                        <div className="regFormInputs">
                            <label htmlFor="firstName"></label>
                            <input
                                type="text"
                                id="firstNameInput"
                                placeholder="First Name"
                                value={firstName}
                                name="firstName"
                                onChange={handleOnChange}
                            />

                            <label htmlFor="lastName"></label>
                            <input
                                type="text"
                                id="lastNameInput"
                                placeholder="Last Name"
                                value={lastName}
                                name="lastName"
                                onChange={handleOnChange}
                            />

                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="emailInput"
                                placeholder="Email"
                                required={true}
                                value={email}
                                name="email"
                                onChange={handleOnChange}
                            />

                            <label htmlFor="phone"></label>
                            <input
                                type="text"
                                id="phoneNumberInput"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="Ex: 801-000-000"
                                value={phone}
                                name="phone"
                                onChange={handleOnChange}
                            />

                            <label htmlFor="address"></label>
                            <input
                                type="text"
                                id="addressInput"
                                placeholder="Address"
                                value={address}
                                name="address"
                                onChange={handleOnChange}
                            />

                            <label htmlFor="username"></label>
                            <input
                                type="text"
                                id="userNameInput"
                                placeholder="Username"
                                required={true}
                                value={username}
                                name="username"
                                onChange={handleOnChange}
                            />

                            <label htmlFor="password"></label>
                            <input
                                type={passwordType}
                                id="passWordInput"
                                placeholder="Password"
                                required={true}
                                value={password}
                                name="password"
                                onChange={handleOnChange}
                            />

                            <label htmlFor="reEnterPassword"></label>
                            <input
                                type={passwordType}
                                id="passWordReEnterInput"
                                placeholder="Reenter Password"
                                required={true}
                                value={reEnterPassword}
                                name="reEnterPassword"
                                onChange={handleOnChange}
                            />
                            <div className="regFormButtons">
                                <button type="submit">Create User</button>
                                <button className='togglePasswordVisability' onClick={handleClick}>
                                    {passwordType === "password" ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                </button>
                            </div>
                        </div>
                        <div className="regFormLink">
                            <Link to='/'>User Login</Link>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}