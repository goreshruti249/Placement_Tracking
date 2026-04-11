let jobroleContainer = document.getElementById("jobrole-container");

let jobs = [
{
    role: "Software Developer",
    company: "Infosys",
    location: "Pune",
    package: "4.5 LPA",
    experience: "Fresher",
    skills: ["Java", "SQL", "Spring"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
},

{
    role: "Frontend Developer",
    company: "TCS",
    location: "Mumbai",
    package: "5 LPA",
    experience: "0-1 Year",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
},

{
    role: "Backend Developer",
    company: "Wipro",
    location: "Hyderabad",
    package: "6 LPA",
    experience: "Fresher",
    skills: ["Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
},

{
    role: "Automation Tester",
    company: "Accenture",
    location: "Bangalore",
    package: "5.2 LPA",
    experience: "0-2 Year",
    skills: ["Selenium", "Java", "Manual"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
},

{
    role: "Full Stack Developer",
    company: "Capgemini",
    location: "Chennai",
    package: "7 LPA",
    experience: "Fresher",
    skills: ["React", "Node", "MongoDB"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
},

{
    role: "Data Analyst",
    company: "Cognizant",
    location: "Noida",
    package: "6.5 LPA",
    experience: "0-1 Year",
    skills: ["Excel", "SQL", "Python"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
}
];

function displayJobs(data) {

jobroleContainer.innerHTML = data.map((ele) => `
<div class="job-card">

    <div class="job-img">
        <img src="${ele.image}">
    </div>

    <div class="job-info">
        <h3>${ele.role}</h3>

        <p class="company-name">${ele.company}</p>

        <p><strong>Location:</strong> ${ele.location}</p>
        <p><strong>Package:</strong> ${ele.package}</p>
        <p><strong>Experience:</strong> ${ele.experience}</p>

        <div class="tags">
            ${ele.skills.map(skill => `<span>${skill}</span>`).join("")}
        </div>

        
    </div>

</div>
`).join("");

}

displayJobs(jobs);


/* Search */

document.getElementById("searchInput").addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let filtered = jobs.filter((ele)=>
    ele.role.toLowerCase().includes(value) ||
    ele.company.toLowerCase().includes(value)
);

displayJobs(filtered);

});