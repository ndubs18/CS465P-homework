/** Exercise 03 - Form **/


let inputVals = document.querySelectorAll("input");
let submitButton = document.getElementById("submit");

let message = document.getElementById("message");



document.addEventListener("submit", (e) => {
    e.preventDefault();

    for(let i = 0; i < inputVals.length-1; i+=1) {

        switch(i) {
            case(0): console.log(`Name: ${inputVals[i].value}`)
            break;
            case(1): console.log(`Email: ${inputVals[i].value}`)
            break;
            default: console.log("Form could not be submitted")
            break;
        }
    }

    console.log(`${message.value}`? `Feedback: ${message.value}`: "Feedback: No feedback was submitted");

    console.log(`${inputVals[2].checked? "Newsletter: Yes, I would like to join the newsletter.": "Newsletter: No, thank you."}`)




})


