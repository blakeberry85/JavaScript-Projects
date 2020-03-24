function formValidation() {
    var x = document.forms["contact"]["first_name"].value;
    if (x == "") {
        alert("Please enter your first name.");
        return false;
    }
    var y = document.forms["contact"]["last_name"].value;
    if (y == "") {
        alert("Please enter your last name.");
        return false;
    }
    var z = document.forms["contact"]["email"].value;
    if (z == "") {
        alert("Please enter your email address.");
        return false;
    }
    var a = document.forms["contact"]["phone_number"].value;
    if (a == "") {
        alert("Please enter your phone number.");
        return false;
    }
}

function openForm() {
    document.getElementById("btn-open").style.display = "none";
    document.getElementById("contact").style.display = "block";
}