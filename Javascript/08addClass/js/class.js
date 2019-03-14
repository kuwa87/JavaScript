// for modern browsers adding class
function addClass() {

    var elDiv = document.getElementById("myDiv");
    elDiv.classList.add("mystyle");
}

var elBtn = document.getElementById("btn");
elBtn.addEventListener("click", addClass, false);



// for modern browsers removing class
function removeClass() {

    var elDiv = document.getElementById("myDiv");
    elDiv.classList.remove("mystyle");
}

var elBtn2 = document.getElementById("btn2");
elBtn2.addEventListener("click", removeClass, false);

// for modern browsers toggle class
function toggleClass() {

    var elDiv = document.getElementById("myDiv");
    elDiv.classList.toggle("mystyle");
}

var elBtn3 = document.getElementById("btn3");
elBtn3.addEventListener("click", toggleClass, false);


// for cross-browser solution adding class
// function myFunction() {
//     var elDiv, name, arr;
//     elDiv = document.getElementById("myDiv");
//     name = "mystyle";
//     arr = elDiv.className.split("");

//     if (arr.indexOf(name) == -1) {
//         elDiv.className += "" + name;
//     }

// }
// var elBtn = document.getElementById("btn");
// elBtn.addEventListener("click", myFunction, false);

