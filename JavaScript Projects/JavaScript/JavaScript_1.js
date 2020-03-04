function seasonFunction() {
    var Season_Result;
    var Seasons = document.getElementById("season_choice").value;
    switch(Seasons) {
        case "Spring":
            Season_Result = "Spring is rainy!";
        break;
        case "Summer":
            Season_Result = "Summer is sunny!";
        break;
        case "Autumn":
            Season_Result = "Autumn is spooky!";
        break;
        case "Winter":
            Season_Result = "Winter is chilly!";
        break;
        default:
            Season_Result = "I don't know that one!";
    }
    document.getElementById("result").innerHTML = Season_Result;
}

function textchangeFunction() {
    var X = document.getElementsByClassName("text_change");
    X[1].innerHTML = "This is right";
}

var Y = document.getElementById("canvas");
var Z = Y.getContext("2d");

var gradient = Z.createLinearGradient(0, 0, 500, 0);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "blue");
Z.fillStyle = gradient;
Z.fillRect(0, 0, 500, 500);

Z.beginPath();
Z.arc(250, 125, 100, 0, 2 * Math.PI);
Z.stroke();