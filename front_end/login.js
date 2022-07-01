// login 
if (document.getElementById("login_button")) {
    document.getElementById("login_button").onclick = function() {validate_login()}
}

function validate_login() {
    verify("floatingInput", 0, "alertUser", validate_email);
    verify("floatingPassword", 0, "alertPassword")
}