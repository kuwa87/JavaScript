function myFunction() {


    var x, y, z; /*declaration statement var means variable*/
    x = 5; // assinment statement
    y = 6; // assinment statement

    z = x + y;

    // JS has two type of value

    // 1.Fixed values
    // number 10.3 100
    // string "10.5" 'mikka'

    // 2.Variable values

    //The JS syntax difines two types od values: Fixed values and variable values.
    //Fixed values are called literals. Variable values are called variables.

    // = X = Y
    // += x += Y x = x + Y





    document.getElementById('demo').innerHTML = "The value of z is " + z;

}
/*
coment for JS

    2種類ある

*/

function newFunction() {

    var x = 10;
    x += 5;

    document.getElementById('demo').innerHTML = x;
}

function dataTypes() {

    //Data types
    var length = 16; //number
    var lastName = "Daz"; //string
    //array
    var x = {
        firstName: "Mikka", lastName: "Diaz"
    };

    var a; //undefined
    a = 5; //number
    a = "John"; //string

}

function arrayExample() {
    var colors = ["pink", "red", "green"];
    document.getElementById('demo').innerHTML = "My Favorite color is " + colors[0] + ".";
}

function objectExample() {
    var colors = ["pink", "red", "green"];
    // document.getElementById('demo').innerHTML = "My Favorite color is " + colors[0] + ".";

    var x; //undifined
    // number
    // boolian
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };

    document.getElementById('demo').innerHTML = person.firstName + " is " + person.age + " years old.";

    // document.getElementById('demo2').innerHTML = typeof (person); object
    // document.getElementById('demo2').innerHTML = typeof (person.age); nubmer
    // document.getElementById('demo2').innerHTML = typeof (x); undifined
    document.getElementById('demo2').innerHTML = typeof (colors); //object
}