import React, { useEffect } from "react";
import '../../App.css';


export const AdminManage = () => {

    let storageCondition = localStorage.getItem('Existing-Accounts') === null;
    let userAccounts = storageCondition? [] : JSON.parse(localStorage.getItem('Existing-Accounts'));

    function RenderUserCards() {
        userAccounts.forEach( user => {

            let userEnrolledCourses = [{
                "Course ID": "CSCI-2003", "Course Title": "Computer Architecture",
                "Course Description": "This course will provide an overview of the components and design of modern computer systems. Topics covered include assembly language, memory, CPU, and input/output devices. Students will learn how to design and implement basic computer architectures.",
                "Classroom Number": "LAB-789", "Capacity": "20", "Credit Hours": "3", "Tuition Cost": "$900.00"
            }]
            console.log(userEnrolledCourses.type);
            
            let userAccountsContainer = document.getElementById('userAccountsContainer')
            // console.log(`${user.FirstName} ${user.LastName}`);
            // console.log(user);

            // Create Unique Account Info Card
            let accountInfoCard = document.createElement('div');
            accountInfoCard.setAttribute('id', `${user.UUID}`);
            accountInfoCard.setAttribute('class', 'accountInfoCard');

            let userFullName = document.createElement('h2');
            userFullName.innerText = `${user.FirstName} ${user.LastName}: ${user.UUID}`
            accountInfoCard.appendChild(userFullName);

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

            let adminCheckBox = document.createElement('input');
            adminCheckBox.setAttribute('id', `adminCheckbox-db.userId`)
            adminCheckBox.setAttribute('class', 'adminCheckbox');
            adminCheckBox.setAttribute('type', 'checkbox');
            function isAdminChecker(adminValue) {
                if (adminValue === true) {
                    adminCheckBox.setAttribute('checked', ``)
                } else {
                    null
                }
            };
            isAdminChecker(user.isAdmin);
            userIsAdmin.appendChild(adminCheckBox);


            let userClassListContainer = document.createElement('div');
            userClassListContainer.setAttribute('id', `userClassListContainer-db.userId`)
            userClassListContainer.setAttribute('class', 'userClassListContainer');
            
            // Renders User's Enrolled Courses
            userEnrolledCourses.forEach( classItem => {
                console.log(classItem);

                let courseCardUser = document.createElement('div');
                courseCardUser.setAttribute('id', `courseCardUser-`)
                courseCardUser.setAttribute('class', 'courseCardsUser');

                let courseTitle = document.createElement('h3');
                courseTitle.setAttribute('id', `db.courseTitleUserUser-`);
                courseTitle.setAttribute('class', 'courseTitleUserUser');
                courseTitle.innerText = `Course Title: `;
                courseCardUser.appendChild(courseTitle);

                let classroomNumber = document.createElement('h3');
                classroomNumber.setAttribute('id', `db.classroomNumberUser-`);
                classroomNumber.setAttribute('class', 'classroomNumberUser');
                classroomNumber.innerText = `Classroom Number: `;
                courseCardUser.appendChild(classroomNumber);

                let creditHours = document.createElement('h3');
                creditHours.setAttribute('id', `db.creditHoursUser-`);
                creditHours.setAttribute('class', 'creditHoursUser');
                creditHours.innerText = `Credit Hours: `;
                courseCardUser.appendChild(creditHours);

                let tuitionCost = document.createElement('h3');
                tuitionCost.setAttribute('id', `db.tuitionCostUser-`);
                tuitionCost.setAttribute('class', 'tuitionCostUser');
                tuitionCost.innerText = `Tuition Cost: `;
                courseCardUser.appendChild(tuitionCost);

                let courseDescription = document.createElement('p');
                courseDescription.setAttribute('id', `db.courseDescriptionUser-`);
                courseDescription.setAttribute('class', 'courseDescriptionUser');
                courseDescription.innerText = `Description: `;
                courseCardUser.appendChild(courseDescription);

                let courseId = document.createElement('h3');
                courseId.setAttribute('id', `db.courseIdUser-`);
                courseId.setAttribute('class', 'courseIdUser');
                courseId.innerText = `ID: `;
                courseCardUser.appendChild(courseId);

                let courseCapacity = document.createElement('h3');
                courseCapacity.setAttribute('id', `db.courseCapacityUser-`);
                courseCapacity.setAttribute('class', 'courceCapacityUser');
                courseCapacity.innerText = `Capacity: `;
                courseCardUser.appendChild(courseCapacity);

                let cardButton = document.createElement('button');
                cardButton.setAttribute('id', `user.id`);
                cardButton.setAttribute('class', 'cardButtonUser');
                cardButton.setAttribute('type', 'submit');
                cardButton.innerText = `Remove`;
                courseCardUser.appendChild(cardButton);

                console.log(courseCardUser);

                userClassListContainer.appendChild(courseCardUser)
                
            });        

            accountInfoCard.appendChild(userClassListContainer);
            userAccountsContainer.appendChild(accountInfoCard);


        }); 
    };
    
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