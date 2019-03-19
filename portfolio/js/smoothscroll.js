// #にダブルクォーテーションが必要
$(function () {
    var headerHight = 69;

    $('a[href^="#"]').click(function () {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });

});

// Reference
// https://qiita.com/Takuya_Kouyama/items/b815eb5e1f85d819b4d8
// http://idd.tokyo/blog/?p=503

