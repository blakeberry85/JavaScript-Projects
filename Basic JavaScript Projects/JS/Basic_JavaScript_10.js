function Call_Loop() {
    var Num = "";
    var X = 20
    while (X > 0) {
        Num += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Num;
}

function stringLength() {
    var string = document.getElementById("string_length").innerHTML;
    var strlength = string.length;
    document.getElementById("stringlength_result").innerHTML = strlength;
}

function for_Loop() {
    var Plants = ["Grass", "Trees", "Bushes", "Flowers", "Weeds"];
    var List = "";
    var Y;
    for (Y = 0; Y < Plants.length; Y++) {
        List += Plants[Y] + "<br>";
    }
    document.getElementById("List_of_Plants").innerHTML = List;
}

function array_Function() {
    var color = [];
    color[0] = "Red";
    color[1] = "Blue";
    color[2] = "Green";
    color[3] = "Yellow";
    document.getElementById("Array").innerHTML = "The colors are " +
        color[0] + ", " + color[1] + ", " + color[2] + ", and " + color [3] + ".";
}

function constant_function() {
    const House = {floor:2, paint:"white", bedrooms:3}
    House.paint = "brown";
    House.price = "$300,000";
    document.getElementById("Constant").innerHTML = "A " + House.floor
        + " story, " + House.paint + " house, that costs " + House.price + ".";
}

function letFunction() {
    var Z = 140;
    document.write(Z);
    {
        let Z = 280;
        document.write("<br>" + Z);
    }
    document.write("<br>" + Z);
}

function myFunction() {
    return 800;
}
document.getElementById("return").innerHTML = myFunction();

let city = {
    name: "Denver",
    state: "Colorado",
    country: "United States",
    location: function() {
        return this.name + ", " + this.state + ", is located in the " + this.country + ".";
    }
};
document.getElementById("location").innerHTML = city.location();

function breakFunction() {
    for (i = 10; i > 0; i--) {
        document.write(i + "<br>")
        if (i == 5) { break; }
    }
    document.write("The number 5 breaks out of the loop!")
}

function continueFunction() {
    for (g = 0; g < 16; g++) {
        if (g == 10) { continue; }
        document.write(g + "<br>")
    }
}