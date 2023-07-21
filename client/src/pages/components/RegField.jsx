import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLaptopMedical } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { v4 as uuidv4} from 'uuid';


export const RegField = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ reEnteredPassword, setReEnteredPassword ] = useState('');
    const [ passwordType, setPasswordType ] = useState('password')
    
    const navigateTo = useNavigate();

    let storageCondition = localStorage.getItem('Existing-Accounts') === null;
    let userAccounts = storageCondition? [] : JSON.parse(localStorage.getItem('Existing-Accounts'));

    function resetForm() {
        console.log('--Form Reset--');

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setUsername('');
        setPassword('');
        setReEnteredPassword('');
        setPasswordType('password');

    };

    function handleClick(Event) {
        Event.preventDefault();

        if(passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        };
    };
    function handleSubmit(Event) {
        Event.preventDefault()

        localStorage.setItem('Existing-Accounts', JSON.stringify())

        function searchUserNames(username) {
            return userAccounts.some(element => {
                console.log(element);
                return element.UserName === username;
            });
        };
        function searchUserEmails(email) {
            return userAccounts.some(element => {
                console.log(element);
                return element.Email === email;
            });
        };


        if( searchUserNames(username) === false && searchUserEmails(email) === false ) {

            
            //Checks that both passwords match
            if( password === reEnteredPassword ) {
                const newUser = {
                    FirstName: firstName,
                    LastName: lastName,
                    ClassList: [],
                    Email: email,
                    PhoneNumber: phone,
                    Adress: address,
                    UserName: username,
                    PassWord: password,
                    isAdmin: false,
                    UUID: uuidv4(),
                    createDate: Date(),
                };

                if( localStorage.getItem('Existing-Accounts') === null) {

                    let userArray = [];
                    userArray.push(newUser)
                    localStorage.setItem('Existing-Accounts', JSON.stringify(userArray));

                    resetForm();
                    navigateTo('/')


                } else if ( localStorage.getItem('Existing-Accounts') !== null) {

                    // localStorage.removeItem('Existing-Accounts')
                    userAccounts.push(newUser);
                    localStorage.setItem('Existing-Accounts', JSON.stringify(userAccounts));

                    resetForm();
                    navigateTo('/')

                } else (
                    alert('LocalStorge Error')
                );
            } else if( password !== reEnteredPassword ) {
                alert(`The passwords you entered do not match`)
            } else {
                alert(`Something went wrong with the password verification: ʕ •ᴥ•ʔ`)
            };

        } else if(searchUserNames(username) === true && searchUserEmails(email) === true ) {
            alert('A user with this information already exists')
        } else if( searchUserNames(username) === true ) {
            alert(`Sorry ${username} is unavaiable`)
        } else if( searchUserEmails(email) === true ) {
            alert(`${email} is already in use`)
        } else {
            alert(`Something went wrong with the username and email verification: ಠ_ಠ`)
        };
    };


    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="firstNameInput">First Name: </label>
                <input
                    type="text" 
                    name="firstNameInput" 
                    id="firstNameInput" 
                    value={firstName}
                    onChange={(Event) => setFirstName(Event.target.value)}
                />
                <br />

                <label htmlFor="lastNameInput">Last Name: </label>
                <input
                    type="text" 
                    name="lastNameInput" 
                    id="lastNameInput" 
                    value={lastName}
                    onChange={(Event) => setLastName(Event.target.value)}
                />
                <br />

                <label htmlFor="emailInput">Email: </label>
                <input
                    type="text" 
                    name="emailInput" 
                    id="emailInput" 
                    required={true}
                    value={email}
                    onChange={(Event) => setEmail(Event.target.value)}
                />
                <br />

                <label htmlFor="phoneNumberInput">Phone Number: </label>
                <input
                    type="text" 
                    name="phoneNumberInput" 
                    id="phoneNumberInput"
                    value={phone}
                    onChange={(Event) => setPhone(Event.target.value)}
                />
                <br />

                <label htmlFor="addressInput">Home Address: </label>
                <input
                    type="text" 
                    name="addressInput" 
                    id="addressInput"
                    value={address}
                    onChange={(Event) => setAddress(Event.target.value)}
                />
                <br />

                <label htmlFor="userNameInput">Username: </label>
                <input
                    type="text" 
                    name="userNameInput" 
                    id="userNameInput" 
                    required={true}
                    value={username}
                    onChange={(Event) => setUsername(Event.target.value)}
                />
                <br />

                <label htmlFor="passWordInput">Password: </label>
                <input
                    type={passwordType} 
                    name="passWordInput" 
                    id="passWordInput" 
                    required={true}
                    value={password}
                    onChange={(Event) => setPassword(Event.target.value)}
                />
                <br />

                <label htmlFor="passWordRe-enterInput">Re-enter Password: </label>
                <input
                    type={passwordType} 
                    name="passWordRe-enterInput" 
                    id="passWordRe-enterInput" 
                    required={true}
                    value={reEnteredPassword}
                    onChange={(Event) => setReEnteredPassword(Event.target.value)}
                />
                <br />

                <button type="submit">Create User</button>
                <button className='' onClick={handleClick}>
                    { passwordType==="password"? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} /> }
                </button>
                
            </form>
        </>
    )
}