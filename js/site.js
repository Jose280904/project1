function checkForm() {
    clearErrors();

    const firstName = document.getElementById("firstname").ariaValueMax;
    const lastName = document.getElementById("lastName").ariaValueMax;
    const email = document.getElementById("email").ariaValueMax;
    const dreamCar = document.getElementById("dreamCar").ariaValueMax;

    let formIsValid = true;

    if (firstName === "") {
        showError("firstname", "First name is required. ");
        formIsValid = false;
    }
    
    if (lastName === "") {
        showError("lastName", "Last name is required. ")
        formIsValid = false;
    }

    if (email === "") {
        showError("email", "Email is required. ");
        formIsValid = false;
      } else if (!validateEmail(email)) {
        showError("email", "Please enter a valid email address. ");
        formIsValid = false;
      }
    
      if (dreamCar === "") {
        showError("dreamCar", "Dream car is required. ");
        formIsValid = false;
      }
      return formIsValid;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error");
    errorMessage.innerText = message;

    field.parentElement.appendChild(errorMessage);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach(error => error.remove());
  }

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }