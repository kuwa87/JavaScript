
//HTML
// function mOver(obj) {
//     obj.innerHTML = "Thank you!";
// }
// function mOut(obj) {
//     obj.innerHTML = "Mouse Over Me";
// }


//addEventListner
// function mOver() {
//     elBtn.innerHTML = "Thank you!";
// }

// function mOut() {
//     elBtn.innerHTML = "Mouse Over Me";
// }


// var elBtn = document.getElementById('btn');
// elBtn.addEventListener("mouseover", mOver, false);
// elBtn.addEventListener("mouseout", mOut, false);

//addEventListner this
// function mOver() {
//     this.innerHTML = "Thank you!";
// }

// function mOut() {
//     this.innerHTML = "Mouse Over Me";
// }


// var elBtn = document.getElementById('btn');
// elBtn.addEventListener("mouseover", mOver, false);
// elBtn.addEventListener("mouseout", mOut, false);


//addEventListner textContent
function mOver() {
    this.textContent = "Thank you!";
}

function mOut() {
    this.textContent = "Mouse Over Me";
}


var elBtn = document.getElementById('btn');
elBtn.addEventListener("mouseover", mOver, false);
elBtn.addEventListener("mouseout", mOut, false);

//mDown
function mDown() {
    this.style.backgroundColor = "yellow";
}

elBtn.addEventListener("mousedown", mDown, false);

//mUp
function mUp() {
    this.style.backgroundColor = "pink";
}

elBtn.addEventListener("mouseup", mUp, false);

