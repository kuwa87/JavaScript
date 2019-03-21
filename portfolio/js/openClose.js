$(function () {
    $('#openClose').click(function () {

        if (($('.news-content').css('display') == 'flex') || ($('.news-content').css('display') == 'block')) {

            $(".news-content").css({
                display: 'none'
            });


        } else {

            if (x.matches) { // If media query matches
                $(".news-content").css({
                    display: 'block'
                });
            } else {
                $(".news-content").css({
                    display: 'flex'
                });
            }

        }

    });

    var x = window.matchMedia("(max-width: 767px)");
    // var y = ".news-content";
});
