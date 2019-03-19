
// when the user scrolls down 20px from the top of the document, slide down the navbar

window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (x.matches && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.background = "rgba(0,0,0,1)";


    }
    else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // documentElement == HTML
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.background = "rgba(0,0,0,.7)";


    } else {
        document.getElementById("navbar").style.position = "";
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.background = "rgba(0,0,0,.5)";

    }
}

var x = window.matchMedia("(max-width: 767px)")
