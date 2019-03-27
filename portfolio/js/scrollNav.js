window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.top = "0";
    }
    else {
        document.getElementById("navbar").style.background = "#fff";

    }
}



// when the user scrolls down 20px from the top of the document, slide down the navbar

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {

//     if (x.matches && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
//         document.getElementById("navbar").style.position = "fixed";
//         document.getElementById("navbar").style.top = "0";
//     }
//     else if (x.matches && (document.body.scrollTop <= 20 || document.documentElement.scrollTop <= 20)) {
//         document.getElementById("navbar").style.background = "rgba(0,0,0,1)";

//     }

//     else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         // documentElement == HTML
//         document.getElementById("navbar").style.position = "fixed";
//         document.getElementById("navbar").style.top = "0";
//         document.getElementById("navbar").style.background = "rgba(0,0,0,.7)";


//     } else {
//         document.getElementById("navbar").style.position = "";
//         // document.getElementById("navbar").style.top = "0";
//         document.getElementById("navbar").style.background = "rgba(0,0,0,.5)";

//     }
// }

// var x = window.matchMedia("(max-width: 767px)")

// 説明
// 1.SPの時はheaderは黒ベタで固定したい。
// 2.スクロール が 進み出したらfixed にしたい。
// 3.スクロール　が　進んでいる時と動いていない時で背景の透明度を変えたい
// 当初、スクロールが進んでいない時はheaderをstatic,動き出したらfixedにする予定だったが、今回、最初からfixedにすることにしたので、2は必要ではなくなった。
//一応後学のために残しておく
//ウィンドウサイズを途中で変えたときの挙動について改善の余地があるが、特に大きな影響があるわけではないのでいっいっ
