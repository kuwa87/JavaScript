
//自分でやってみたコード　not working
// $(function () {

//     $('#img01').click(function () {

//         $(".container").css({
//             display: 'block',

//         });

//親のdivを作る
//         $(".test").html('<img src="images/img01.jpg" id="expanding" style="width: 100%">');

//     });

// });

//正しいコード　get attribute(src)
$(function () {

    $('#img01').on('click', function () {


        var $imgSrc = $('#img01').attr('src');

        //images/cooking.jpg
        $(".container").css('display', 'block');
        $('#expanding').attr('src', $imgSrc);


    });

    $('#img02').on('click', function () {


        var $imgSrc = $('#img02').attr('src');

        //images/cooking.jpg
        $(".container").css('display', 'block');
        $('#expanding').attr('src', $imgSrc);


    });

    $('#img03').on('click', function () {


        var $imgSrc = $('#img03').attr('src');

        //images/cooking.jpg
        $(".container").css('display', 'block');
        $('#expanding').attr('src', $imgSrc);


    });

    $('#img04').on('click', function () {


        var $imgSrc = $('#img04').attr('src');

        //images/cooking.jpg
        $(".container").css('display', 'block');
        $('#expanding').attr('src', $imgSrc);


    });


    $('.closebtn').on('click', function () {
        $(".container").css('display', 'none');

    });


});
