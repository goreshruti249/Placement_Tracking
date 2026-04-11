let isLoggedIn = localStorage.getItem("isAdminLoggedIn");

if(isLoggedIn !== "true"){
    window.location.href = "adminLogin.html";
}

function logout(){
    localStorage.clear();
    window.location.href = "adminLogin.html";
}