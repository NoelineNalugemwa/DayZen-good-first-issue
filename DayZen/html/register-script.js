

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".container").style.opacity = "1";
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    localStorage.setItem('username',username)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)


    window.location.href = "indexacc.html";
});
