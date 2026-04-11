document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if(username === "admin" && password === "12345"){

        localStorage.setItem("isAdminLoggedIn","true");
        localStorage.setItem("adminName","Placement Admin");

        window.location.href = "index.html";

    }else{
        document.getElementById("errorMsg").innerText =
        "Invalid Username or Password";
    }

});