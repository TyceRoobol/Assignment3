/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var monButton = document.getElementById("monday");
var tueButton = document.getElementById("tuesday");
var wedButton = document.getElementById("wednesday");
var thuButton = document.getElementById("thursday");
var friButton = document.getElementById("friday");
var clearButton = document.getElementById("clear-button");
var halfButton = document.getElementById("half");
var fullButton = document.getElementById("full");
fullButton.classList.add("clicked");
var rate = 35;
var calculatedCost = document.getElementById("calculated-cost");
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
monButton.addEventListener("click", changeIDMon);
tueButton.addEventListener("click", changeIDTue);
wedButton.addEventListener("click", changeIDWed);
thuButton.addEventListener("click", changeIDThu);
friButton.addEventListener("click", changeIDFri);

function changeIDMon() {
    monButton.classList.add("clicked");
    reCalculate();
}
function changeIDTue() {
    tueButton.classList.add("clicked");
    reCalculate();
}
function changeIDWed() {
    wedButton.classList.add("clicked");
    reCalculate();
}
function changeIDThu() {
    thuButton.classList.add("clicked");
    reCalculate();
}
function changeIDFri() {
    friButton.classList.add("clicked");
    reCalculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", resetButtons);
function resetButtons() {
    monButton.classList.remove("clicked");
    tueButton.classList.remove("clicked");
    wedButton.classList.remove("clicked");
    thuButton.classList.remove("clicked");
    friButton.classList.remove("clicked");
    reCalculate();
}





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener("click", halfClicked);

function halfClicked() {
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    rate = 20;
    reCalculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener("click", fullClicked);

function fullClicked() {
    halfButton.classList.remove("clicked");
    fullButton.classList.add("clicked");
    rate = 35;
    reCalculate();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function reCalculate() {
    var totalCost = 0;
    var selectedDays = 0;
    if (monButton.classList.contains("clicked")) {
        selectedDays++;
    }
    if (tueButton.classList.contains("clicked")) {
        selectedDays++;
    }
    if (wedButton.classList.contains("clicked")) {
        selectedDays++;
    }
    if (thuButton.classList.contains("clicked")) {
        selectedDays++;
    }
    if (friButton.classList.contains("clicked")) {
        selectedDays++;
    }
    if (fullButton.classList.contains("clicked")) {
        totalCost = selectedDays * rate;
        calculatedCost.innerHTML = totalCost;
    } else {
        totalCost = selectedDays * rate;
        calculatedCost.innerHTML = totalCost;
    }
}

