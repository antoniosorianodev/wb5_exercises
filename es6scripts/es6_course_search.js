"use strict"

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

// When does the PROG200 course start?
function isPROG200(i) {
    if (i.CourseId === "PROG200") {
        return true;
    } else {
        return false;
    }
}

let prog200 = courses.find(isPROG200);
console.log(prog200.StartDate);



// What is the title of the PROJ500 course?
function isPROJ500(i) {
    if (i.CourseId === "PROJ500") {
        return true;
    } else {
        return false;
    }
}

let proj500 = courses.find(isPROJ500);
console.log("-------------------------------------------");
console.log(proj500.Title);



// What are the titles of the courses that cost $50 or less?
function isFiftyOrLess(i) {
    if (i.Fee <= 50) {
        console.log(i.Title);
        return true;
    } else {
        return false;
    }
}

console.log("-------------------------------------------");
courses.filter(isFiftyOrLess);


// What classes meet in "Classroom 1"?
function meetInClassroom1(i) {
    if (i.Location === "Classroom 1") {
        console.log(i.Title);
        return true;
    } else {
        return false;
    }
}

console.log("-------------------------------------------");
courses.filter(meetInClassroom1);