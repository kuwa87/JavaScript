var today = new Date(); //take the current date
var hourNow = today.getHours(); //get hours only from var today/Date()
//Date.getHours()
//getHoursはもともと入っているmethod


// option01   

var greeting; //declare greeting as a variable

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';

}

document.write('<h3>' + greeting + '</h3>');
document.write('<h3>' + today + '</h3>');
document.write('<h3>' + hourNow + '</h3>');

// option02   
// if (hourNow > 18) {
//     document.write('<h3>Good evening!</h3>');
// } else if (hourNow > 12) {
//     document.write('<h3>Good afternoon!</h3>');
// } else if (hourNow > 0) {
//     document.write('<h3>Good morning!</h3>');
// } else {
//     document.write('<h3>Welcome!</h3>');

// }