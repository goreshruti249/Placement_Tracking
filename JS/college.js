let collegesContainer = document.getElementById("college-container");
let allColleges=[];

let callCollegeFromApi= async()=>{
    allColleges = await getColleges();
    console.log(allColleges);
    
    displayCollege(allColleges);
};
callCollegeFromApi();

const collegeImages = {
    "Maharashtra Institute of Technology Pune": "../images/pune.jpg",
    "Maharashtra Institute of Technology Mumbai": "../images/mumbai.jpg",
    "Maharashtra Institute of Technology Nashik": "../images/nashik.jpg",
    "Maharashtra Institute of Technology Kolhapur": "../images/kolhapur.jpg",
    "Maharashtra Institute of Technology Nagpur": "../images/nagpur.jpg",
    "Maharashtra Institute of Technology Aurangabad": "../images/aurangabad.jpg",
    "Maharashtra Institute of Technology Satara": "../images/satara.jpg",
    "Maharashtra Institute of Technology Solapur": "../images/solapur.jpg",
    "Maharashtra Institute of Technology Sangli": "../images/sangli.jpg",
    "Maharashtra Institute of Technology Jalgaon": "../images/jalgaon.jpg"
};

let displayCollege = (college) => {

    collegesContainer.innerHTML = college.map((ele) => `
    
    <div class="college-card">

        <div class="college-img">
            <img src="${collegeImages[ele.name] || '../images/default.jpg'}" alt="${ele.name}">
        </div>

        <div class="college-info">
            <h3>${ele.name}</h3>

            <p><strong>ID:</strong> ${ele.college_id}</p>
            <p><strong>University:</strong> ${ele.affiliated_to}</p>
            <p><strong>Type:</strong> ${ele.type}</p>
            <p><strong>Established:</strong> ${ele.established_year}</p>
            <p><strong>Location:</strong> ${ele.location?.city || "N/A"}, ${ele.location?.state || "N/A"}</p>

            
        </div>

    </div>

    `).join("");
};
let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase().trim();

    let filteredColleges = allColleges.filter((ele) => {

        return (
            ele.name.toLowerCase().includes(value) ||
            ele.affiliated_to.toLowerCase().includes(value) ||
            ele.location.city.toLowerCase().includes(value) ||
            ele.location.state.toLowerCase().includes(value)
        );

    });

    if (filteredColleges.length > 0) {
        displayCollege(filteredColleges);
    } else {
        collegesContainer.innerHTML = `
        <div class="no-college-box">
            <h2>🏫 No College Found</h2>
            <p>Try another search keyword</p>
        </div>
        `;
    }

});