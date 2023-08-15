import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ""
        }
        this.logOut = this.logOut.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:5050/user-info', {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token")
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data, "userData")
                this.setState({ userData: data.data })
                if(data.data === "token has expired") {
                    this.logOut()
                }
            })
    }

    logOut = () => {
        window.localStorage.clear();
        window.location.href = "login"
    }

    render() {
        return (
            <>
                <div id="infoContentContainer">
                    <h1>User Information</h1>
                    <div id="infoUserSettings">
                        Name<h1>{ this.state.userData.firstName }</h1>
                        Email<h1>{ this.state.userData.email }</h1>
                    </div>
                </div> 
            </>
        )
    };
};