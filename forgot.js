const emailSent = document.getElementById("emailSent");
const forgotPassword = document.getElementById("forgotPassword");
const emailMsg = document.getElementById("emailMsg");
const inputEmail = document.getElementById("inputEmail").value;
const resetBtn = document.getElementById("ResetBtn");

document.getElementById("forgotPassword").onsubmit=function (params) {
    if (inputEmail.value.trim() === "") {
        emailMsg.style.display = "block";
        return false();
        
    } else {
        emailMsg.style.display = "none";
        return true();
    }
}

function openLogin(params) {
    window.open("index.html", "_self");
}
