// #にダブルクォーテーションが必要
//メニュー用
$(function () {
    var headerHight = 0;

    $('a[href^="#"].menu-link').click(function () {
        $("#nav-icon").toggleClass('open');
        $("#nav-menu").toggleClass("open");
        $("#navbar").toggleClass("open");

        var speed = 2000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');

        return false;

    });

});

// #dive into the sea
$(function () {
    var headerHight = 0;

    $('a[href^="#"].scroll').click(function () {

        var speed = 2000;
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

