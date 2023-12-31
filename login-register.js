const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

function check() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "" || password === "") {
        document.getElementById('error').textContent = "همه فیلد ها را پر کنید";
    } else {
        document.getElementById('error').textContent = "Incorrect username or password";
    }

}