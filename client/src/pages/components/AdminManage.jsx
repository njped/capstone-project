import React, { useEffect } from "react";

export const AdminManage = () => {

    let storageCondition = localStorage.getItem('Existing-Accounts') === null;
    let userAccounts = storageCondition? [] : JSON.parse(localStorage.getItem('Existing-Accounts'));

    function RenderUserCards() {
        userAccounts.forEach( user => {
            let userAccountsContainer = document.getElementById('userAccountsContainer')
            console.log(`${user.FirstName} ${user.LastName}`);
            console.log(user);

            // Create Unique Account Info Card
            let accountInfoCard = document.createElement('div');
            accountInfoCard.setAttribute('id', `${user.UUID}`);
            accountInfoCard.setAttribute('class', 'accountInfoCard');

            let userFullName = document.createElement('h2');
            userFullName.innerText = `${user.FirstName} ${user.LastName}: ${user.UUID}`
            accountInfoCard.appendChild(userFullName);

            // let userUUID = document.createElement('h3');
            // userUUID

            let userEmail = document.createElement('h3');
            userEmail.setAttribute('class', 'userEmail');
            userEmail.innerText = `${user.Email}`;
            accountInfoCard.appendChild(userEmail);

            let userPhone = document.createElement('h3');
            userPhone.setAttribute('class', 'userPhone');
            userPhone.innerText = `${user.PhoneNumber}`;
            accountInfoCard.appendChild(userPhone);

            let userAddress = document.createElement('h3');
            userAddress.setAttribute('class', 'userAddress');
            userAddress.innerText = `${user.Address}`;
            accountInfoCard.appendChild(userAddress);
            
            let userUserName = document.createElement('h3');
            userUserName.setAttribute('class', 'userUserName');
            userUserName.innerText = `${user.UserName}`;
            accountInfoCard.appendChild(userUserName);

            let userPassWord = document.createElement('h3');
            userPassWord.setAttribute('class', 'userPassWord');
            userPassWord.innerText = `${user.PassWord}`;
            accountInfoCard.appendChild(userPassWord);

            let userIsAdmin = document.createElement('h3');
            userIsAdmin.setAttribute('class', 'userIsAdmin');
            userIsAdmin.innerText = `${user.isAdmin}`;
            accountInfoCard.appendChild(userIsAdmin);

            let userClassList = document.createElement('h3');
            userClassList.setAttribute('class', 'userClassList');
            userClassList.innerText = `${user.ClassList.type}`
            accountInfoCard.appendChild(userClassList);

            console.log(accountInfoCard);
            console.log(userAccountsContainer);
            userAccountsContainer.appendChild(accountInfoCard);
            
        }); 
    }
    
    useEffect(() => {
        RenderUserCards();
    }, []);

    return (
        <>  
            <h1>Users:</h1>
            <div id="userAccountsContainer" >

            </div>
        </>
    );
};