const inputs = document.querySelectorAll(".dateimputs");
const form = document.querySelector("#form");
const arrowButton = document.querySelector("#arrow-button");

function validateForm(e) {
    switch(e.target.id) {
        case "day":
            validateField("day", "label-day","error-text-day" , e.target, 30, 2);
            break;
        case "month":
            validateField("month", "label-month","error-text-month", e.target, 30, 2);
            break;
        case "year":
            validateField("year", "label-year","error-text-year", e.target, 30, 2);
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
})

function validateField(idName, labelId, textId, input, maxNumber, maxLength) {

    if(input.value.length === 0) {
        document.getElementById(textId).textContent = "This field is required";
        document.getElementById(idName).classList.add("error-state");
        document.getElementById(labelId).classList.add("error-text");
    }
}

var fechaActual = new Date(Date());
var añoActual = fechaActual.getFullYear();
var mesActual = fechaActual.getMonth();
var diaActual = fechaActual.getDate();

console.log(fechaActual);
console.log(añoActual);
console.log(mesActual);
console.log(diaActual);