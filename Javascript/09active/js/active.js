//you have class active in HTML

// Get the container element
var btnContainer = document.getElementById('myDiv');



// Get all buttons with class = "btn" inside the container
var btns = btnContainer.getElementsByClassName('btn');



//Loop through the buttons and add the active class to the current/clicked button
for (var i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });

}