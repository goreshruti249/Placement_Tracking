let baseURL= 'https://placementstracker-4.onrender.com/api';

let getStudents= async()=>{
    return fetch(`${baseURL}/students`).then ((res)=>{
        return res.json();
    })
}

let getColleges= async()=>{
    return fetch(`${baseURL}/colleges`).then ((res)=>{
        return res.json();
    })
};

let getCompanies= async()=>{
    return fetch(`${baseURL}/companies`).then ((res)=>{
        return res.json();
    })
};

let getJob= async()=>{
    return fetch(`${baseURL}/job-roles`).then ((res)=>{
        return res.json();
    })
};
function logout(){

    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("adminName");

    window.location.href = "adminLogin.html";
}