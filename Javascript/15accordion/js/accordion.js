var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // toggle between adding and removing the active class,
        // to heighlight the button that controls the pannel
        this.classList.toggle("active");

        // toggle between hiding and showing the active panel
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";

        } else {
            panel.style.display = "block";
        }


    }, false);

}