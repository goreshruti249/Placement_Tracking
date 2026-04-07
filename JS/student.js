let studentsContainer = document.getElementById("student-container");
let allStudents;

let callStudentFromApi = async () => {

    let res = await fetch("https://randomuser.me/api/?results=50&nat=in");
    let data = await res.json();

    // Convert API data into your project format
    allStudents = data.results.map((ele, index) => ({
        student_id: "S" + (100 + index),

        personal_info: {
            full_name: ele.name.first + " " + ele.name.last,
            profile_image: ele.picture.large
        },

        academic_info: {
            college_id: "COL00" + (index + 1)
        },

        placement_status: Math.random() > 0.5 ? "Placed" : "Not Placed"
    }));

    displayStudent(allStudents);
};
callStudentFromApi();

let displayStudent = (students) => {

    studentsContainer.innerHTML = students.map((ele) => `
    
    <div class="student-card">

        <div class="img-box">
            <img src="${ele.personal_info.profile_image}" alt="student">
        </div>

        <span class="status ${ele.placement_status === 'Placed' ? 'placed' : 'not-placed'}">
            ${ele.placement_status}
        </span>

        <div class="student-info">
            <h3>${ele.personal_info.full_name}</h3>
            <p><strong>College ID:</strong> ${ele.academic_info.college_id}</p>

            <div class="btn-group">
                <button class="edit-btn" onclick="editStudent('${ele.student_id}')">Edit</button>
                <button class="delete-btn" onclick="deleteStudent('${ele.student_id}')">Delete</button>
            </div>
        </div>

    </div>

    `).join("");
};

let editStudent =(id)=>{
    console.log("edited",id);
    window.location.href=`../HTML/editStudent.html?id=${id}`;
    
}

let deleteStudent = async(id)=>{
    console.log("deleteStudent");
    let conformDelete = confirm("Are you sure?");
    if(!conformDelete) return;
    await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`,{method:"DELETE"});
    callStudentFromApi();
} 


let placedStudent = document.getElementById("placedStudent");
placedStudent.addEventListener("click",()=>{
   let filterPlaced =allStudents.filter((ele)=>{
    return ele.placement_status === "Placed";
})

console.log(filterPlaced);
displayStudent(filterPlaced);
})

let notPlacedStudent = document.getElementById("notPlacedStudent");
notPlacedStudent.addEventListener("click",()=>{
   let filterNotPlaced =allStudents.filter((ele)=>{
    return ele.placement_status === "Not Placed";
})
console.log(filterNotPlaced);
displayStudent(filterNotPlaced);
})


let newStudent = document.getElementById("newStudent");
newStudent.addEventListener("click",()=>{
    window.location.href = "../HTML/addStudent.html";
})