function inventory() {
    var product = {
        Name:"Carrots",
        Pounds:16,
        Price:.50,
    };
        delete product.Name;
        document.getElementById("Dictionary").innerHTML = product.Name;
}
