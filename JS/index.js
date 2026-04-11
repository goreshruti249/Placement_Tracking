/* Dashboard Counts */

document.getElementById("collegeCount").innerText = 12;
document.getElementById("studentCount").innerText = 150;
document.getElementById("placedCount").innerText = 96;
document.getElementById("companyCount").innerText = 28;


/* Latest Updates */

let updates = [
{
title: "Infosys hired 12 students",
desc: "Campus drive completed successfully from MIT Pune."
},

{
title: "TCS drive scheduled next week",
desc: "Students can apply before Friday."
},

{
title: "Accenture selected 8 candidates",
desc: "Round 2 interviews completed."
},

{
title: "Wipro added new job roles",
desc: "Frontend Developer and QA Tester openings available."
}
];

let updatesContainer = document.getElementById("updates-container");

updatesContainer.innerHTML = updates.map((ele)=>`
<div class="update-card">
    <h4>${ele.title}</h4>
    <p>${ele.desc}</p>
</div>
`).join("");