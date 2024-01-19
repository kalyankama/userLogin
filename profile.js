


const profileForm = document.getElementById("profileForm");
const profileFirst = document.getElementById("profileFirst");
const firstNameErr = document.getElementById("firstNameErr");
const profileLast = document.getElementById("profileLast");
const lastNameErr = document.getElementById("lastNameErr");
const profileEmail = document.getElementById("profileEmail");
const emailErr = document.getElementById("emailErr");
const profileBtn = document.getElementById("profileBtn")

let validEmailData = false;
let validFirstName = false;
let validLastName = false;

profileBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    validateFirst();
    validateLast();
    validateEmail();

    if (validEmailData && validFirstName && validLastName) {
        clearError(firstNameErr);
        clearError(lastNameErr);
        clearError(emailErr);
    // toastr.success('Profile updated successfully!');
    }
});

profileFirst.addEventListener("blur", () => {
    validateFirst();
});

profileLast.addEventListener("blur", () => {
    validateLast();
});

profileEmail.addEventListener("blur", () => {
    validateEmail();
});

function validateEmail() {
    const emailValue = profileEmail.value.trim();

    if (emailValue === "") {
        showError(emailErr, "please Enter a Valid Email");
        validEmailData = false;
    } else if (!profileEmail.validity.valid) {
        showError(emailErr, "Invalid Email format");
        validEmailData = false;
    } else {
        clearError(emailErr);
        validEmailData = true;
    }
}

function validateFirst() {
    const firstNameValue = profileFirst.value.trim();

    if (firstNameValue === "") {
        showError(firstNameErr, "First name is required");
        validFirstName = false;
    } else {
        clearError(firstNameErr);
        validFirstName = true;
    }
}

function validateLast() {
    const lastNameValue = profileLast.value.trim();

    if (lastNameValue === "") {
        showError(lastNameErr, "Last name is required");
        validLastName = false;
    } else {
        clearError(lastNameErr);
        validLastName = true;
    }
}

function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.color = "red";
    errorElement.style.margin = "-16px 210px 15px 0px";
    errorElement.style.fontSize = "small";
    // errorElement.emailErr.style.marginLeft = "200px"
}

function clearError(errorElement) {
    errorElement.textContent = "";
}


function logOut(params) {
    window.open("index.html", "_self");
}

function openChangePassword(params) {
    window.open("changePass.html", "_self")
}

// ... Your existing code ...

// // After your existing JavaScript code
// function updateProfile() {
//     // Your update profile logic here

//     // Show a success message using toastr
//     toastr.success('Profile updated successfully!');
// }

// // Ensure Toastr is loaded before calling updateProfile
// if (typeof toastr !== 'undefined') {
//     // The Toastr library is available, so you can call updateProfile
//     updateProfile();
// } else {
//     // Toastr is not loaded, you might want to handle this case or include a fallback
//     console.error('Toastr library is not loaded.');
// }
