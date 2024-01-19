const formContent = document.getElementById("form-content");
const myForm = document.getElementById("myForm");
const close = document.getElementById("close");
const addUser = document.getElementById("addUser");
const formAline = document.getElementById("form-aline");
const dropDown = document.getElementById("dropDown");

const FirstName = document.getElementById("FirstName");
const firstError = document.getElementById("firstError");

const LastName = document.getElementById("LastName");
const lastError = document.getElementById("lastError");

const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");

const mobileNumber = document.getElementById("mobileNumber");
const numberError = document.getElementById("numberError");

const imageInput = document.getElementById("imageInput");
const imageError = document.getElementById("imageError");
const imagePreview = document.getElementById("image-preview")

const AddUserBtn = document.getElementById("Add-UserBtn");
const search = document.getElementById("search-AddUser");

// const firstNameValid = false;


var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validMobileNum = false;
var validImage = false;

AddUserBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    FirstNameInput();
    LastNameInput();
    emailInputData();
    numberInput();
    imageInputData();


});
FirstName.addEventListener("blur",()=>{
      FirstNameInput();
})
function FirstNameInput(params) {
    const nameFirst = FirstName.value.trim()
    if (nameFirst === "") {
        showError(firstError, "first name is required")
        validFirstName = false;
     } else {
        clearError(firstError);
         validFirstName = true;
     }
}
LastName.addEventListener("blur",()=>{
    LastNameInput();
})
function LastNameInput() {
    const nameLast = LastName.value.trim();
    
    if (nameLast === "") {
        showError(lastError, "last name is required");
        validLastName =false;
    } else {
        clearError(lastError);
        validLastName = true;
    }
}

emailInput.addEventListener("blur", ()=>{
    emailInputData();
})
function emailInputData(params) {
    const InputEmail = emailInput.value.trim();

    if (InputEmail === "") {
        showError1(emailError,"email is required");
        validEmail = false;
    } else if (!InputEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showError1(emailError, "enter correct email");
        validEmail = false;
    }else{
        clearError(emailError);
        validEmail = true;
    }
}

mobileNumber.addEventListener("blur",()=>{
    numberInput();
})
function numberInput(params) {
    const numberData = mobileNumber.value.trim();

    if (numberData === "") {
        showError2(numberError, "mobile number is required");
        validMobileNum = false;
    } else if (!/^\d+$/.test(numberData) || numberData.length !== 10) {
        showError(numberError, "invalid mobile number")
        validMobileNum = false;
    }else{
        clearError(numberError);
        validMobileNum = true;
    }
}

imageInput.addEventListener("change",(event)=>{
    imageInputData(event);
})

function imageInputData(event) {
    const files = event.target.files;
    ImageUrl(files)
}
function ImageUrl(files) {
    let file;
    if (files && files.length > 0) {
      file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        imagePreview.src = reader.result;
        validImage = true;
        clearError(imageError)
      };
    } else {
      imagePreview.src = "";
      validImage = false;
      showError(imageError, "this field is required")
    }
}

