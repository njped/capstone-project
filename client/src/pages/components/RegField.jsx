import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// import { v4 as uuidv4} from 'uuid';


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
                     {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={this.handleSubmit}>
                        {/* <div className="regFormHeader">
                            <h1>Registration</h1>
                        </div>
                        <div className="regFormInputs">
                            <input
                                type="text" 
                                name="firstNameInput" 
                                id="firstNameInput"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(Event) => setFirstName(Event.target.value)}
                /> */}
                <label>First Name: </label>
                <input
                    type="text" 
                    id="firstNameInput"
                    onChange={(e) => this.setState({ firstNameInput: e.target.value })}
                            />

                {/* <label htmlFor="lastNameInput">Last Name: </label> */}
                {/* <input
                    type="text" 
                    name="lastNameInput" 
                    id="lastNameInput" 
                    value={lastName}
                    onChange={(Event) => setLastName(Event.target.value)}
                /> */}
                <label>Last Name: </label>
                <input
                    type="text" 
                    id="lastNameInput"
                    onChange={(e) => this.setState({ lastNameInput: e.target.value })}
                />
                <br />

                {/* <label htmlFor="emailInput">Email: </label>
                <input
                    type="text" 
                    name="emailInput" 
                    id="emailInput" 
                    required={true}
                    value={email}
                    onChange={(Event) => setEmail(Event.target.value)}
                /> */}
                <label>Email: </label>
                <input
                    type="text" 
                    id="emailInput"
                    onChange={(e) => this.setState({ emailInput: e.target.value })}
                />
                <br />

                {/* <label htmlFor="phoneNumberInput">Phone Number: </label>
                <input
                    type="tel" 
                    name="phoneNumberInput" 
                    id="phoneNumberInput"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Ex: 801-000-000"
                    value={phone}
                    onChange={(Event) => setPhone(Event.target.value)}
                /> */}
                <label>Phone Number: </label>
                <input
                    type="text" 
                    id="phoneNumberInput"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Ex: 801-000-000"
                    onChange={(e) => this.setState({ phoneNumberInput: e.target.value })}
                />
                <br />

                {/* <label htmlFor="addressInput">Home Address: </label>
                <input
                    type="text" 
                    name="addressInput" 
                    id="addressInput"
                    value={address}
                    onChange={(Event) => setAddress(Event.target.value)}
                /> */}
                <label>Home Address: </label>
                <input
                    type="text" 
                    id="addressInput"
                    onChange={(e) => this.setState({ addressInput: e.target.value })}
                />
                <br />

                {/* <label htmlFor="userNameInput">Username: </label>
                <input
                    type="text" 
                    name="userNameInput" 
                    id="userNameInput" 
                    required={true}
                    value={username}
                    onChange={(Event) => setUsername(Event.target.value)}
                /> */}
                <label>Username: </label>
                <input
                    type="text" 
                    id="userNameInput"
                    required={true}
                    onChange={(e) => this.setState({ userNameInput: e.target.value })}
                />
                <br />

                {/* <label htmlFor="passWordInput">Password: </label>
                <input
                    type={passwordType}
                    name="passWordInput" 
                    id="passWordInput" 
                    required={true}
                    value={password}
                    onChange={(Event) => setPassword(Event.target.value)}
                /> */}
                <label>Password: </label>
                <input
                    type={this.state.passwordType} 
                    id="passWordInput"
                    required={true}
                    onChange={(e) => this.setState({ passWordInput: e.target.value })}
                />
                <br />

                {/* <label htmlFor="passWordReEnterInput">Re-enter Password: </label>
                <input
                    type={passwordType} 
                    name="passWordReEnterInput" 
                    id="passWordReEnterInput" 
                    required={true}
                    value={reEnteredPassword}
                    onChange={(Event) => setReEnteredPassword(Event.target.value)}
                /> */}
                <label>Re-Enter Password: </label>
                <input
                    type={this.state.passwordType} 
                    id="passWordReEnterInput"
                    required={true}
                    onChange={(e) => this.setState({ passWordReEnterInput: e.target.value })}
                />
                <br />

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