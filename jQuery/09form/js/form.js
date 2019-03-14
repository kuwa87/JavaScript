$(function () {

    //statement は command
    //全てのものは statement

    //statement
    $("form").hide();

    //statement
    $("#newItemButton").show();

    // expression -combination of 1 varible and (operators or functions )
    $("#newItemButton").click(function () {

        $(this).hide();
        $("form").fadeIn();

    });

    // function


    // $("#addButton").click(function () {

    //     var itemDescription = 'test';
    //     // $('ul').append('<li>' + itemDescription + '</li>');
    //     $('li:last').after('<li>' + 'test' + '</li>');

    // });

    // another way
    $('#newItemForm').on('submit', function (e) {
        e.preventDefault();
        var itemDescription = $('#itemDescription').val();
        $('li:last').after('<li>' + itemDescription + '</li>');
        $("form").hide();
        $("#newItemButton").show();


        $('#itemDescription').val('');



    });

    //on の良いところ
    // $('#newItemForm').on('submit mouseover mouseout', function (e) {
    // });
    //複数のトリガーを登録できる





    //on method
    //form を無効にする
    // $('#newItemForm').on('submit', function (e) {
    //     e.preventDefault();
    //     //for not submiting form

    // });

    //Eventlistener
    // newItemForm.addEventListener('submit', function (e) {
    //     e.preventDefault();
    // }, false);



});



