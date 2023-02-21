const getStarted = document.querySelector(".header-button");
const enterEmailInput = document.querySelector("#header-email");
const mailCheck = document.querySelector("#check-mail");
const mailEnter = document.querySelector("#enter-email");
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
function showError() {
  mailEnter.classList.remove("hidden");
  enterEmailInput.style.borderColor = "red";
  mailCheck.classList.add("hidden");
}
function showCheck() {
  mailCheck.classList.remove("hidden");
  enterEmailInput.style.borderColor = "green";
  mailEnter.classList.add("hidden");
}

getStarted.addEventListener("click", () => {
  if (enterEmailInput.value == "") {
    showError();
  } else {
    showCheck();
  }
});