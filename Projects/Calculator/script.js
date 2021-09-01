$(document).ready(function () {
  let result = 0;
  let prevEntry = 0;
  let operation = null;
  let currentEntry = "0";
  updateScreen(result);

  $(".button").on("click", function () {
    let buttonPressed = $(this).html();

    if (buttonPressed === "C") {
      result = 0;
      currentEntry = "0";
    } else if (buttonPressed === ".") {
      currentEntry += ".";
    } else if (isNumber(buttonPressed)) {
      if (currentEntry === "0") currentEntry = buttonPressed;
      else currentEntry = currentEntry + buttonPressed;
    } else if (isOperator(buttonPressed)) {
      prevEntry = parseFloat(currentEntry);
      operation = buttonPressed;
      currentEntry = "";
    } else if (buttonPressed === "1/x") {
      currentEntry = 1 / currentEntry;
    } else if (buttonPressed === "=") {
      currentEntry = operate(prevEntry, currentEntry, operation);
      operation = null;
    }

    updateScreen(currentEntry);
  });
});

updateScreen = function (displayVal) {
  let displayValue = displayVal.toString();
  $(".screen").html(displayValue.substring(0, 10));
};

isNumber = function (value) {
  return !isNaN(value);
};

isOperator = function (value) {
  return value === "/" || value === "*" || value === "+" || value === "-";
};

operate = function (a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "/") return a / b;
};
