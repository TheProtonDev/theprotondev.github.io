function getDate() {
    const date = new Date();
    document.getElementById("dateBox").innerText += `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

function newCMDPrompt() {
    const element = `<p class="textInput">zaden@zadenmaestasdev.software ~>     <input autocomplete="off" id="curserInput" type="text"> <p>`
    document.getElementsByClassName("container")[0].insertAdjacentHTML("beforeEnd", element)
}

function checkForAutoExecParam(){
    const urlParams = new URLSearchParams(window.location.search);
    const autoExec = urlParams.get('autoExec');
    if (autoExec !== null){
        document.getElementById("curserInput").value = autoExec
        document.getElementById("curserInput").disabled = true
        document.getElementById("curserInput").id += "a"
        processCommand(autoExec)
    }
}