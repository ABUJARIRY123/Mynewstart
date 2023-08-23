
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