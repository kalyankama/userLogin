// const myForm = document.getElementById("firstForm");
// const emailDetails = document.getElementById("emailInput");
// const emailError = document.getElementById("emailError");
// const passInput = document.getElementById("passwordInput")
// const passError = document.getElementById("passwordError");
// const forgot = document.getElementById("forgot");
// const signUp = document.getElementById("newAcc");

// var validEmailData;
// var ValidPassData;
 
// myForm.onsubmit=function (event) {
//       event.preventDefault();
//     if (emailDetails.value.trim() === "") {
//         emailError.textContent = "This field is required";
//         emailError.style.color = "red";
//         emailError.style.margin = "-10px 180px 15px 0px";
//         emailError.style.fontSize = "small";
//         validEmailData = false;
//     }else if (!emailDetails.value.match(/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i)) {
//         emailError.textContent = "Invalid Email";
//         emailError.style.color = "red";
//         emailError.style.margin = "-10px 230px 15px 0px";
//         validEmailData = false;
//     }
//     if (passInput.value.trim() === "") {
//         passError.textContent = "This field is required";
//         passError.style.color = "red";
//         passError.style.margin = "-14px 180px 15px 0px";
//         passError.style.fontSize = "small";
//         ValidPassData = false;
//     }
// }

// emailDetails.addEventListener("input", function (params) {
//     params.preventDefault();
//     if (emailDetails.value.trim() !== "") {
//         emailError.textContent = "";
//         // window.open("dashBoard.html", "_self")
//     }
// })
// passInput.addEventListener("input", function (params) {
//     params.preventDefault();
//     if (passInput.value.trim() !== "") {
//         passError.textContent = "";
//     }
// })

// function loginMeIn(params) {
//     if (validEmailData & validEmailData) {
//         params.preventDefault();
//         emailError.textContent = "";
//         passError.textContent = "";
//         emailDetails.value = "";
//         passInput.value = "";

//         window.open("dashBoard.html", "_self");
//     }
// }

// forgot.addEventListener("click", function (params) {
//     window.open("forgot.html", "_self");
// })

// signUp.addEventListener("click", function (params) {
//     window.open("newAccount.html", "_self");
// })








const myForm = document.getElementById("firstForm");
const emailDetails = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const passInput = document.getElementById("passwordInput");
const passError = document.getElementById("passwordError");
const forgot = document.getElementById("forgot");
const signUp = document.getElementById("newAcc");

let validEmailData = false;
let validPassData = false;

myForm.onsubmit = function (event) {
    event.preventDefault();

    validateEmail();
    validatePassword();

    if (validEmailData && validPassData) {
        emailDetails.value = "";
        passInput.value = "";
        window.open("dashBoard.html", "_self");
    }
}

emailDetails.addEventListener("input", function (event) {
    event.preventDefault();
    validateEmail();
});

passInput.addEventListener("input", function (event) {
    event.preventDefault();
    validatePassword();
});

function validateEmail() {
    const emailValue = emailDetails.value.trim();

    if (emailValue === "") {
        showError(emailError, "This field is required");
        validEmailData = false;
    } else if (!emailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showError(emailError, "Invalid Email");
        validEmailData = false;
    } else {
        clearError(emailError);
        validEmailData = true;
    }
}

function validatePassword() {
    const passValue = passInput.value.trim();

    if (passValue === "") {
        showError(passError, "This field is required");
        validPassData = false;
    } else {
        clearError(passError);
        validPassData = true;
    }
}

function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.color = "red";
    errorElement.style.margin = "-14px 180px 15px 0px";
    errorElement.style.fontSize = "small";
}

function clearError(errorElement) {
    errorElement.textContent = "";
}

forgot.addEventListener("click", function () {
    window.open("forgot.html", "_self");
});

signUp.addEventListener("click", function () {
    window.open("newAccount.html", "_self");
});
    