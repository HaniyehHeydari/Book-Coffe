const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


function validateForm() {
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var codemli = document.getElementById("codemli").value;
    var phone = document.getElementById("phone").value;
    var edu = document.getElementById("edu").value;
   
    if (name === "" || lname === "" || email === ""   || password === ""|| codemli === "" || phone === "" || name === "مدرک تحصیلی" ) {
        document.getElementById("name").classList.add("error");
        document.getElementById("lname").classList.add("error");
        document.getElementById("email").classList.add("error");
        document.getElementById("password").classList.add("error");
        document.getElementById("codemli").classList.add("error");
        document.getElementById("phone").classList.add("error");
        document.getElementById("edu").classList.add("error");
      
    } else {}
}