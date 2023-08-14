import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export default function LoginField() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        username: "",
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
                "http://localhost:5050/api/user/login",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);
            const { status, message } = data;
            if (status === 'success') {
                if(data.user.isAdmin === true){
                    handleSuccess(message)
                    setTimeout(() => {
                        navigate("/admin");
                    }, 2000);
                }
                else {
                    handleSuccess(message)
                    setTimeout(() => {
                        navigate("/home");
                    }, 2000);
                }

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
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                        />
                        <button type="submit">Go</button>
                    </div>
                    <div className="formLink">
                        <Link to='/user-reg'>Create Account</Link>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    );
};