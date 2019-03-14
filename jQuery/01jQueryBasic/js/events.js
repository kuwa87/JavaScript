$(function () {

    //hide
    $("#p1").click(function () {
        $(this).hide();
    });

    //double click
    $("#p2").dblclick(function () {
        $(this).hide();
    });

    //mouse enter
    $("#p3").mouseenter(function () {
        alert("You entered p3");
    });

    //mouse leave
    $("#p3").mouseleave(function () {
        alert("You left p3");
    });

    //hover
    $("#p4").hover(function () {
        //mouse enter
        alert("You entered p4");
    },
        function () {
            //mouse leave
            alert("You left p4");
        }
    );

    //focus 同じことはcssでもできるが、使い方の説明として
    $("#input1").focus(function () {
        $(this).css("background-color", "lightgray");

    });

    //blur　同じことはcssでもできるが、使い方の説明として
    $("#input1").blur(function () {
        $(this).css("background-color", "white");

    });

    //eventListener と同じ使い方
    $("#p5").on({
        mouseenter: function () {
            $(this).css("background-color", "lightyellow");
        },

        mouseleave: function () {
            $(this).css("background-color", "lightpink");
        },

        click: function () {
            $(this).css("border", "2px solid");
        }

    });


});
