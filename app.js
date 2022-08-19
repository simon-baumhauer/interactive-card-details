// UI Reference point
let cardholderName = document.getElementById("cardholder-name");
let cardholderNumber = document.getElementById("number");
let cardMonth = document.getElementById("gMonth2");
let cardYear = document.getElementById("year");
let cardCvc = document.getElementById("cvc");

// submit event

document.querySelector("button").addEventListener("click", function (e) {
  console.log(
    "Name:",
    cardholderName.value,
    "Number:",
    cardholderNumber.value,
    "Month:",
    cardMonth.value,
    "Year:",
    cardYear.value,
    "CVC:",
    cardCvc.value
  );
  e.preventDefault();
});
