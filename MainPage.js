function hideaside() {
    menubar = document.getElementById("sidebar");
    isopen = menubar.style.width === "0px";
    if (isopen) {
        menubar.style.width = "260px";
        document.getElementById("sidebar").getElementsByClassName("div")[0].style.display = "block";
    } else {
        menubar.style.width = "0px";
        document.getElementById("sidebar").getElementsByClassName("div")[0].style.display = "none";
    }
}
window.addEventListener("DOMContentLoaded", function () {
    var storedemail = localStorage.getItem("emaiil");
    var storedPassword = localStorage.getItem("passworrd");
    if (storedPassword == null && storedemail == null) {
      window.location.href = "login-register.html";
    }
  
    if (storedemail && storedPassword) {
      var emailInput = document.querySelector(
        "#login .form-container input[type='email']"
      );
      var passwordInput = document.querySelector(
        "#login .form-container input[type='password']"
      );
  
      if (emailInput && passwordInput) {
        emailInput.value = storedemail;
        passwordInput.value = storedPassword;
      }
    }
  });