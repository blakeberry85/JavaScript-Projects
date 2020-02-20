X = 24;
function add() {
    Y = 25;
    document.write(X + Y + "<br>");
    console.log(X + Y);
}

function multiply() {
    document.write(X * Y);
    console.log(X * Y);
}

add();
multiply();

function greeting() {
    if (new Date().getHours() < 12) {
        document.getElementById("date").innerHTML = "Good morning!";
    }
}

function quiz() {
    color = document.getElementById("question").value;
    if (color == "Blue") {
        document.getElementById("result").innerHTML = "Correct";
    }
}

function quiz_Alphabet() {
    answer = document.getElementById("alphabet").value;
    if (answer == 26) {
        document.getElementById("response").innerHTML = "That's right!";
    }
    else {
        document.getElementById("response").innerHTML = "Nope, sorry!";
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}