function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote_Function() {
    var Age, Voting_status;
    Age = document.getElementById("age").value;
    Voting_status = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("result").innerHTML = Voting_status;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Location(City, Country, Continent) {
    this.Location_City = City;
    this.Location_Country = Country;
    this.Location_Continent = Continent;
}
var Paris = new Location("Paris", "France", "Europe");
var Tokyo = new Location("Tokyo", "Japan", "Asia");
var Los_Angeles = new Location("Los Angeles", "United States", "North America");
function cities() {
    document.getElementById("New_and_This").innerHTML = Paris.Location_City + ", " + 
    Paris.Location_Country + ", " + Paris.Location_Continent;
}

function subtractFunction() {
    document.getElementById("Nested_Function").innerHTML = Subtract();
    function Subtract() {
        var Start = 50;
        function Minus_one() {
            Start -= 1;
        }
        Minus_one();
        return Start;
    }
}