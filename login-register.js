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
    }
}