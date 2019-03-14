$(function () {
    $('#add').click(function () {

        $('h1, h2, p').addClass('blue');
        $('div').addClass('important');

    });

    $('#remove').click(function () {

        $('h1, h2, p').removeClass('blue');

    });

    $('#toggle').click(function () {

        $('h1, h2, p').toggleClass('blue');

    });


});