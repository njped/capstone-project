import React, { useEffect } from "react";

export const CourseManage = () => {

    async function CoursesApiFunction() {
        const response = await fetch("/api/courses");
        const course = await response.json();
        console.log(course[0]);
        
        RenderCourseCards(course);

        function RenderCourseCards(CourseApi) {
            CourseApi.forEach( course => {
                let coursesCardContainer = document.getElementById('coursesCardContainer');

                let courseCard = document.createElement('div');
                courseCard.setAttribute('id', `courseCard-${course['Course ID']}`)
                courseCard.setAttribute('class', 'courseCards');

                let courseMainInfoDiv = document.createElement('div');
                courseMainInfoDiv.setAttribute('id', `courseMainInfoDiv-${course['Course ID']}`)
                courseMainInfoDiv.setAttribute('class', 'courseMainInfoDiv');

                let courseHeaderDiv = document.createElement('div');
                courseHeaderDiv.setAttribute('class', 'courseHeaderDiv');

                let courseTitle = document.createElement('h3');
                courseTitle.setAttribute('id', `db.courseTitle-${course['Course ID']}`);
                courseTitle.setAttribute('class', 'courseTitle');
                courseTitle.innerText = `${course['Course Title']}`;
                courseHeaderDiv.appendChild(courseTitle);
                
                let courseId = document.createElement('h3');
                courseId.setAttribute('id', `db.courseId-${course['Course ID']}`);
                courseId.setAttribute('class', 'courseId');
                courseId.innerText = `${course['Course ID']}`;
                courseHeaderDiv.appendChild(courseId);

                courseMainInfoDiv.appendChild(courseHeaderDiv);

                let courseDescription = document.createElement('p');
                courseDescription.setAttribute('id', `db.courseDescription-${course['Course ID']}`);
                courseDescription.setAttribute('class', 'courseDescription');
                courseDescription.innerText = `${course['Course Description']}`;
                courseMainInfoDiv.appendChild(courseDescription);

                let moreCourseInfoButton = document.createElement('button');
                moreCourseInfoButton.setAttribute('id', `${course['Course ID']}`);
                moreCourseInfoButton.setAttribute('class', 'moreCourseInfoButton');
                moreCourseInfoButton.setAttribute('type', 'click');
                moreCourseInfoButton.innerText = `^`;
                courseMainInfoDiv.appendChild(moreCourseInfoButton);

                courseCard.appendChild(courseMainInfoDiv);

                let courseAdditionalInfoDiv = document.createElement('div');
                courseAdditionalInfoDiv.setAttribute('id', `courseAdditionalInfoDiv-${course['Course ID']}`)
                courseAdditionalInfoDiv.setAttribute('class', 'courseAdditionalInfoDiv');

                let classroomNumber = document.createElement('h3');
                classroomNumber.setAttribute('id', `db.classroomNumber-${course['Course ID']}`);
                classroomNumber.setAttribute('class', 'classroomNumber');
                classroomNumber.innerText = `${course['Classroom Number']}`;
                courseAdditionalInfoDiv.appendChild(classroomNumber);

                let creditHours = document.createElement('h3');
                creditHours.setAttribute('id', `db.creditHours-${course['Course ID']}`);
                creditHours.setAttribute('class', 'creditHours');
                creditHours.innerText = `${course['Credit Hours']}`;
                courseAdditionalInfoDiv.appendChild(creditHours);

                let tuitionCost = document.createElement('h3');
                tuitionCost.setAttribute('id', `db.tuitionCost-${course['Course ID']}`);
                tuitionCost.setAttribute('class', 'tuitionCost');
                tuitionCost.innerText = `${course['Tuition Cost']}`;
                courseAdditionalInfoDiv.appendChild(tuitionCost);

                let courseCapacity = document.createElement('h3');
                courseCapacity.setAttribute('id', `db.courseCapacity-${course['Course ID']}`);
                courseCapacity.setAttribute('class', 'courceCapacity');
                courseCapacity.innerText = `${course['Capacity']}`;
                courseAdditionalInfoDiv.appendChild(courseCapacity);

                courseCard.appendChild(courseAdditionalInfoDiv);

                let coursesCardButtonDiv = document.createElement('div');
                coursesCardButtonDiv.setAttribute('id', `coursesCardButtonDiv-${course['Course ID']}`)
                coursesCardButtonDiv.setAttribute('class', 'coursesCardButtonDiv');

                let cardButton = document.createElement('button');
                cardButton.setAttribute('id', `${course['Course ID']}`);
                cardButton.setAttribute('class', 'cardButton');
                cardButton.setAttribute('type', 'submit');
                cardButton.innerText = `Enroll`;
                coursesCardButtonDiv.appendChild(cardButton);

                courseCard.appendChild(coursesCardButtonDiv);
                
                coursesCardContainer.appendChild(courseCard);
            });  
        };
    };
  
    document.addEventListener('click', (event) => {
        console.log(event.target.tagName);
        let isButton = event.target.tagName
        if (isButton === 'BUTTON') {
            console.log(`This is a button`);
        } else {
            console.log(`This isnt a button`);
        }
    });

    useEffect(() => {
        CoursesApiFunction();
    }, []);

    return (
        <>
            <div id="courseComponentContainer" >
                <h1>Courses</h1>
                <div id="coursesCardContainer">

                </div>
            </div>
        </>
    );
};