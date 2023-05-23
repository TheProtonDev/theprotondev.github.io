/**
 * Runs every time tab is pressed while page is focused, if nothing is input will automatically autocomplete 'help' otherwise searches for most fitting CMD
 * @returns {String} String most fitting the search term
 */
function autoCompleteCMD(){
    let cmds = getCommandList()
    let cmdToFind = document.getElementById("curserInput").value
    return cmds.find(cmd => cmd.search(cmdToFind) !== -1)
}

function getCommandList(){
    return ["help", "about", "skills", "projects", "clr", "clear", "contact", "oldsite"]
}

function processCommand(cmd){
    let helpElement = `<p class='accentSpan'>Commands available:</p><p><span class='accentSpan'>help</span><br>Shows the available commands</p>
<p><span class='accentSpan'>about</span><br>A little bit of background for who I am</p><p><span class='accentSpan'>projects</span><br>My
    GitHub page with my various projects, feel free to follow me too!</p><p><span class='accentSpan'>skills</span><br>Lists
    my skill list</p><p><span class='accentSpan'>clear or clr (ctrl+l also supported)</span><br>Clears terminal</p><p>
    <span class='accentSpan'>oldsite</span><br>Redirects to old portfolio site (unmaintained after 5/22/2023, purely linked for archival purposes)</p>`
    let aboutElement = `<p class='accentSpan'>Hello,</p><p>I'm Zaden Maestas, a computer nerd since early childhood which sparked my passion for programming, I'm also a music enthusiast, and a very passionate programmer</p>`
    let skillsElement = `<p class='accentSpan'>I'm experienced in: </p><p>- Python</p><p>- Javascript & NodeJS</p><p>- HTML and CSS</p>
<p class='accentSpan'>I'm familiar with: </p><p>- C++</p><p>- Processing</p><p>- PHP</p><p>- Bash</p>`
    let projectsElement = `<p class='accentSpan'>My Projects:</p><p></p><a href="https://github.com/ZadenMaestas" target="_blank">https://github.com/ZadenMaestas</a><p></p>`
    let contactElement = `<p class='accentSpan'>Contact Me:</p><p></p><a href="mailto:zadenmaestasdev@gmail.com" target="_blank">Email | zadenmaestasdev@gmail.com</a><p></p>`
    switch (cmd.toLowerCase()){
        case "help":
            document.getElementsByClassName("container")[0].insertAdjacentHTML("beforeEnd", helpElement)
            break
        case "about":
            document.getElementsByClassName("container")[0].insertAdjacentHTML("beforeEnd", aboutElement)
            break
        case "skills":
            document.getElementsByClassName("container")[0].insertAdjacentHTML("beforeEnd", skillsElement)
            break
        case "projects":
            document.getElementsByClassName("container")[0].insertAdjacentHTML("beforeEnd", projectsElement)
            break
        case "clear":
            location.reload()
            break
        case "clr":
            location.reload()
            break
        case "contact":
            document.getElementsByClassName("container")[0].insertAdjacentHTML("beforeEnd", contactElement)
            break
        case "oldsite":
            document.location.href += "/old/"
            break
        default: // If command was not recognized
            document.getElementsByClassName("container")[0].insertAdjacentHTML("beforeEnd", `<p style="color: red;">Error: ${cmd.toLowerCase()} is not a valid command. Please run <span class="accentSpan">'help'</span> to get available commands</p>`)
    }
    newCMDPrompt()
}