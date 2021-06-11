let uname = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
// console.log(name, phone, email);
let validName = false;
let validEmail = false;
let validPhone = false;

uname.addEventListener("blur", () => {
  let regex = /^[a-zA-z]([a-zA-z]){1,20}$/;
  let str = uname.value;
  if (regex.test(str)) {
    console.log("Your name is valid");
    validName = true;
    uname.classList.remove("is-invalid");
  } else {
    console.log("Your name is invalid");
    validName = false;
    uname.classList.add("is-invalid");
  }
});
email.addEventListener("blur", () => {
  let regex = /^([a-zA-Z0-9\.\-\_]+)@([a-zA-Z0-9\.\-\_]+)\.()[a-zA-z]{2,10}$/;
  let str = email.value;
  if (regex.test(str)) {
    console.log("Your name is valid");
    validEmail = true;
    email.classList.remove("is-invalid");
  } else {
    console.log("Your name is invalid");
    validEmail = false;
    email.classList.add("is-invalid");
  }
});
phone.addEventListener("blur", () => {
  let regex = /^([0-9]{10}$)/;
  let str = phone.value;
  if (regex.test(str)) {
    console.log("Your name is valid");
    validPhone = true;
    phone.classList.remove("is-invalid");
  } else {
    console.log("Your name is invalid");
    validPhone = false;
    phone.classList.add("is-invalid");
  }
});

let button = document.getElementById("btn");
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (validName && validEmail && validPhone) {
    alert("Submitted Successfully");
  } else {
    alert("Please check and rectify the errors");
  }
});
