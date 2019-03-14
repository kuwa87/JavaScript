//plain Javascript


var elBtn = document.getElementById("btn");
elBtn.addEventListener('click', function () {
    var uName = document.getElementById("name").value;

    var greet = document.getElementById('greetings');

    greet.innerHTML = 'Welcome' + uName;
}, false);
