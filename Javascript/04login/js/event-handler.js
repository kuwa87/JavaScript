//HTML event handler
// -wicth is not good practice

function checkUsername() {
    var elUsername = document.getElementById('username').value;

    var elMsg = document.getElementById('feedback');

    if (elUsername.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';

    } else {
        elMsg.textContent = "";
    }

}

// function checkUsername() {
//     var elMsg = document.getElementById('feedback');

//     if (this.value.length < 5) {
//         elMsg.textContent = 'Username must be 5 characters or more';

//     } else {
//         elMsg.textContent = "";
//     }
// }

// var elUsername = document.getElementById('username');
// elUsername.onblur = checkUsername; //call function check uesrname()
