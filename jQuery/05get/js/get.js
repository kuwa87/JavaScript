
$(function () {

    // User needs to click the #btn before the function works
    $("#btn").click(function () {

        //we need to get and store the value of the input
        var uName = $("#name").val();

        //using the value 
        $("h2").html("Welcome, " + uName);
        // $('#greetings').text("Welcome, " + name);
    });

});


