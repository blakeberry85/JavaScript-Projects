document.writeln(typeof "Tree");

function divide_Zero() {
    document.getElementById("return").innerHTML = 0/0;
}

function notaNumber() {
    document.getElementById("return").innerHTML = isNaN('Tree');
}

function isaNumber() {
    document.getElementById("return").innerHTML = isNaN('85');
}

function infinity() {
    document.getElementById("return").innerHTML = 5E310;
}

function negative_Infinity() {
    document.getElementById("return").innerHTML = -4E310;
}

function booleanlogic_True() {
    document.getElementById("return").innerHTML = (20 < 50);
}

function booleanlogic_False() {
    document.getElementById("return").innerHTML = (20 > 50);
}

function type_Coercion() {
    document.getElementById("return").innerHTML = ("74" + 7);
}

function doubleequal_True() {
    document.getElementById("return").innerHTML = (60 == 60);
}

function doubleequal_False() {
    document.getElementById("return").innerHTML = (60 == 50);
}

function tripleequal_1() {
    document.getElementById("return").innerHTML = (12 === 12);
}

function tripleequal_2() {
    document.getElementById("return").innerHTML = (12 === "14");
}

function tripleequal_3() {
    document.getElementById("return").innerHTML = (12 === "12");
}

function tripleequal_4() {
    document.getElementById("return").innerHTML = (12 === 14);
}

function and_True() {
    document.getElementById("return").innerHTML = (5 < 10 && 10 < 15);
}

function and_False() {
    document.getElementById("return").innerHTML = (5 < 10 && 15 < 10);
}

function or_True() {
    document.getElementById("return").innerHTML = (12 > 10 || 40 > 50);
}

function or_False() {
    document.getElementById("return").innerHTML = (12 < 10 || 40 > 50);
}

function not_True() {
    document.getElementById("return").innerHTML = !(75 < 70);
}

function not_False() {
    document.getElementById("return").innerHTML = !(75 > 70);
}

console.log(8 + 9);

console.log(15 < 10);

