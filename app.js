// Sélectionner le bouton de changement de thème (remplacer 'themeButton' par l'identifiant ou la classe du bouton)
let themeBlueButton = document.querySelector("#theme-blue-button");
let themeGreenButton = document.querySelector("#theme-green-button");

let heroBanner = document.querySelector("#hero-banner");
let footer = document.querySelector("#footer");
let avatar = document.querySelector("#avatar");
let submitButton = document.querySelector("#submit-button");
let titles = document.querySelectorAll(".title");

themeBlueButton.addEventListener("click", function () {
  heroBanner.classList.remove("bg-green-600");
  heroBanner.classList.add("bg-blue-600");

  footer.classList.remove("bg-green-600");
  footer.classList.add("bg-blue-600");

  avatar.classList.remove("border-green-600");
  avatar.classList.add("border-blue-600");

  submitButton.classList.remove("bg-green-600");
  submitButton.classList.remove("hover:bg-green-700");
  submitButton.classList.add("bg-blue-600");
  submitButton.classList.add("hover:bg-blue-700");

  titles.forEach((title) => {
    title.classList.remove("decoration-green-600");
    title.classList.add("decoration-blue-600");
  });
});

themeGreenButton.addEventListener("click", function () {
  heroBanner.classList.remove("bg-blue-600");
  heroBanner.classList.add("bg-green-600");

  footer.classList.remove("bg-blue-600");
  footer.classList.add("bg-green-600");

  avatar.classList.remove("border-blue-600");
  avatar.classList.add("border-green-600");

  submitButton.classList.remove("bg-blue-600");
  submitButton.classList.remove("hover:bg-blue-700");
  submitButton.classList.add("bg-green-600");
  submitButton.classList.add("hover:bg-green-700");

  titles.forEach((title) => {
    title.classList.remove("decoration-blue-600");
    title.classList.add("decoration-green-600");
  });
});

let errorMessage = document.querySelector("#error-message");

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);
  const message = data.get("message");

  if (message.length <= 15) {
    errorMessage.classList.remove("hidden");
  } else {
    errorMessage.classList.add("hidden");
    alert("Message envoyé avec succès !");
  }
});
