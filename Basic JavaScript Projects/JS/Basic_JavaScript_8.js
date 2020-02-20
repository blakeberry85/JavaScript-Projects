function connectedSentence() {
    var string_1 = "This sentence ";
    var string_2 = "was pieced ";
    var string_3 = "together using ";
    var string_4 = "JavaScript.";
    var string_complete = string_1.concat(string_2, string_3, string_4);
    document.getElementById("connected_sentence").innerHTML = string_complete;
}

function stringSlice() {
    var Sentence = "Sliced out of a sentence."
    var Part = Sentence.slice(16,24);
    document.getElementById("string_section").innerHTML = Part;
}

function uppercaseFunction() {
    NormalString = document.getElementById("uppercase").innerHTML;
    var UppercaseString = NormalString.toUpperCase();
    document.getElementById("uppercase").innerHTML = UppercaseString;
}

function stringSearch() {
    SearchedString = document.getElementById("searched_string").innerHTML;
    var Position = SearchedString.search("table");
    document.getElementById("position").innerHTML = Position;
}

function numberString() {
    var number = 200;
    document.getElementById("number_string").innerHTML = number.toString();
}

function numberPrecision() {
    var ImpreciseNumber = 21.545646;
    document.getElementById("number_precision").innerHTML = ImpreciseNumber.toPrecision(5);
}

function fixedNumber() {
    var NumberFixed = 56.563;
    document.getElementById("fixed_number").innerHTML = NumberFixed.toFixed(0);
}

function valueofFunction() {
    var ValOf = (42 + 65).valueOf();
    document.getElementById("value_of").innerHTML = ValOf 
}