// ==========================
// Part 1: Variables & Conditionals
// ==========================
let userName = "Caleb"; // variable declaration
let hour = new Date().getHours(); // capture system time

document.getElementById("btnGreet").addEventListener("click", function () {
  let greeting;
  if (hour < 12) {
    greeting = "Good morning, " + userName + "!";
  } else if (hour < 18) {
    greeting = "Good afternoon, " + userName + "!";
  } else {
    greeting = "Good evening, " + userName + "!";
  }
  document.getElementById("greeting").textContent = greeting;
});

// ==========================
// Part 2: Functions
// ==========================

// Function 1: calculate sum
function calculateSum(a, b) {
  return a + b;
}

// Function 2: format string
function formatMessage(message) {
  return ">>> " + message.toUpperCase() + " <<<";
}

document.getElementById("btnSum").addEventListener("click", function () {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = calculateSum(num1, num2);
  document.getElementById("sumResult").textContent = formatMessage("The sum is " + result);
});

// ==========================
// Part 3: Loops
// ==========================

document.getElementById("btnCountdown").addEventListener("click", function () {
  let countdownText = "";
  // for loop countdown
  for (let i = 5; i >= 1; i--) {
    countdownText += i + " ";
  }
  document.getElementById("countdown").textContent = "Countdown: " + countdownText;
});

// Another loop example: iterate array
let colors = ["red", "green", "blue"];
colors.forEach(function (color) {
  console.log("Color: " + color);
});

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Change background color on click
document.getElementById("btnChangeColor").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

// Add new item to list
document.getElementById("btnAddItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("itemList").appendChild(newItem);
});

// Toggle text on greeting paragraph (3rd DOM interaction)
document.getElementById("greeting").addEventListener("click", function () {
  this.classList.toggle("highlight");
});
