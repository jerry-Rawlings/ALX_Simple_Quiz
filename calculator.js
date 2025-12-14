// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number2 !== 0 ? number1 / number2 : "Error";
}

// Addition event
document.getElementById("add").addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    document.getElementById("calculation-result").textContent = add(number1, number2);
});

// Subtraction event
document.getElementById("subtract").addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById(
