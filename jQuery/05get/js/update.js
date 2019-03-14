$(function () {

    $('#btn').click(function () {

        var uName = $('#name').val();

        if (uName == '') {
            alert("You must write soomething");

        } else {


            //append
            $('ul').append('<li>' + uName + '</li>');
            //prepend
            // $('ul').prepend('<p>' + "Thanks for visiting!" + '</p>');

            //入力後リセット　pure JS
            // document.getElementById("name").value = "";

            //入力後リセット　jQuery
            $("#name").val("");



        }


    });

});