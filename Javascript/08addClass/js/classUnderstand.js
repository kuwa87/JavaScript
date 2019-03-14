
// for modern browsers toggle class
function toggleClass() {

    var elDiv = document.getElementById("btn3");
    elDiv.classList.toggle("mystyle");
    elIcon.classList.toggle("fas");
    elIcon.classList.toggle("fa-check-circle");
}

var elBtn3 = document.getElementById("btn3");
elBtn3.addEventListener("click", toggleClass, false);

var elIcon = document.getElementById("icon");

