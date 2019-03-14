// DOM event handlers
// -good practice

function checkUsername() {
    var elMsg = document.getElementById('feedback');

    if (elUsername.value.length < 1) {
        elMsg.textContent = 'Username must be 5 characters or more';

    } else {
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById('username');
//to declear
//how long is the text

var submit = document.getElementById('submit'); //variable declearation
//to triger
//I need to click 

//this　を使うとき
//this = same as where?
//this = same as what trigger?
//this = owner of the method
// who owns it?


submit.onclick = checkUsername; //call function check uesrname() 
//event handler

