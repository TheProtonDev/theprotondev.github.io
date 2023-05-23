let activeElement = document.activeElement;
$(document).ready(function () {
    document.getElementById("curserInput").focus()
    checkForAutoExecParam()
    getDate();
    $(this).click(function () {
        let activeElement = document.activeElement;
        if (activeElement.id !== "curserInput") {
            document.getElementById("curserInput").focus()
        }
        console.log(activeElement.tagName, activeElement.type || 'N/A');
    });
    $(document).on('keypress', function (event) {
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            document.getElementById("curserInput").disabled = true
            processCommand(document.getElementById("curserInput").value)
            document.getElementById("curserInput").id += "a"
            document.getElementById("curserInput").focus()
        }
    });
    $(document).bind("keyup keydown", function (e) {
        if (e.ctrlKey && e.keyCode == 76) {
            location.reload();
            return false;
        }
    });
    $(document).keydown(function (e){
        if (e.keyCode == 9) {
            document.getElementById("curserInput").value = autoCompleteCMD()
            e.preventDefault();
        }
    })
});