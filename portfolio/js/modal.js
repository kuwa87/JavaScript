// 1
// get the modal
var modal = document.getElementById('myModal01');

// get the button that opens the modal

var btn = document.getElementById('myBtn01');


//get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//when the user clicks the button, open the modal
btn.addEventListener('click', function () {
    modal.style.display = "block"
}, false);

// when the user clicks on<span>(x), close the modal
span.addEventListener('click', function () {
    modal.style.display = "none";
}, false);

//when the user clicks anywhere outside of the modal, close it 
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// 2
// get the modal
var modal02 = document.getElementById('myModal02');

// get the button that opens the modal

var btn02 = document.getElementById('myBtn02');


//get the <span> element that closes the modal
var span02 = document.getElementsByClassName("close02")[0];

//when the user clicks the button, open the modal
btn02.addEventListener('click', function () {
    modal02.style.display = "block"
}, false);

// when the user clicks on<span>(x), close the modal
span02.addEventListener('click', function () {
    modal02.style.display = "none";
}, false);

//when the user clicks anywhere outside of the modal, close it 
window.onclick = function (event) {
    if (event.target == modal02) {
        modal02.style.display = "none";
    }
}

// 3
// get the modal
var modal03 = document.getElementById('myModal03');

// get the button that opens the modal

var btn03 = document.getElementById('myBtn03');


//get the <span> element that closes the modal
var span03 = document.getElementsByClassName("close03")[0];

//when the user clicks the button, open the modal
btn03.addEventListener('click', function () {
    modal03.style.display = "block"
}, false);

// when the user clicks on<span>(x), close the modal
span03.addEventListener('click', function () {
    modal03.style.display = "none";
}, false);

//when the user clicks anywhere outside of the modal, close it 
window.onclick = function (event) {
    if (event.target == modal03) {
        modal03.style.display = "none";
    }
}
