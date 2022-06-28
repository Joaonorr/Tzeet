document.getElementById("login_button").onclick = function() {validate()}

function validate_email(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validate() {
    // validar login
    let login = document.getElementById("floatingInput").value;
    if (!validate_email(login)) {
        let elemento1 = document.getElementById("floatingInput");
        elemento1.classList.add("is-invalid");
        if (document.getElementsByClassName("alert-login").length == 0) {
            let aviso = document.createElement("p");
            let text = document.createTextNode("Informe um email válido.");
            aviso.appendChild(text);
    
            elemento1.parentNode.insertBefore(aviso, elemento1.firstElementChild)
            aviso.classList.add("alert-login");
        }
    }
    else {
        let elemento1 = document.getElementById("floatingInput");
        elemento1.classList.remove("is-invalid");
        elemento1.classList.add("is-valid")
        if (!document.getElementsByClassName("alert-login").length == 0) {
            let tag1 = document.querySelector("[class='alert-login']");
            if (tag1) {
                tag1.remove();
            }
        }
    }


    // validar senha
    let password = document.getElementById("floatingPassword").value;
    if(password == '') {
        let elemento2 = document.getElementById("floatingPassword");
        elemento2.classList.add("is-invalid");
        if (document.getElementsByClassName("alert-password").length == 0) {
            let aviso = document.createElement("p");
            let text = document.createTextNode("Campo obrigatório.");
            aviso.appendChild(text);
            elemento2.parentNode.insertBefore(aviso, elemento2.firstElementChild)
            aviso.classList.add("alert-password");

        }
        
    }
    else {
        let elemento2 = document.getElementById("floatingPassword");
        elemento2.classList.remove("is-invalid")
        elemento2.classList.add("is-valid")
        if (!document.getElementsByClassName("alert-password").length == 0) {
            let tag2 = document.querySelector("[class='alert-password']");
            tag2.remove();
        }
    }

}
