let companyContainer = document.getElementById("company-container");

/* FETCH DATA */
let callCompanyFromApi = async () => {
let res = await getCompanies();


let companies = res.data || res;

displayCompanies(companies);


};

callCompanyFromApi();

/* DISPLAY COMPANIES */
let displayCompanies = (companies) => {
companyContainer.innerHTML = companies.map((ele) => {


    let logo = getCompanyLogo(ele.name);

    return `
    <div class="company-card">

        <div class="company-img">
            <img src="${logo}" alt="${ele.name}">
        </div>

        <div class="company-info">
            <h3>${ele.name}</h3>
            <p><b>Industry:</b> ${ele.industry || "N/A"}</p>
            <p><b>Location:</b> ${
    ele.location?.city && ele.location?.state
        ? `${ele.location.city}, ${ele.location.state}`
        : "India"
}</p>
        </div>

    </div>
    `;
}).join("");


};

/* COMPANY LOGO MAPPING */
let getCompanyLogo = (name) => {
    name = name.toLowerCase();

    if (name.includes("tcs"))
        return "../Images/tcs.png";

    if (name.includes("infosys"))
        return "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg";

    if (name.includes("wipro"))
        return "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg";

    if (name.includes("accenture"))
        return "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg";

    if (name.includes("cognizant"))
        return "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg";

    if (name.includes("capgemini"))
        return "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg";

    if (name.includes("amazon"))
        return "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg";

    if (name.includes("flipkart"))
        return "../Images/flipkart.jpg";

    return "https://via.placeholder.com/100?text=Company";
    
};







