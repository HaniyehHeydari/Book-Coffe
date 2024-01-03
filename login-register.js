const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
const firstNameInput = document.getElementById("name");
firstNameInput.addEventListener("input", validateFirstName);
const lastNameInput = document.getElementById("lname");
lastNameInput.addEventListener("input", validateLastName);
const emailInput = document.getElementById("email");
emailInput.addEventListener("input", validateemailInput);
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", validatepasswordInput);

const errorMessage = document.getElementById('error-message');

function validateForm() {
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var codemli = document.getElementById("codemli").value;
    var phone = document.getElementById("phone").value;
    var edu = document.getElementById("edu").value;
    var gen = document.getElementById("gen").value;

    if (name === "" || lname === "" || email === "" || password === "" || codemli === "" || phone === "" || name === "مدرک تحصیلی" || gen === "") {
        document.getElementById("name").classList.add("error");
        document.getElementById("lname").classList.add("error");
        document.getElementById("email").classList.add("error");
        document.getElementById("password").classList.add("error");
        document.getElementById("codemli").classList.add("error");
        document.getElementById("phone").classList.add("error");
        document.getElementById("edu").classList.add("error");
        document.getElementById("gen").classList.add("error");
    } else {}
}

function validateFirstName() {
    const firstName = firstNameInput.value.trim();
    const namePattern = /^[\u0600-\u06FF\sA-Za-z]{3,}$/;

    if (firstName === "" || firstName.length < 3) {
        firstNameInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا  نام را به صورت صحیح وارد کنید';
    } else if (namePattern.test(firstName)) {
        firstNameInput.style.borderColor = "green";
        errorMessage.textContent = "";
    } else {
        firstNameInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا  نام را به صورت صحیح وارد کنید';
    }
}

function validateLastName() {
    const lastName = lastNameInput.value.trim();
    const namePattern = /^[\u0600-\u06FF\sA-Za-z]{3,}$/;

    if (lastName === "" || lastName.length < 3) {
        lastNameInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا  نام خانوادگی را به صورت صحیح وارد کنید';
    } else if (namePattern.test(lastName)) {
        lastNameInput.style.borderColor = "green";
        errorMessage.textContent = "";
    } else {
        lastNameInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا  نام خانوادگی را به صورت صحیح وارد کنید';
    }
}

function validateemailInput() {
    const email = emailInput.value.trim();
    const namePattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "") {
        emailInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا ایمیل را به صورت صحیح وارد کنید';
    } else if (namePattern.test(email)) {
        emailInput.style.borderColor = "green";
        errorMessage.textContent = "";
    } else {
        emailInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا  نام خانوادگی را به صورت صحیح وارد کنید';
    }
}

function validatepasswordInput() {
    const password = passwordInput.value.trim();
    const namePattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (password === "" || password.length < 8) {
        passwordInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا کلمه عبور را به صورت صحیح وارد کنید';
    } else if (namePattern.test(password)) {
        passwordInput.style.borderColor = "green";
        errorMessage.textContent = "";
    } else {
        passwordInput.style.borderColor = "red";
        errorMessage.textContent = 'لطفا کلمه عبور را به صورت صحیح وارد کنید';
    }
}