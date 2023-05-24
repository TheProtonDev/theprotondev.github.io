function getDate() {
    const date = new Date();
    document.getElementById("dateBox").innerText += `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

function newCMDPrompt() {
    const element = `<p class="textInput">zaden@zadenm.dev ~>     <input autocomplete="off" spellcheck="false" id="cursorInput" type="text"> <p>`
    document.getElementsByClassName("container")[0].insertAdjacentHTML("beforeEnd", element)
    document.getElementById("cursorInput").focus()
}


function replaceFormerPrompt(processCMD){
    const inputCommand = document.getElementById("cursorInput").value

    document.getElementById("cursorInput").disabled = true
    document.getElementById("cursorInput").id += "_disabled"
    // Get currently used prompt get its value and run value as cmd if processCMD parameter is true and then disable it
    if (processCMD){
        processCommand(inputCommand)
        document.getElementById("cursorInput").focus() // focus in newly created prompt
    }
}

function checkForAutoExecParam(){
    const urlParams = new URLSearchParams(window.location.search);
    const autoExec = urlParams.get('autoExec');
    if (autoExec !== null){
        document.getElementById("cursorInput").value = autoExec
        document.getElementById("cursorInput").disabled = true
        document.getElementById("cursorInput").id += "_disabled"
        processCommand(autoExec)
    }
}