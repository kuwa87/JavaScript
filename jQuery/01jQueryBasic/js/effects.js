//syntax

// $(selector).event(function () {
//     $(selector).effects(speed);
// });


$(function () {
    // 1.hide and show
    $("#btn1").click(function () {
        $("#demo1").hide("slow");
        // $("#demo1").hide(3000); 3second = 3000mili second
    });
    $("#btn2").click(function () {
        $("#demo1").show("slow");
    });


    // 2.toggle
    $("#btn3").click(function () {
        // $("#demo2").toggle("fast");
        $("#demo2").toggle(2000);
    });

    // 3.fade in fade out
    $("#btn4").click(function () {
        $("#demo3").fadeIn("slow");
    });

    $("#btn5").click(function () {
        $("#demo3").fadeOut("slow");
    });

    // 3.fade in fade out toggle
    $("#btn6").click(function () {
        $("#demo4").fadeToggle("slow");
    });


    // 4.fade to
    $("#btn7").click(function () {
        $("#demo5").fadeTo("slow", .5);
    });

    // 5.Slide Down
    $("#btn8").click(function () {
        $("#demo6").slideDown("slow");
    });

    // 6.Slide Up
    $("#btn9").click(function () {
        $("#demo6").slideUp("slow");
    });

    // 6.Slide Up
    $("#btn10").click(function () {
        $("#demo6").slideToggle("slow");
    });





});