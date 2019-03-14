//同じ意味01　古いバージョン
// $(document).ready(function () {

// });


//02同じ意味　新しいバージョン
// $(function () {

// });


//同じ意味01
// $(function () {
//     $("p").hide();
// });

//同じ意味02
// $(function () {
//     document.getElementsByTagName("p")[0].style.display = none;
//     $(".test").hide();
// });


//サンプル
$(function () {
    // $("p").hide();
    // $(".test").hide();
    // $("#test").hide();
    // $(this).hide();


    //クリックイベント
    $("button").click(function () {
        $("p").hide();

    });
});



//jQueryファイルから調べるとき
