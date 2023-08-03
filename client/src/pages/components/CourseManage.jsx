import React, { useEffect } from "react";

export const CourseManage = () => {

    async function CoursesApi() {
        const response = fetch("/api/courses");
        const courses = await response.json();
        console.log(courses);
    }

    CoursesApi();


    function RenderCourseCards() {
        let coursesContainer = document.getElementById('courseContainer');

        let courseCard = document.createElement('div');
        courseCard.setAttribute('id', `courseCard-db.courseId`)
        courseCard.setAttribute('class', 'courseCards');

        let courseTitle = document.createElement('h3');
        courseTitle.setAttribute('id', `db.courseTitle`);
        courseTitle.setAttribute('class', 'courseTitle');
        courseTitle.innerText = `db.courseTitle`;
        courseCard.appendChild(courseTitle);

        let classroomNumber = document.createElement('h3');
        classroomNumber.setAttribute('id', `db.classroomNumber`);
        classroomNumber.setAttribute('class', 'classroomNumber');
        classroomNumber.innerText = `db.classroomNumber`;
        courseCard.appendChild(classroomNumber);

        let creditHours = document.createElement('h3');
        creditHours.setAttribute('id', `db.creditHours`);
        creditHours.setAttribute('class', 'creditHours');
        creditHours.innerText = `db.creditHours`;
        courseCard.appendChild(creditHours);

        let tuitionCost = document.createElement('h3');
        tuitionCost.setAttribute('id', `db.tuitionCost`);
        tuitionCost.setAttribute('class', 'tuitionCost');
        tuitionCost.innerText = `db.tuitionCost`;
        courseCard.appendChild(tuitionCost);

        let courseDescription = document.createElement('p');
        courseDescription.setAttribute('id', `db.courseDescription`);
        courseDescription.setAttribute('class', 'courseDescription');
        courseDescription.innerText = `db.courseDescription`;
        courseCard.appendChild(courseDescription);

        let courseId = document.createElement('h3');
        courseId.setAttribute('id', `db.courseId`);
        courseId.setAttribute('class', 'courseId');
        courseId.innerText = `db.courseId`;
        courseCard.appendChild(courseId);

        let courseCapacity = document.createElement('h3');
        courseCapacity.setAttribute('id', `db.courseCapacity`);
        courseCapacity.setAttribute('class', 'courceCapacity');
        courseCapacity.innerText = `db.courseCapacity`;
        courseCard.appendChild(courseCapacity);

        let cardButton = document.createElement('button');
        cardButton.setAttribute('id', `cardButton-db.courseID`);
        cardButton.setAttribute('class', 'cardButton')
        cardButton.innerText = `Add Course`;
        courseCard.appendChild(cardButton);
        

        coursesContainer.appendChild(courseCard)
    };

    

    useEffect(() => {
        RenderCourseCards();
    }, []);

    return (
        <>
            <h1>Courses:</h1>
            <div id="courseContainer" >

            </div>
        </>
    )
}