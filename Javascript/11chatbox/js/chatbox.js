// for modern browsers toggle class
//classを付与してcssで管理するパターン
function toggleClass() {

    var cbBtn = document.getElementById("chat-container");
    cbBtn.classList.toggle("chat-display");

}

function toggleName() {
    if (cbBtn.innerHTML === "chat") {
        cbBtn.innerHTML = "close";

    } else {
        cbBtn.innerHTML = "chat";

    }


}

var cbBtn = document.getElementById("cb-btn");
cbBtn.addEventListener("click", toggleClass, false);


cbBtn.addEventListener("click", toggleName, false);






//another solution
// 開くボタンと閉じるボタンを別々に用意。
//jsでスタイルを決定する。
// function openForm() {
//     document.getElementById("myForm").style.display = "block";
// }
// function closeForm() {
//     document.getElementById("myForm").style.display = "none";
// }

// var elForm = document.display.getElementById('myForm');

// var elOpenBtn = document.getElementById("openBtn");
// elOpenBtn.addEventListener('click', openForm, false);

// var elCloseBtn = document.getElementById("closeBtn");
// elCloseBtn.addEventListener('click', closeForm, false);
