function showMessage() {
    alert('This is the message');
}

function checkUsername(minLength) {
    var elMsg = document.getElementById('feedback');

    if (this.value.length < minLength) {
        elMsg.textContent = 'Username must be ' + minLength + ' characters or more';

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
elUsername.addEventLestener('blur', function () {
    checkUsername(5);
}, false);
