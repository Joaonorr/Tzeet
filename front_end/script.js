function validate_email(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email.value);
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


