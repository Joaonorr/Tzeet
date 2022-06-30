// verify if the user send a input with a value
document.getElementById("floatingSelectGridMonth").onchange = function() {
    if (document.getElementById("floatingSelectGridMonth").value != "") {
        document.getElementById("floatingSelectGridDay").innerHTML = "";
        document.getElementById("floatingSelectGridYear").innerHTML = "";
        document.getElementById("floatingSelectGridDay").disabled = false;
        document.getElementById("floatingSelectGridYear").disabled = true;
        let qtdDays = JsonDate[document.getElementById("floatingSelectGridMonth").value].days;
        let option = document.createElement("option");
        option.value = "";
        option.text = "";
        document.getElementById("floatingSelectGridDay").options.add(option);

        for (let i = 1; i <= qtdDays; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.text = i;
            document.getElementById("floatingSelectGridDay").options.add(option);
        }
        selectYear();
    }
    else {
        document.getElementById("floatingSelectGridDay").disabled = true;
        document.getElementById("floatingSelectGridDay").innerHTML = "";
        document.getElementById("floatingSelectGridYear").disabled = true;
        document.getElementById("floatingSelectGridYear").innerHTML = "";
    }
}

// format year camp
function selectYear() {
    document.getElementById("floatingSelectGridDay").onchange = function() {
        if (document.getElementById("floatingSelectGridDay").value == "") {
            document.getElementById("floatingSelectGridYear").disabled = true;
        }
        else {
            document.getElementById("floatingSelectGridYear").innerHTML = "";
            document.getElementById("floatingSelectGridYear").disabled = false;
            let option = document.createElement("option");
            option.value = "";
            option.text = "";
            document.getElementById("floatingSelectGridYear").options.add(option);
            let year = new Date().getFullYear();

            if ( !((document.getElementById("floatingSelectGridMonth").value == "Feb") && (document.getElementById("floatingSelectGridDay").value == "29")) ) {
                for (let i = year; i >= year - 102; i--) {
                    let option = document.createElement("option");
                    option.value = i;
                    option.text = i;
                    document.getElementById("floatingSelectGridYear").options.add(option);
                }
            }
            else {
                alert("sim");
                for (let i = year; i >= year - 102; i--) {
                    if ( (i % 4 == 0) && (i % 100 != 0 || i % 400 == 0) ) {
                        let option = document.createElement("option");
                        option.value = i;
                        option.text = i;
                        document.getElementById("floatingSelectGridYear").options.add(option);
                    }
                }
            }
        }
    }

}

// login 
if (document.getElementById("login_button")) {
    document.getElementById("login_button").onclick = function() {validate_login()}
}

// create account
if (document.getElementById("createAccount_button")) {
    document.getElementById("createAccount_button").onclick = function() {validate_createAccount()}
}

document.getElementById("view-password").onclick = function() {
    let button = document.getElementById("img-password");
    if (button.classList.contains("bi-eye-fill")) {
        document.getElementById("floatingPasswordCreate").type = "text";
        document.getElementById("floatingPasswordCreateConfirme").type = "text";
        button.classList.remove("bi-eye-fill");
        button.classList.add("bi-eye-slash-fill");
    }
    else {
        document.getElementById("floatingPasswordCreate").type = "password";
        document.getElementById("floatingPasswordCreateConfirme").type = "password";
        button.classList.add("bi-eye-fill");
        button.classList.remove("bi-eye-slash-fill");
    }
}

function validate_email(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email.value);
}

function equal_password(tag) {
    var teste = tag;
    console.log("teste1");
    console.log(tag.value.length);
    if (tag.value.length >= 6 && document.getElementById("floatingPasswordCreate").value.length >= 6) {
        console.log("teste2");
        console.log(document.getElementById("floatingPasswordCreate").value);
        if ( !(tag.value == document.getElementById("floatingPasswordCreate").value)) {
            console.log("teste3");

            document.getElementById("alertPassword2").innerHTML = "senhas diferentes. Digite a mesma senha em ambos os campos de senha.";
            console.log("teste3");
            return false;
        }
        else {
            document.getElementById("alertPassword2").innerHTML = "A senha é obrigatório e deve ter pelo menos 6 caracteres.";
            return true;
        }
    }
    return false;
}

function verifyRadioButton(checkbox) {
    return checkbox.checked; 
}

function verify(id, condition, alert, auxFunction) {
    let verification = document.getElementById(id);
    let parameter;
    
    // verify if auxFunction is a funcion
    if ( typeof(auxFunction) == 'function') {
        parameter = auxFunction(verification);
    }
    else {
        parameter = true;
    }
    
    if (verification.value.length <= condition || !parameter) {
        verification.classList.remove("is-valid");
        verification.classList.add("is-invalid");
        document.getElementById(alert).classList.remove("d-none");
    }
    else {
        verification.classList.remove("is-invalid");
        verification.classList.add("is-valid");
        document.getElementById(alert).classList.add("d-none");
    }
}

function validate_login() {
    verify("floatingInput", 0, "alertUser", validate_email);
    verify("floatingPassword", 0, "alertPassword")
}

function validate_createAccount() {
    verify("floatingInputName", 0, "alertUser");
    verify("floatingInputEmail", 0, "alertEmail", validate_email);
    verify("floatingPasswordCreate", 6, "alertPassword1");
    verify("floatingPasswordCreateConfirme", 6, "alertPassword2", equal_password);
    verify("floatingSelectGridMonth", 0, "alertMonth");
    verify("floatingSelectGridDay", 0, "alertDay");
    verify("floatingSelectGridYear", 0, "alertYear");
    verify("termValidate", 0, "alertTerm", verifyRadioButton);
}
