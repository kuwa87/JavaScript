$(function () {
    $('#openClose').click(function () {


        if (x.matches) { // If media query matches
            $(".news-content").css({
                display: 'block'
            });
        } else {
            $(".news-content").css({
                display: 'flex'
            });
        }


    });

    var x = window.matchMedia("(max-width: 767px)")
});
