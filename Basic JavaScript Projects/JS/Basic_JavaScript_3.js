function add() {
    var addition = 24 + 24;
    document.getElementById("Math") .innerHTML = "24 + 24 = " + addition;
}

function subtract() {
    var subtraction = 86 - 54;
    document.getElementById("Math").innerHTML = "86 - 54 = " + subtraction;
}

function multiply() {
    var multiplication = 5 * 8;
    document.getElementById("Math").innerHTML = "5 * 8 = " + multiplication;
}

function divide() {
    var division = 84 / 12;
    document.getElementById("Math").innerHTML = "84 / 12 = " + division;
}

function multi_Math() {
    var multimath = 6 + 8 * 7 / 2 + 9;
    document.getElementById("Math").innerHTML = "6 + 8 * 7 / 2 + 9 = " + multimath;
}

function remainder() {
    var modulus = 45 % 4;
    document.getElementById("Math").innerHTML = "45 / 4 gives a remainder of " + modulus;
}

function negation() {
    var x = 30;
    document.getElementById("Math").innerHTML = -x;
}

function increment() {
    var x = 10;
    x++;
    document.getElementById("Math").innerHTML = x;
}

function decrement() {
    var x = 10;
    x--;
    document.getElementById("Math").innerHTML = x;
}

function random() {
    window.alert(Math.random()  *  200);
}

function roundUp() {
    window.alert(Math.ceil(6.4));
}