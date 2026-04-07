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

  await fetch("https://placementstracker-4.onrender.com/api/students", {
    method: "POST",
    headers: {
      "content_type": "application/json"
    },
    body: JSON.stringify(student),
  });
  alert("student added successfully");
})