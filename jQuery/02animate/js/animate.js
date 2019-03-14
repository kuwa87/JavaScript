$(function () {

    $("#btnMove").click(function () {
        // $("li.hot").animate({
        // tag名にクラス名を続けて書くこともできる
        $("div").animate({
            left: '250px'

        });
    });

    //animate at the same time
    $("#btnGrow").click(function () {
        $("div").animate({
            left: '250px',
            width: '300px',
            height: '300px',
            borderRadius: "50%"

            //最後のやつだけカンマを外す

            // background: '#green'
            //colorはanimation に適応できない。適応させたい場合は別のプラグインを入れる必要がある
        });
    });

    //step by step before exceuting everything  queuing
    $("#btnQueue").click(function () {
        var elDiv = $("div");

        elDiv.animate({ left: "700px" }, 5000);
        elDiv.animate({ width: "300px" }, "slow");
        elDiv.animate({ top: "500px" }, "slow");
        elDiv.animate({ height: "300px" }, "slow");
        elDiv.animate({ borderRadius: "50%" }, "slow");

    });

    $("#btnWalk").click(function () {
        $("div").animate({
            left: "+=100px"
        });

    });

    //今やっているアニメーションをstopさせる
    $("#btnStop").click(function () {
        $("div").stop();
    });

    //全てのやっているアニメーションを最後まで完了させる
    $("#btnFinish").click(function () {
        $("div").finish();
    });



});