function addUser1(params) {
    var FirstName1 = FirstName.value;
    var LastName1 = LastName.value;
    var email1 = emailInput.value;
    var mobileNumber1 = mobileNumber.value;

    const user = { FirstName1, LastName1, email1, mobileNumber1, image: cardURL };
    users.push(user);
    formAline.style.display = "none";
    cleaForm();


var user2 = "";
search.addEventListener("input", (event) => {
    searchValue = event.target.value;
    var searchData = users.filter((user) => {
        return (
            user.FirstName1.includes(searchValue) ||
            user.LastName1.includes(searchValue) ||
            user.email1.includes(searchValue) ||
            user.mobileNumber1.includes(searchValue)
        );
    });
    user2 = searchData;
    displayuser()
})

function displayuser() {
    if (search.value.trim === "") {
        dataBox.innerHtml = "";
        users.forEach((userdata, index) => {
            const card = document.createElement("div");
            card.className = "userBox";
            card.innerHTML = `<div class="userIcons">
                                 <button onclick="updateUser(${index})"><i class="fa-solid fa-pen"></i></button>
                                 <button onclick="deleteUser(${index})"><i class="fa-solid fa-trash"></i></button>
                             </div>
                             <div class="userMainInfo">
                                 <div class="userImg">
                                     <img src="${userdata.image}" alt="" srcset="">
                                 </div>
                                 <div class="userdata">
                                     <p>Name: ${userdata.firstname1} ${userdata.lastname1}</p>
                                     <p>Email: ${userdata.email1}</p><p>Mobile No: ${userdata.phone1}</p>
                                  </div>
                             </div>`
                             dataBox.appendChild(card);
                             emptyDataPopUp.style.display = "none";
        });
    }else if(search.value.trim() !== ""){
        dataBox.innerHTML = "";
        if(users2 != ""){
          users2.forEach((userdata, index) => {
            const card = document.createElement("div");
            card.className = "userBox";
            card.innerHTML = `<div class="userIcons">
                                 <button onclick="updateUser(${index})">
                                     <i class="fa-solid fa-pen"></i>
                                 </button>
                                 <button onclick="deleteUser(${index})"><i class="fa-solid fa-trash"></i>
                                 </button>
                              </div>
                              <div class="userMainInfo">
                                  <div class="userImg">
                                      <img src="${userdata.image}" alt="" srcset="">
                                  </div>
                                  <div class="userdata">
                                     <p>Name: ${userdata.firstname1} ${userdata.lastname1}</p>
                                     <p>Email: ${userdata.email1}</p>
                                     <p>Mobile No: ${userdata.phone1}</p>
                                  </div>
                              </div>`;
            dataBox.appendChild(card);
          });
        }else if(users2 == ""){
          emptyDataPopUp.style.display = "block"
        }
        
      }
}

let userDeleteIndex = "";
function deleteUser(index) {
  userDeleteIndex = index;
  deletePopUp.style.display = "block";
}
function deleteyes(event) {
  URL.revokeObjectURL(users[userDeleteIndex].image);
  users.splice(userDeleteIndex, 1);
  displayuser();
  deletePopUp.style.display = "none";
  toastr.info("User data deleted");
  event.preventDefault();
}
function deleteno(event) {
  displayuser();
  deletePopUp.style.display = "none";
  event.preventDefault();
}

var a = "add";
// console.log(a);
var indexValue = "";
function updateUser(index) {
  indexValue = index;
  const user = users[index];
  a = "edit";
  // console.log(user, index, a);
  document.getElementById("FirstName").value = user.FirstName1;
  document.getElementById("LastName").value = user.LastName1;
  document.getElementById("emailInput").value = user.email1;
  document.getElementById("mobileNumber").value = user.mobileNumber1;
  document.getElementById("imageInput").value = "";
  if (imageInput.value === "") {
    user.image = user.image;
  }
  document.getElementById("imagepreview").src = user.image;
  addUserPopUp.style.display = "block";
  addUserMainBtn.innerText = "Update User";
  popuptitle.innerText = "Update User";
  users[index].FirstName1 = FirstName.value;
  users[index].LastName1 = LastName.value;
  users[index].email1 = emailInput.value;
  users[index].mobileNumber1 = mobileNumber.value;
  addUserPopUp.scrollTop = 0;
}
function edituser() {
  users[indexValue].FirstName1 = FirstName.value;
  users[indexValue].LastName1 = LastName.value;
  users[indexValue].email1 = emailInput.value;
  users[indexValue].mobileNumber1 = mobileNumber.value;
  users[indexValue].imageInput = cardURL;
  addUserPopUp.style.display = "none";
  clearForm();
}

function clearForm() {
  document.getElementById("FirstName").value = "";
  document.getElementById("LastName").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("mobileNumber").value = "";
  document.getElementById("imageInput").value = "";
  imagePreview.src = "";

  firstnamemgs.textContent = "";
  lastnamemgs.textContent = "";
  phonemgs.textContent = "";
  photomgs.textContent = "";
  emailmgs.textContent = "";
}

}

// function valid(event) {
//   if (
//     firstname.value !== "" &&
//     validfirstnamedata &&
//     validlastnamedata &&
//     validemaildata &&
//     validPhoneData &&
//     validPhotoData
//   ) {
//     if (a === "edit") {
//       edituser();
//       displayuser();
//       toastr.success("Sucessfully User Updated");
//       a = "add";
//       addUserMainBtn.innerText = "Add User";
//     } else if (a === "add") {
//       adduser();
//       displayuser();
//       // console.log(users);
//       toastr.success("Sucessfully User Added");
//       clearForm();
//     }
//     event.preventDefault();
// }}
// imageInput.addEventListener("change", (event) => {
//     imageInputData(event);
// });

// function imageInputData(event) {
//     const files = event.target.files;
//     ImageUrl(files);
// }



function showError1(errorElement,message) {
    errorElement.textContent = message;
    errorElement.style.color = "red";
    errorElement.style.margin = "-22px 410px 15px 0";
    // errorElement.style.margin = "-22px 390px 15px 0";
    errorElement.style.fontSize = "x-Small";
    // errorElement.style.fontSize = "Small";
}
function showError2(errorElement,message) {
    errorElement.textContent = message;
    errorElement.style.color = "red";
    errorElement.style.margin = "-22px 370px 15px 0";
    // errorElement.style.margin = "-22px 390px 15px 0";
    errorElement.style.fontSize = "x-Small";
    // errorElement.style.fontSize = "Small";
}

function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.color = "red";
    // errorElement.style.margin = "-20px 370px 15px 0";
    errorElement.style.margin = "-22px 390px 15px 0";
    errorElement.style.fontSize = "x-Small";
    // errorElement.style.fontSize = "Small";
}
function clearError(errorElement) {
    errorElement.textContent = ""
}






function logOut(params) {
    window.open("index.html", "_self");
}
function Profile(params) {
     window.open("profile.html", "_self");
}
function ChangePassword(params) {
    window.open("changePass.html", "_self");
}

function showForm(event) {
    formAline.style.display = "block";
    // event.preventDefault()
}

function hideForm(event) {
    formAline.style.display = "none";
    // event.preventDefault()
}



