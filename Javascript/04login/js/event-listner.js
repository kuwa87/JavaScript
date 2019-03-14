function showMessage() {
    alert('This is the message');
}

function checkUsername() {
    var elMsg = document.getElementById('feedback');

    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';

    } else {
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById('username');

// DOM event handler
// elUsername.onblur = checkUsername; //call function check uesrname()

// event listners
elUsername.addEventListener('blur', checkUsername, false);
elUsername.addEventListener('blur', showMessage, false);

//event listeners with parameter
