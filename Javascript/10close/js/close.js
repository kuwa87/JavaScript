// get all elements with class="close"
var closebtns = document.getElementsByClassName('close');
var i;

// loop through the elements, and hide the parent, whem clicked on
for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
        this.parentElement.style.display = "none";
    });

}


