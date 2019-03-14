$(function () {

    //without callback
    // $('button').click(function () {
    //     $('p').hide(1000);
    //     alert('This paragraph is now hidden.');
    // });

    //call back
    $('button').click(function () {
        $('p').hide(1000, function () {
            alert('This paragraph is now hidden.');
        });
    });

});


//syntax
$('selector').hide(speed, callback);