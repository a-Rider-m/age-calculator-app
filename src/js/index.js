const inputs = document.querySelectorAll(".dateimputs");
const form = document.querySelector("#form");
const arrowButton = document.querySelector("#arrow-button");

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

function calculateAge() {
    const currentDate = new Date(Date());
    const currentYear = currentDate.getFullYear();

    //Le sumo 1, porque hoy 1 de septiembre me lo registra como mes 8
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    console.log(currentMonth);
    const birthYear = 2005;
    const birthMonth = 4;
    const birthDay = 30;

    let years = calculateYears();
    let months = calculateMonths();
    let days = calculateDays();

    //Calculate years
    function calculateYears() {
        let years = currentYear - birthYear;
        let months = currentMonth - birthMonth;
        
        if(months < 0 || (months === 0 && currentMonth < birthMonth)) {
            years--;
        }

        return years;
    }

    function calculateMonths() {
        let months = 0;
        
        if(currentMonth > birthMonth) {
            months = currentMonth - birthMonth;
        } else if(currentMonth < birthMonth) {
            months = 12 - (birthMonth - currentMonth);
        } else if (currentMonth == birthMonth && currentDay > birthDay) {
            if(currentMonth - birthMonth == 0) {
                months == 0;
            } else {
                months == 11;
            }
        }
        
        return months;

    }

    function calculateDays() {
        let day = currentDay - birthDay;
        if(day < 0) {
            months = (months - 1 < 0) ? 11 : months - 1;

            //supongo que el valor debe ser 30 o 31 dependiendo del mes
            day = 31 + day;
        }

        return day;
        
    }

    console.log(years);
    console.log(months);
    console.log(days);
}

calculateAge();
