function  blueText() {
    var str = "Now this text is blue!";
    str += " Look at that!";
    var result = str.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = result;
}