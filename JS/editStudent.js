let urlId = new URLSearchParams(window.location.search);
let id = urlId.get("id");
let loadStudent = async () => {
    let data = await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`);
    let student = await data.json();
    console.log(student);
    Fullname.value = student.personal_info.full_name;
    gender.value = student.personal_info.gender;
    dob.value = student.personal_info.date_of_birth;
    // profileimg.value = student.personal_info.profile_image;
    collegeId.value = student.academic_info.college_id;
    department.value = student.academic_info.department;
    degree.value = student.academic_info.degree;
    passout.value = student.academic_info.graduation_year;

    backlogs.value = student.academic_info.backlogs;
    programming.value = student.skills.programming
    database.value = student.skills.databases
    tools.value = student.skills.tools
    placement_status.value = student.placement_status;
}
loadStudent();

let studentForm = document.getElementById("studentForm");
studentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    // console.log("hello");

    let student = {
        personal_info: {
            full_name: Fullname.value,
            gender: gender.value,
            date_of_birth: dob.value,
            profile_image: profileimg.value,

        },
        academic_info: {
            college_id: collegeId.value,
            department: department.value,
            degree: degree.value,
            graduation_year: passout.value,
            cgpa: cgpa.value,
            backlogs: backlogs.value,
        },
        skills: {
            programming: programming.value.split(","),
            database: database.value.split(","),
            tools: tools.value.split(","),
        },
        placement_status: placement_status.value
    };
    console.log(student);

    await fetch(`https://placementstracker-4.onrender.com/api/student/${id}`, {
        method: "PUT",
        headers: {
            "content_type": "application/json"
        },
        body: JSON.stringify(student),
    });
    alert("student updated successfully");
})