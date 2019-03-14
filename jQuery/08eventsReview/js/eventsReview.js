$(function () {

    //grobal variables
    var ids = '';
    var listItems = $('li');


    listItems.on('mouseover click', function () {

    //local variables
    //var demo = "test";

        ids = this.id;
        // ids = listItems.id;


        listItems.children('span').remove();
        $(this).append('<span class="priority">' + ids + '</span>');

    });
    // }, false);
    // falseはjQueryのsyntaxに含まれない。falseと書くと動かない

    listItems.on('mouseout', function () {
        $(this).children('span').remove();
    });

});