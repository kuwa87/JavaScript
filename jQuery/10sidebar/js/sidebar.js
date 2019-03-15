//my way of writing
$(function () {

    $('#menu').on('click', function () {
        $(".sidenav").css({
            width: '250px',

        });
        $("#main").css({
            marginLeft: '250px',

        });

        $("body").css({
            backgroundColor: 'rgba(0, 0, 0, .4)',

        });

    });

    $('#close').on('click', function () {
        $(".sidenav").css({
            width: '0'

        });

        $("#main").css({
            marginLeft: '0'

        });

        $("body").css({
            backgroundColor: 'none',

        });


    });

});

//another way of writing
// $(function () {

//     var $nav = $('#mySidenav');
//     var $main = $('#main');

//     $('#menu').click(function () {
//         $nav.css('width', '250px');
//         $main.css('marginLeft', '250px');

//     });

//     $('#close').click(function () {
//         $nav.css('width', '0');
//         $main.css('marginLeft', '0');


//     });

// });