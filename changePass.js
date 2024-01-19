const changePassForm = document.getElementById("changePassForm");

const oldPassword = document.getElementById("oldPassword");
const oldPassErr = document.getElementById("oldPassErr");

const newPassword = document.getElementById("newPassword");
const newpassError = document.getElementById("newpassError");

const confirmNewPass = document.getElementById("confirmNewPass");
const confirmError = document.getElementById("confirmError");

const changePassBtn = document.getElementById("changePassBtn")

var oldPassValid = false;
var newPassValid = false;
var confirmPassValid = false;


changePassBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    oldPassCheck();
    newPassCheck();
    confirmNewPassCheck();

    if (oldPassValid && newPassValid && confirmPassValid) {
        clearError(oldPassErr);
        clearError(newpassError);
        clearError(confirmError);
    // toastr.success('Profile updated successfully!');
    }
});

//this is about old password thing
oldPassword.addEventListener("blur", () => {
       oldPassCheck()
})
function oldPassCheck(params) {
        if (oldPassword.value.trim() === "") {
          showError(oldPassErr , "**Enter current password**");
        oldPassValid = false;
    } else {
        clearError(oldPassErr)
        oldPassValid = true;
    }
}
function showError(errorElement , message) {
    errorElement.textContent = message
    errorElement.style.color = "red";
    // errorElement.style.border = "2px solid red";
    errorElement.style.top = "38%";
    errorElement.style.left = "36%"
    errorElement.style.position = "fixed";
    errorElement.style.fontSize = "small";
}
function clearError(errorElement) {
    errorElement.textContent = " "
}


//this is about new password, i thing it'll be difcuilt 
newPassword.addEventListener("blur" , () => {
    newPassCheck()
})
function newPassCheck(params) {
    if (newPassword.value.trim() === "") {
        newPassError(newpassError);
        newPassValid = false;
    } else if (!newPassword.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/)) {
        newPassError(newpassError);
    }else {
        clearError(newpassError);
        newPassValid = true;
    }
}
function newPassError(message) {
    let errorElement = document.getElementById("newpassError");

    if (errorElement) {
        errorElement.innerHTML = `**one uppercase alphabet**<br> 
                                  **one lowercase alphabet**<br>
                                  **one number**<br>
                                  **one special character**<br>
                                  **minimum 6 letters**`
        errorElement.style.color = "red";
        errorElement.style.margin = "-30px 0 30px -190px "
        errorElement.style.fontSize = "small"
    } else if (!newPassword.value.match(/^(?=.*[a-z])$/)) {
        errorElement.style.color = "green"
    } else{
        errorElement = ""
    }
}

// this is about confirm password
confirmNewPass.addEventListener("blur", () => {
    confirmNewPassCheck();
})
function confirmNewPassCheck(params) {
    if (confirmNewPass.value.trim() !== newPassword.value.trim()) {
        confirmError1(confirmError);
        confirmPassValid = false;
    } else {
        clearError(confirmError);
        confirmPassValid = true;
    }
}
function confirmError1(params) {
    let confirmRed = document.getElementById("confirmError");

    if (confirmRed) {
        confirmRed.textContent = "**Password doesn't match**";
        confirmRed.style.color = "red";
        confirmRed.style.fontSize = "small"
        confirmRed.style.margin = "-29px 198px 10px 0"
    }
}
function clearError(error) {
    error.textContent = ""
}
function openProfile(params) {
    window.open("profile.html", "_self");
}

function logOut(params) {
    window.open("index.html", "_self");
}

function openChangePassword(params) {
    window.open("changePass.html", "_self")
}



// var oldPassValid = false;

// changePassBtn.addEventListener("click", (event) => {
//     event.preventDefault(); // Prevent form submission

//     oldPassCheck();

//     if (oldPassValid) {
//         clearError(oldPassErr);
//     }
// });



// oldPassword.addEventListener("blur", () => {
//     oldPassCheck()
// })
// function oldPassCheck(params) {
//      if (oldPassword.value.trim() === "") {
//        showError(oldPassErr);
//      oldPassValid = false;
//  } else {
//      clearError(oldPassErr)
//      oldPassValid = true;
//  }
// }
// function showError() {
//  if (oldPassErr.value.trim() === "") {
//      oldPassErr.textContent = "hi"
//  }
// }
// function clearError(errorElement) {
//  errorElement.textContent = " "
// }


































// https://chat.openai.com/c/2706fc53-6de5-40d7-96f9-a83b3ee8ffe4     imp