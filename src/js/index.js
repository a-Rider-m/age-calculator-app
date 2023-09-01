const inputs = document.querySelectorAll(".dateimputs");
const form = document.querySelector("#form");
const arrowButton = document.querySelector("#arrow-button");
const currentDate = new Date(Date());

function validateForm(e) {
    switch(e.target.id) {
        case "day":
            validateField("day", "label-day","error-text-day" , e.target, 31, 2);
            break;
        case "month":
            validateField("month", "label-month","error-text-month", e.target, 12, 2);
            break;
        case "year":
            validateField("year", "label-year","error-text-year", e.target, 2024, 4);
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
})

function validateField(idName, labelId, textId, input, maxNumber, maxLength) {
    
    let currentYear =  currentDate.getFullYear();

    if(input.value.length === 0) {
        document.getElementById(textId).textContent = "This field is required";
        document.getElementById(idName).classList.add("error-state");
        document.getElementById(labelId).classList.add("error-text");
    } 
    
    else if(input.value.length > maxLength || input.value > maxNumber) {
        document.getElementById(textId).textContent = `Must be a valid ${idName}`;
        document.getElementById(idName).classList.add("error-state");
        document.getElementById(labelId).classList.add("error-text");
        input.value = input.value.slice(0, maxLength); 
    } 
    
    else if(input.value > currentYear) {
        document.getElementById(textId).textContent = "Must be in the past";
        document.getElementById(idName).classList.add("error-state");
        document.getElementById(labelId).classList.add("error-text");
    } 
    
    else {
        document.getElementById(textId).textContent = "";
        document.getElementById(idName).classList.remove("error-state");
        document.getElementById(labelId).classList.remove("error-text");
    }
}

var fechaActual = new Date(Date());
var añoActual = fechaActual.getFullYear();
var mesActual = fechaActual.getMonth();
var diaActual = fechaActual.getDate();

console.log(currentDate)