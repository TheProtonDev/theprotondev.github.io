$(document).ready(function () {
    document.getElementById("cursorInput").focus()
    checkForAutoExecParam()
    getDate();

    // Event Listeners
    $(this).click(function () {
        let activeElement = document.activeElement;
        if (activeElement.id !== "cursorInput") {
            document.getElementById("cursorInput").focus()
        }
        //console.log(activeElement.tagName, activeElement.type || 'N/A');
    });
    $(document).on('keypress', function (event) {
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13) {
            replaceFormerPrompt(true)
        }
    });
    $(document).bind("keyup keydown", function (e) {
        if (e.ctrlKey && e.keyCode === 76) {
            location.href = location.pathname
            return false;
        }
    });
    $(document).keydown(function (e){
        if (e.keyCode === 9) {
            document.getElementById("cursorInput").value = autoCompleteCMD()
            e.preventDefault();
        }
    })
});