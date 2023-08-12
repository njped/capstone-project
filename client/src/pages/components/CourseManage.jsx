import React, { useEffect } from "react";
import '../../App.css';

export const CourseManage = () => {

    async function CoursesApiFunction() {
        const response = await fetch("/api/courses");
        const course = await response.json();
        // console.log(course[0]);
        
        RenderCourseCards(course);

        function RenderCourseCards(CourseApi) {
            CourseApi.forEach( course => {
                let coursesContainer = document.getElementById('courseContainer');

                let courseCard = document.createElement('div');
                courseCard.setAttribute('id', `courseCard-${course['Course ID']}`)
                courseCard.setAttribute('class', 'courseCards');

                let courseTitle = document.createElement('h3');
                courseTitle.setAttribute('id', `db.courseTitle-${course['Course ID']}`);
                courseTitle.setAttribute('class', 'courseTitle');
                courseTitle.innerText = `${course['Course Title']}`;
                courseCard.appendChild(courseTitle);

                let classroomNumber = document.createElement('h3');
                classroomNumber.setAttribute('id', `db.classroomNumber-${course['Course ID']}`);
                classroomNumber.setAttribute('class', 'classroomNumber');
                classroomNumber.innerText = `${course['Classroom Number']}`;
                courseCard.appendChild(classroomNumber);

                let creditHours = document.createElement('h3');
                creditHours.setAttribute('id', `db.creditHours-${course['Course ID']}`);
                creditHours.setAttribute('class', 'creditHours');
                creditHours.innerText = `${course['Credit Hours']}`;
                courseCard.appendChild(creditHours);

                let tuitionCost = document.createElement('h3');
                tuitionCost.setAttribute('id', `db.tuitionCost-${course['Course ID']}`);
                tuitionCost.setAttribute('class', 'tuitionCost');
                tuitionCost.innerText = `${course['Tuition Cost']}`;
                courseCard.appendChild(tuitionCost);

                let courseDescription = document.createElement('p');
                courseDescription.setAttribute('id', `db.courseDescription-${course['Course ID']}`);
                courseDescription.setAttribute('class', 'courseDescription');
                courseDescription.innerText = `${course['Course Description']}`;
                courseCard.appendChild(courseDescription);

                let courseId = document.createElement('h3');
                courseId.setAttribute('id', `db.courseId-${course['Course ID']}`);
                courseId.setAttribute('class', 'courseId');
                courseId.innerText = `${course['Course ID']}`;
                courseCard.appendChild(courseId);

                let courseCapacity = document.createElement('h3');
                courseCapacity.setAttribute('id', `db.courseCapacity-${course['Course ID']}`);
                courseCapacity.setAttribute('class', 'courceCapacity');
                courseCapacity.innerText = `${course['Capacity']}`;
                courseCard.appendChild(courseCapacity);

                let cardButton = document.createElement('button');
                cardButton.setAttribute('id', `${course['Course ID']}`);
                cardButton.setAttribute('class', 'cardButton');
                cardButton.setAttribute('type', 'submit');
                cardButton.innerText = `Enroll`;
                courseCard.appendChild(cardButton);
                

                coursesContainer.appendChild(courseCard);
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
            <h1>Courses:</h1>
            <div id="courseContainer" >

            </div>
        </>
    );
};