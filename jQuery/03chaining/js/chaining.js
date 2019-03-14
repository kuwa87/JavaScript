//symple
// $(function () {
//     $('li[id = "list1"]').hide();
// });

//chain
$(function () {
    $('li[id = "list1"]')
        .hide()
        .delay(500)
        .fadeIn(400);

    $('li#list2')
        .hide()
        .delay(800)
        .fadeIn(400);

    $('li#list3')
        .hide()
        .delay(1000)
        .fadeIn(400);
});

//chain "not"
// $(function () {
//     $('li:not(#list1)')
//         .hide()
//         .delay(500)
//         .fadeIn(400);
// });

/* li[class= "hot"]{
background-color: pink;
} */

$(function () {

    // $("li").html("Hello <b>World</b>!");
    $("#demo1").html("Hello <b>World</b>!");
    $("#demo2").text("Hello <b>World</b>!"); /*テキストがそのまま吐き出される*/
    $("#demo3").replaceWith("Hello <b>World</b>!"); /*demo1の別の書き方*/

    $("#btn").click(function () {

        $("#demo4").remove(); /*除去*/
        $("#demo5").empty(); /*空*/
    });


});