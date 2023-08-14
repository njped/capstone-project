import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";




export default function LoginField() {
    const navigateTo = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { username, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:5050/login",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            username: "",
            password: "",
        });


    //     fetch('http://localhost:5050/getUsers', {
    //         method: "GET"
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data, "userRegister")
    //             console.log(data[0].isAdmin, "admin")
    //             for (let i = 0; i < data.length; i++) {
    //                 console.log(data[i][isAdmin])
    //             }
    //         })

    //     fetch('http://localhost:5050/login', {
    //         method: "POST",
    //         crossDomain: true,
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //         },
    //         body: JSON.stringify({
    //             username: userNameInput,
    //             password: passWordInput,
    //         }),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data, "userRegister")
    //             if (data.status === 'ok') {
    //                 window.localStorage.setItem("token", data.data)
    //                 window.localStorage.setItem("loggedIn", true)

    //             }
    //         })
    };

    return (
        <>
            <div id="loginFormContainer">
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="formHeader">
                        <h1>Login</h1>
                    </div>
                    <div className="formInputs">
                        <label htmlFor="username"></label>
                        <input
                            type="text"
                            id="userNameInput"
                            placeholder="Username"
                            required={true}
                            autoCapitalize="off"
                            name="username"
                            value={username}
                            onChange={handleOnChange}
                        />
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            id="passWordInput"
                            placeholder="Password"
                            required={true}
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                        />
                        <button type="submit">Go</button>
                    </div>
                    <div className="formLink">
                        <Link to='/user-reg'>Create Account</Link>
                    </div>
                </form>
            </div>
        </>
    );
};