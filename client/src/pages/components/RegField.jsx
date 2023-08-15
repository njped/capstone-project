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
    // const [ firstName, setFirstName ] = useState('');
    // const [ lastName, setLastName ] = useState('');
    // const [ email, setEmail ] = useState('');
    // const [ phone, setPhone ] = useState('');
    // const [ address, setAddress ] = useState('');
    // const [ username, setUsername ] = useState('');
    // const [ password, setPassword ] = useState('');
    // const [ reEnteredPassword, setReEnteredPassword ] = useState('');
    // const [ passwordType, setPasswordType ] = useState('password')
    // const navigateTo = useNavigate();
    

    // let storageCondition = localStorage.getItem('Existing-Accounts') === null;
    // let userAccounts = storageCondition? [] : JSON.parse(localStorage.getItem('Existing-Accounts'));

    // resetForm() {
    //     console.log('--Form Reset--');

    //     setFirstName('');
    //     setLastName('');
    //     setEmail('');
    //     setPhone('');
    //     setAddress('');
    //     setUsername('');
    //     setPassword('');
    //     setReEnteredPassword('');
    //     setPasswordType('password');

    // };

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

        // localStorage.setItem('Existing-Accounts', JSON.stringify())

        // function searchUserNames(username) {
        //     return userAccounts.some(element => {
        //         console.log(element);
        //         return element.UserName === username;
        //     });
        // };
        // function searchUserEmails(email) {
        //     return userAccounts.some(element => {
        //         console.log(element);
        //         return element.Email === email;
        //     });
        // };


        // if( searchUserNames(username) === false && searchUserEmails(email) === false ) {

            
        //     //Checks that both passwords match
        //     if( password === reEnteredPassword ) {
        //         const newUser = {
        //             FirstName: firstName,
        //             LastName: lastName,
        //             ClassList: [],
        //             Email: email,
        //             PhoneNumber: phone,
        //             Address: address,
        //             UserName: username,
        //             PassWord: password,
        //             isAdmin: false,
        //             UUID: uuidv4(),
        //             createDate: Date(),
        //         };

        //         if( localStorage.getItem('Existing-Accounts') === null) {

        //             let userArray = [];
        //             userArray.push(newUser)
        //             localStorage.setItem('Existing-Accounts', JSON.stringify(userArray));

        //             resetForm();
        //             navigateTo('/')


        //         } else if ( localStorage.getItem('Existing-Accounts') !== null) {

        //             // localStorage.removeItem('Existing-Accounts')
        //             userAccounts.push(newUser);
        //             localStorage.setItem('Existing-Accounts', JSON.stringify(userAccounts));

        //             resetForm();
        //             navigateTo('/')

        //         } else (
        //             alert('LocalStorge Error')
        //         );
        //     } else if( password !== reEnteredPassword ) {
        //         alert(`The passwords you entered do not match`)
        //     } else {
        //         alert(`Something went wrong with the password verification: ʕ •ᴥ•ʔ`)
        //     };

        // } else if(searchUserNames(username) === true && searchUserEmails(email) === true ) {
        //     alert('A user with this information already exists')
        // } else if( searchUserNames(username) === true ) {
        //     alert(`Sorry ${username} is unavaiable`)
        // } else if( searchUserEmails(email) === true ) {
        //     alert(`${email} is already in use`)
        // } else {
        //     alert(`Something went wrong with the username and email verification: ಠ_ಠ`)
        // };
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
        .then((response) => {
            if (response.ok) {
                console.log('Success')
            }
            else {
                console.log("Oopsies")
            }
            return response.json()})
        .then((data) => {
            console.log(data, "userRegister")
            if(data.status === 'ok') {
                window.location.href = 'login'
            }
        })
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
                                type="text" 
                                id="emailInput"
                                placeholder="Email"
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
                                <button type="Submit">Create User</button>
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