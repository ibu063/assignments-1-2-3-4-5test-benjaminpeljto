// ************ TASK DESCRIPTION ************

// Create a function sayHi(name, language) that returns a greeting message like:
// "Hi NAME!" (English), "Hola NAME!" (Spanish), or "Salut NAME!" (French).
// Then, write a curried function hiIn(lang) that fixes the language and returns another function waiting for the name.

/*
* const inFrench = hiIn("French");
* console.log(inFrench("Nina")); // "Salut Nina!"
*/


// TODO


function sayHi(name, language = "English") {
    let greeting;
    switch (language) {
        case "French":
            greeting = "Salut";
            break;
        case "Spanish":
            greeting = "Hola";
            break;
        case "English":
        default:
            greeting = "Hi";
    }
    return `${greeting} ${name}!`;
}

function hiIn(lang) {
    let greeting;
    switch (lang) {
        case "French":
            greeting = "Salut";
            break;
        case "Spanish":
            greeting = "Hola";
            break;
        case "English":
        default:
            greeting = "Hi";
    }
    return function(name) {
        return `${greeting} ${name}!`;
    };
}



























// Below this comment any modification is prohibited. 
module.exports = { sayHi, hiIn };
