/** Exercise 02 - Reverse **/
let input = document.getElementById("input");
let submit = document.getElementById("reverse");
let form = document.getElementById("form");
// Add your code here

let reverse = () => {
    let number = input.value;
    let numString = number.toString();

    //looks to see if we already have an output message element
    let outputElement = document.getElementById("message");

    //create a new element for displaying to user
    let output = document.createElement("p");
    output.id = "message";
    
    //if we have an output message in dom, remove it for this event
    if(outputElement){
        form.removeChild(outputElement)
    }
    
    if(numString.length === 8) {
        
        let arr = numString.split('');
        arr = arr.reverse();
        numString = arr.join('');

        output.innerHTML = `${number} --> ${numString}`;
        
    }

    else {
     output.innerHTML = 'Error: Please input an 8-digit number';
     output.style.color = "red";
     
    }

    form.appendChild(output);

}

submit.addEventListener("click", reverse);






