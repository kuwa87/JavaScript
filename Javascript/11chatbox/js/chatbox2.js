
//another solution
// 開くボタンと閉じるボタンを別々に用意。
//jsでスタイルを決定する。
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var elForm = document.display.getElementById('myForm');

var elOpenBtn = document.getElementById("openBtn");
elOpenBtn.addEventListener('click', openForm, false);

var elCloseBtn = document.getElementById("closeBtn");
elCloseBtn.addEventListener('click', closeForm, false);
