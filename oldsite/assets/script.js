// Dark Mode Code:

function applyLightMode() {
    document.body.style["backgroundColor"] = "rgb(255, 255, 255)";
    $(".primaryButton, p, :header").css("color", "black");
}

function applyDarkMode() {
    // Set proper styling for dark mode
    document.body.style["backgroundColor"] = "rgb(18, 18, 18)";
    $(".primaryButton, p, :header").css("color", "white");
}

function toggleDarkMode() {
    /*
    This function will be called when the toggle button is clicked, it will then check what the
    darkMode cookie reads as and set toggle it to the opposite of whatever the cookie is set to
    */
    // If dark mode has never been set, set it to false because by default it is on
    if (Cookies.get('darkMode') == undefined) {
        Cookies.set('darkMode', false, 30);
        let darkModeButton = document.getElementById("darkMode-toggle-on").id = "darkMode-toggle-off";
        applyLightMode();
        return true;

    }
    // If dark mode is enabled, apply light mode
    if (Cookies.get('darkMode') == "true") {
        Cookies.set('darkMode', false);// Set cookie to true
        document.getElementById("darkMode-toggle-on").id = "darkMode-toggle-off";
        applyLightMode();
        return true; // Exit function by returning true so the second if statement doesn't get needlessly executed
    }
    // If light mode is enabled, apply dark mode
    if (Cookies.get('darkMode') == "false") {
        Cookies.set('darkMode', true); // Set cookie to true
        document.getElementById("darkMode-toggle-off").id = "darkMode-toggle-on";
        applyDarkMode();
        return true; // Exit function by returning true so the second if statement doesn't get needlessly executed
    }
}

// Project card creation function
function newProjectCard(project_name, repo, description, production_link = "none", application_link_name = "Application link") {
    // Create the card based on parameters
    let createdCard = `<br> <div class="card" style="width: 20rem; margin-left: auto; margin-right: auto; background-color: transparent; border-color: #45007E; border-radius:12px"> <br><br> <h3 class="card-title">${project_name}</h3> <img class="card-img-top" src='https://opengraph.githubassets.com/1/theprotondev/${repo}' alt="Repository Stats Image From OpenGraph"> <div class="card-body"> <p class="card-text">${description}</p> </div> <div class="card-body"> <a target="_blank" href="https://github.com/theprotondev/${repo}" class="card-link">Repository Link</a>`;
    // Check if the project has an application link
    if (production_link !== "none") {
        createdCard += `<a target="_blank" href="${production_link}" class="card-link">${application_link_name}</a></div> </div>`;
    } else {
        createdCard += "</div></div>";
    }

    let projectDivContainer = document.getElementById("projects");
    projectDivContainer.insertAdjacentHTML("beforeend", createdCard);
}


// Blog card creation function
function newBlogCard(title, category, date) {
    // Create the card based on parameters
    let encodedTitle = encodeBlogTitle(title);
    let blogCard = `<div class="blogPost" onclick="window.location='${encodedTitle}'"><h5 style="font-weight: bolder;">${title}</h5><h5>${category} | ${date}</h5></div><br>`
    let blogDivContainer = document.getElementById("blogPosts");
    blogDivContainer.insertAdjacentHTML("beforeend", blogCard);
}

let page = window.location.pathname.split("/").pop();

// Add Projects to a div if the page is projects.html
if (page == "projects.html") {
    newProjectCard("MyStack", "mystack-node-webserver-template", "I needed serverside JS for a project I'm working on and came to really like doing things this way when working with websites, so I created this template for future use in later projects [still in development]");
    newProjectCard("Markdown Editor", "markdown-editor", "Just a fun little project I'm doing for practice and to burn time, name is pretty self explanatory", "https://zadenmaestas.github.io/markdown-editor");
    newProjectCard("DeviceSync", "DeviceSyncApp", "DeviceSync is an open source cross-platform note-taking application, it is licensed under the MIT License", "https://zadenmaestas.github.io/DeviceSync/index.html");
    newProjectCard("DeviceSync API", "devicesync-api", "The API used in the backend of DeviceSync, made in Python using Flask, it manages accounts, pastes, and more!");
    newProjectCard("MaskDetection", "MaskDetection", "This is an algorithm I made for a project in my PTech Pathway Class using TeachableMachine and a set of Python scripts I came up with to scrape data in large amounts for accuracy");
}

// ALWAYS DO LAST!!!
// Check if lightmode is enabled apply site look
if (Cookies.get('darkMode') === "false") {
    applyLightMode();
    document.getElementById("darkMode-toggle-on").id = "darkMode-toggle-off";
}
