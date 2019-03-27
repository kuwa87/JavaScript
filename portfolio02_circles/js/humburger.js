$(function () {

    $('#nav-icon').on('click', function () {
        $(this).toggleClass('open');
        $('#nav-menu').toggleClass('open');
        $('#navbar').toggleClass('open');
        // $('#nav-menu').toggle(2000);

    });

    // $('#nav-icon').click(function () {

    //     $(this).toggleClass('open');
    //     $('#nav-menu').toggleClass('open');
    // });

});