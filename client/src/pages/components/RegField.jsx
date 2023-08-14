import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
        
        // Checking email is typed
        if (email === null || email === "") {
            return toast.error('Email is required', {
                position: "bottom-left",
            });
        }
        
        // Checking if username is typed
        if (username === null || username === "") {
            return toast.error('Username is required', {
                position: "bottom-left",
            });
        }

        // Checking to see if there is a password
        if (password === null || password === "") {
            return toast.error('Password is required', {
                position: "bottom-left",
            });
        }
        if (reEnterPassword === null || reEnterPassword === "") {
            return toast.error('Re-Enter Password is required', {
                position: "bottom-left",
            });
        }
        
        // Checking Passwords are the same
        if (password !== reEnterPassword) {
            return toast.error('Passwords are not the same', {
                position: "bottom-left",
            });
        }
        

        try {
            const { data } = await axios.post(
                "http://localhost:5050/api/user/signup",
                {
                    ...inputValue
                },
                { withCredentials: true }
            );
            console.log(data)
            const { status, message } = data;
            if (status === 'success') {
                handleSuccess(message)
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } else {
                handleError(message)
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
                                // required={true}
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
                                // required={true}
                                value={username}
                                name="username"
                                onChange={handleOnChange}
                            />

                            <label htmlFor="password"></label>
                            <input
                                type={passwordType}
                                id="passWordInput"
                                placeholder="Password"
                                // required={true}
                                value={password}
                                name="password"
                                onChange={handleOnChange}
                            />

                            <label htmlFor="reEnterPassword"></label>
                            <input
                                type={passwordType}
                                id="passWordReEnterInput"
                                placeholder="Reenter Password"
                                // required={true}
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
                </div>
                <ToastContainer />
            </div>
        </>
    )
}