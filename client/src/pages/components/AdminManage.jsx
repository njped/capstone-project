import React, { useEffect } from "react";



export const AdminManage = () => {

    const getUser = async () => {
        let response = await fetch('http://localhost:5050/api/user/users');
        console.log(response);
        let userApi = await response.json();

        console.log(userApi);
    };

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
            
            let accountCardsContainer = document.getElementById('accountCardsContainer')

            // Create Unique Account Info Card
            let accountInfoCard = document.createElement('div');
            accountInfoCard.setAttribute('id', `accountInfoCard-${user.UUID}`);
            accountInfoCard.setAttribute('class', 'accountInfoCard');

                let accountInfoCardMainDiv = document.createElement('div');
                accountInfoCardMainDiv.setAttribute('id', `accountInfoCardMainDiv-`);
                accountInfoCardMainDiv.setAttribute('class', 'accountInfoCardMainDiv');


                let accountHeaderInfo = document.createElement('div');
                accountHeaderInfo.setAttribute('id', `accountHeaderInfo-${user.UUID}`);
                accountHeaderInfo.setAttribute('class', 'accountHeaderInfo')

                    let userFullName = document.createElement('h3');
                    userFullName.setAttribute('class', `userFullName`)
                    userFullName.innerText = `${user.FirstName} ${user.LastName}: `
                    accountHeaderInfo.appendChild(userFullName);

                    let userStringId = document.createElement('h3');
                    userStringId.setAttribute('class', 'userStringId');
                    userStringId.innerText = `${user.UUID}`;
                    accountHeaderInfo.appendChild(userStringId);

                accountInfoCardMainDiv.appendChild(accountHeaderInfo)

                let accountContactInfoContainer = document.createElement('div');
                accountContactInfoContainer.setAttribute('id', `accountContactInfoContainer-${user.UUID}`)
                accountContactInfoContainer.setAttribute('class', 'accountContactInfoContainer')

                    let userEmail = document.createElement('h3');
                    userEmail.setAttribute('class', 'userEmail');
                    userEmail.innerText = `Email: ${user.Email}`;
                    accountContactInfoContainer.appendChild(userEmail);

                    let userPhone = document.createElement('h3');
                    userPhone.setAttribute('class', 'userPhone');
                    userPhone.innerText = `CellPhone: ${user.PhoneNumber}`;
                    accountContactInfoContainer.appendChild(userPhone);

                    let userAddress = document.createElement('h3');
                    userAddress.setAttribute('class', 'userAddress');
                    userAddress.innerText = `Address: ${user.Address}`;
                    accountContactInfoContainer.appendChild(userAddress);

                accountInfoCardMainDiv.appendChild(accountContactInfoContainer);
                
                let accountLoginInfoContainer = document.createElement('div');
                accountLoginInfoContainer.setAttribute('id', `accountLoginInfoContainer-${user.UUID}`);
                accountLoginInfoContainer.setAttribute('class', 'accountLoginInfoContainer');

                    let userUserName = document.createElement('h3');
                    userUserName.setAttribute('class', 'userUserName');
                    userUserName.innerText = `Username: ${user.UserName}`;
                    accountLoginInfoContainer.appendChild(userUserName);

                    let userPassWord = document.createElement('h3');
                    userPassWord.setAttribute('class', 'userPassWord');
                    userPassWord.innerText = `Password: ${user.PassWord}`;
                    accountLoginInfoContainer.appendChild(userPassWord);

                    let userIsAdmin = document.createElement('h3');
                    userIsAdmin.setAttribute('class', 'userIsAdmin');
                    userIsAdmin.innerText = `Type: ${user.isAdmin}`;
                    accountLoginInfoContainer.appendChild(userIsAdmin);

                    let adminCheckBox = document.createElement('input');
                    adminCheckBox.setAttribute('id', `adminCheckbox-${user.UUID}`)
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
                    accountLoginInfoContainer.appendChild(userIsAdmin);

                accountInfoCardMainDiv.appendChild(accountLoginInfoContainer)



            let accountClassListContainer = document.createElement('div');
            accountClassListContainer.setAttribute('id', `accountClassListContainer-${user.UUID}`)
            accountClassListContainer.setAttribute('class', 'accountClassListContainer');
            
            // Renders User's Enrolled Courses
            userEnrolledCourses.forEach( classItem => {
                console.log(classItem);

                let accountCourseCard = document.createElement('div');
                accountCourseCard.setAttribute('id', `accountCourseCard-${user.UUID}`)
                accountCourseCard.setAttribute('class', 'courseCards');

                    let accountCourseMainInfoDiv = document.createElement('div');
                    accountCourseMainInfoDiv.setAttribute('id', `accountCourseMainInfoDiv-${user.UUID}`)
                    accountCourseMainInfoDiv.setAttribute('class', 'accountCourseMainInfoDiv');

                        let accountCourseHeaderDiv = document.createElement('div');
                        accountCourseHeaderDiv.setAttribute('class', 'accountCourseHeaderDiv');

                            let accountCourseTitle = document.createElement('h3');
                            accountCourseTitle.setAttribute('id', `db.accountCourseTitle-`);
                            accountCourseTitle.setAttribute('class', 'accountCourseTitle');
                            accountCourseTitle.innerText = `ClassTitle: `;
                            accountCourseHeaderDiv.appendChild(accountCourseTitle);
                            
                            let accountCourseId = document.createElement('h3');
                            accountCourseId.setAttribute('id', `db.accountCourseId-`);
                            accountCourseId.setAttribute('class', 'accountCourseId');
                            accountCourseId.innerText = `Course ID: `;
                            accountCourseHeaderDiv.appendChild(accountCourseId);

                        accountCourseMainInfoDiv.appendChild(accountCourseHeaderDiv);

                            let accountMoreCourseInfoButton = document.createElement('button');
                            accountMoreCourseInfoButton.setAttribute('id', `${user.UUID}`);
                            accountMoreCourseInfoButton.setAttribute('class', 'accountMoreCourseInfoButton');
                            accountMoreCourseInfoButton.setAttribute('type', 'button');
                            accountMoreCourseInfoButton.innerText = 'Show More ▾';
                            accountCourseMainInfoDiv.appendChild(accountMoreCourseInfoButton);

                        accountCourseCard.appendChild(accountCourseMainInfoDiv);

                        let accountCourseAdditionalInfoDivContainer = document.createElement("div");
                        accountCourseAdditionalInfoDivContainer.setAttribute('id', `accountCourseAdditionalInfoDivContainer-${user.UUID}`);
                        accountCourseAdditionalInfoDivContainer.setAttribute('class', 'accountCourseAdditionalInfoDivContainer');

                            let accountCourseAdditionalInfoDiv = document.createElement('div');
                            accountCourseAdditionalInfoDiv.setAttribute('id', `accountCourseAdditionalInfoDiv-${user.UUID}`)
                            accountCourseAdditionalInfoDiv.setAttribute('class', 'accountCourseAdditionalInfoDiv');

                                let accountClassroomNumber = document.createElement('h3');
                                accountClassroomNumber.setAttribute('id', `db.accountClassroomNumber-`);
                                accountClassroomNumber.setAttribute('class', 'accountClassroomNumber');
                                accountClassroomNumber.innerText = `Classroom Number: `;
                                accountCourseAdditionalInfoDiv.appendChild(accountClassroomNumber);

                                let accountCreditHours = document.createElement('h3');
                                accountCreditHours.setAttribute('id', `db.accountCreditHours-`);
                                accountCreditHours.setAttribute('class', 'accountCreditHours');
                                accountCreditHours.innerText = `Credit Hours: `;
                                accountCourseAdditionalInfoDiv.appendChild(accountCreditHours);

                                let accountCourseTuitionCost = document.createElement('h3');
                                accountCourseTuitionCost.setAttribute('id', `db.accountCourseTuitionCost-`);
                                accountCourseTuitionCost.setAttribute('class', 'accountCourseTuitionCost');
                                accountCourseTuitionCost.innerText = `Course Cost:`;
                                accountCourseAdditionalInfoDiv.appendChild(accountCourseTuitionCost);

                                let accountCourseCapacity = document.createElement('h3');
                                accountCourseCapacity.setAttribute('id', `db.accountCourseCapacity-`);
                                accountCourseCapacity.setAttribute('class', 'courceCapacity');
                                accountCourseCapacity.innerText = `Class Size: `;
                                accountCourseAdditionalInfoDiv.appendChild(accountCourseCapacity);

                            accountCourseAdditionalInfoDivContainer.appendChild(accountCourseAdditionalInfoDiv)
                        
                        accountCourseCard.appendChild(accountCourseAdditionalInfoDivContainer);

                        let accountCoursesCardButtonDiv = document.createElement('div');
                        accountCoursesCardButtonDiv.setAttribute('id', `accountCoursesCardButtonDiv-${user.UUID}`)
                        accountCoursesCardButtonDiv.setAttribute('class', 'accountCoursesCardButtonDiv');

                            let accountCardButton = document.createElement('button');
                            accountCardButton.setAttribute('id', ``);
                            accountCardButton.setAttribute('class', 'accountCardButton');
                            accountCardButton.setAttribute('type', 'submit');
                            accountCardButton.innerText = `Remove`;

                        accountCoursesCardButtonDiv.appendChild(accountCardButton);

                    accountCourseCard.appendChild(accountCoursesCardButtonDiv);

                accountClassListContainer.appendChild(accountCourseCard);
                
            });        

            accountInfoCardMainDiv.appendChild(accountClassListContainer);
            accountInfoCard.appendChild(accountInfoCardMainDiv)
            accountCardsContainer.appendChild(accountInfoCard);


        }); 
    }; 

    document.addEventListener('click', (event) => {
        console.log(event.target.tagName);
        let isButton = event.target.tagName
        if (isButton === 'BUTTON') {
            if (event.target.type === "submit") {
                console.log("This is a Submit Button");
            } else if (event.target.type === 'button') {
                console.log(`accountCourseAdditionalInfoDivContainer-${event.target.id}`);
                let hiddenContent = document.getElementById(`accountCourseAdditionalInfoDivContainer-${event.target.id}`)
                if (hiddenContent.style.display == '' || hiddenContent.style.display === null) {
                    hiddenContent.style.display = "flex"
                    event.target.innerText = 'Show Less ▴';
                } else {
                    hiddenContent.style.display = '';
                    event.target.innerText = 'Show More ▾';
                }
            } else {
                console.log(`This isnt a button`);
            }
        } else {
            console.log(`This isnt a button`);
        }
    });
    
    useEffect(() => {
        getUser()
    }, []);

    return (
        <> 
            <div id="adminComponentContainer">
                <h1>Admin Page</h1>
                <div id="accountCardsContainer" >

                </div>
            </div>
        </>
    );
};