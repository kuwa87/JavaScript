var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;

        // if (panel.style.maxHeight) {
        // != a
        //     panel.style.maxHeight = null;

        // } else {
        // a == 0
        //     panel.style.maxHeight = panel.scrollHeight + "px";
        // }

        //同じ意味　逆の条件に変更
        if (panel.style.maxHeight == 0) {
            panel.style.maxHeight = panel.scrollHeight + "px";

        } else {
            panel.style.maxHeight = null;

        }

    }, false);

}