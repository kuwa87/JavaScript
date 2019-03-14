//you dont have class active in HTML
// Get the container element
var btnContainer = document.getElementById('myDiv');



// Get all buttons with class = "btn" inside the container
var btns = btnContainer.getElementsByClassName('btn');



//Loop through the buttons and add the active class to the current/clicked button
for (var i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName("active");

        //下記の二つを消す
        // current[0].className = current[0].className.replace(" active", "");
        // this.className += " active";

        //下記の二つを足す
        //If there is no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        //add the active class to the current/clicked button
        this.className += " active";
    });

}