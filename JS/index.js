let index= async()=>{
    let students= await getStudents();
    let colleges= await getColleges();
    let companies= await getCompanies();
    let jobs= await getJob();
    console.log(students.length);

    let studentsBox= document.getElementById("students")
    studentsBox.innerHTML=<h1>Total Students ${students.length}</h1>;

    let collegesBox= document.getElementById("colleges")
    collegesBox.innerHTML=<h1>Total Colleges ${colleges.length}</h1>;

    let companiesBox= document.getElementById("companies")
    companiesBox.innerHTML=<h1>Total Companies ${companies.length}</h1>;

    let jobBox= document.getElementById("jobs")
    jobBox.innerHTML=<h1>Total Colleges ${jobs.length}</h1>;


};
index();