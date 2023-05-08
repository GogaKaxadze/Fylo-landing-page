const getStarted = document.querySelector(".header-button");
const lastBtn = document.querySelector(".main-button")
const enterEmailInput = document.querySelector("#header-email");
const mailCheck = document.querySelector("#check-mail");
const mailEnter = document.querySelector("#enter-email");

const secondMailCheck = document.getElementById("second-check");
const secondEnter = document.getElementById("second-enter")

const lastEmail = document.getElementById("main-email")
const secondForm = document.querySelector(".form2")
const form = document.querySelector("#form");


secondForm.addEventListener("submit", (event) => {
  event.preventDefault();
})

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


function secondShowError() {
  secondEnter.classList.remove("hidden");
  lastEmail.style.borderColor = "red";
  secondMailCheck.classList.add("hidden");
}
function secondShowCheck() {
  secondMailCheck.classList.remove("hidden");
  lastEmail.style.borderColor = "green";
  secondEnter.classList.add("hidden");
}
lastBtn.addEventListener("click", () => {
  if(lastEmail.value == ""){
    secondShowError();
  }else{
    secondShowCheck();
  }
})