import React, { Component } from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default class LoginField extends Component {
    // const [ username, setUsername ] = useState('')
    // const [ password, setPassword ] = useState('')
    
    // const navigateTo = useNavigate();
    constructor(props){
        super(props)
        this.state = {
            userNameInput: "", 
            passWordInput: "", 
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault();
        
        const { userNameInput, passWordInput, } = this.state
        console.log(userNameInput, passWordInput)

        fetch('http://localhost:5050/login', {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                username: userNameInput,
                password: passWordInput,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data, "userRegister")
            if(data.status === 'ok') {
                window.localStorage.setItem("token", data.data)
                window.localStorage.setItem("loggedIn", true)
                window.location.href = 'user-info'
            }
        })
        // let storageCondition = localStorage.getItem('Existing-Accounts') === null;
        // let userAccounts = storageCondition? [] : JSON.parse(localStorage.getItem('Existing-Accounts'));
        // let foundUser = userAccounts.filter(searchUsers);
        
        // function searchUsers(item) {
        //     return item.UserName === username && item.PassWord === password;
        // }
        // console.log(foundUser);
        // console.log(Object.keys(foundUser).length);

        
        // if (Object.keys(foundUser).length === 1) {
        //     if( foundUser[0].UserName === username && foundUser[0].PassWord === password) {
        //         console.log(`User Found ${foundUser[0].FirstName} ${foundUser[0].LastName}: UUID - ${foundUser[0].UUID}`)

        //         if( foundUser[0].isAdmin === true) {
        //             navigateTo('/admin')
        //         } else if( foundUser[0].isAdmin === false) {
        //             navigateTo('/home')
        //         } else(
        //             alert(`Cannot detemine isAdmin value of user`)
        //         )
        //     } 
        // } else if ( Object.keys(foundUser).length === 0){
        //     alert(`--User not found--\n please try again or create an account if you havnt already.`)
        //     console.log(`User Not Found`)
        // } else {
        //     alert(`Cannot detirmine if user has an account`)
        // };
    };

    render() {
    return(
        <>
            {/* <form id="loginForm" onSubmit={handleSubmit}> */}
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <label htmlFor="userNameInput">Username: </label>
                {/* <input
                    type="text" 
                    id="userNameInput"
                    autoCapitalize="off"
                    required={true}
                    onChange={ Event => setUsername( Event.target.value )}
                /> */}
                <input
                    type="text" 
                    id="userNameInput"
                    required={true}
                    autoCapitalize="off"
                    onChange={(e) => this.setState({ userNameInput: e.target.value })}
                />
                <br />
                {/* <label htmlFor="passWordInput">Password: </label>
                <input
                    type="password"
                    id="passWordInput"
                    required={true}
                    onChange={ Event => setPassword( Event.target.value )}
                /> */}
                <label>Password: </label>
                <input
                    type="password"
                    id="passWordInput"
                    required={true}
                    onChange={(e) => this.setState({ passWordInput: e.target.value })}
                />
                <br />
                <button type="submit">Log In</button>
            </form>
        </>
    )};
};