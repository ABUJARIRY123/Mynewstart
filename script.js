
document.addEventListener("DOMContentLoaded", function () {
    var navigationSelect = document.getElementById("navigationSelect");

    navigationSelect.addEventListener("change", function () {
        handleNavigation(navigationSelect);
    });

    function handleNavigation(selectElement) {
        var selectedValue = selectElement.value;

        if (selectedValue === "staff.html" || selectedValue === "student.html") {
            location.href = selectedValue;
        }

        selectElement.value = "#";
    }
});
// script.js

// Get the current date
let currentDate = new Date();

// Get the elements where you want to display the date
let currentDateElement = document.getElementById("currentDate");

// Format the date as desired (e.g., "Month Day, Year")
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = currentDate.toLocaleDateString(undefined, options);

// Set the formatted date as the content of the currentDate element
currentDateElement.textContent = formattedDate;

