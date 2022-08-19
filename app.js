// UI Reference point
let cardholderName = document.getElementById("cardholder-name");
let cardholderNumber = document.getElementById("number");
let cardMonth = document.getElementById("gMonth2");
let cardYear = document.getElementById("year");
let cardCvc = document.getElementById("cvc");

// submit event

document.querySelector("button").addEventListener("click", function (e) {
  carnumberOutput = document.getElementById("card-number");
  carnameOutput = document.getElementById("card-name");
  cardMonthOutput = document.getElementById("month");
  cardYearOutput = document.getElementById("yearOutput");
  cardCvcOutput = document.querySelector(".cvc");

  carnameOutput.innerText = cardholderName.value;
  carnumberOutput.innerText = cardholderNumber.value;
  cardMonthOutput.innerText = cardMonth.value;
  cardYearOutput.innerText = cardYear.value;
  cardCvcOutput.innerText = cardCvc.value;
  e.preventDefault();
});
