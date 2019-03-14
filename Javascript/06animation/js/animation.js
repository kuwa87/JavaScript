function myMove() {
    var id = setInterval(frame, 1);
    var i = 0;


    function frame() {
        if (i == 350) {
            clearInterval(id);
        } else {
            i++;
            elSmall.style.top = i + "px";
            elSmall.style.left = i + "px";
        }
    }
}

var elSmall = document.getElementById('animate');
// elSmall.addEventListener("mouseout", myMove, false);
elSmall.addEventListener("click", myMove, false);

console.log('aaa');