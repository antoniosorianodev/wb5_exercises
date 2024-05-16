"use strict"

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

// Who is the Academy Member whose ID is 187?
let member187 = academyMembers.find(arrayItem => (arrayItem.memID === 187));
console.log(member187.name);
console.log("----------------------------------");

// Who has been in at least 3 films?
let actors3FilmsOrMore = academyMembers.filter(arrayItem => (arrayItem.films.length >= 3));
actors3FilmsOrMore.forEach(arrayItem => console.log(arrayItem.name));
console.log("----------------------------------");

// Who has a name that starts with "Bob"?
let startsBob = academyMembers.filter(arrayItem => (arrayItem.name.indexOf("Bob") === 0));
startsBob.forEach(actor => console.log(actor.name));
console.log("----------------------------------");

// HARDER: Which Academy Members have been in a film that starts with "A"
let aFilmActors = academyMembers.filter(actorObject => {
    let iCantThinkRightNow = false;
    (actorObject.films.forEach((filmInArray) => {
        if (filmInArray.indexOf("A") === 0) {
            iCantThinkRightNow = true;
        }
    }))
    if (iCantThinkRightNow) {
        return true
    }
    return false
});

aFilmActors.forEach(actorObject => console.log(actorObject.name));