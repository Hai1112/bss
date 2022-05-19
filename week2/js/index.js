var username = document.querySelector("#username");
var password = document.querySelector("#password");
var form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let span = parent.querySelector("span");
  parent.classList.add("error");
  span.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let span = parent.querySelector("span");
  parent.classList.remove("error");
  span.innerText = "";
}

function checkEmptyInput(inputs) {
  let isEmpty = false;
  inputs.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmpty = true;
      showError(input, "Please fill up your info");
    } else {
      showSuccess(input);
    }
  });
  return isEmpty;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEmpty = checkEmptyInput([username, password]);
  if (!isEmpty) {
    if (username.value === "john" && password.value === "1234") {
      location.href = "dashboard.html";
    } else {
      if (username.value !== "john") {
        showError(username, "Wrong username");
      }
      if (password.value !== "1234") {
        showError(password, "Wrong password");
      }
    }
  }
});
