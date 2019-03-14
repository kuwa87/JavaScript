// get the modal
var modal = document.getElementById('myModal');

// get the button that opens the modal

var btn = document.getElementById('myBtn');


//get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//when the user clicks the button, open the modal
btn.addEventListener('click', function () {
    modal.style.display = "block"
}, false);

//DOM event handler
// btn.onclick = function () {
//     modal.style.display = "block";
// }

/*another way of writing
function openModal() {
    modal.style.display = "block";
}
btn.addEventListener('click', openModal, false);

*/

// when the user clicks on<span>(x), close the modal
span.addEventListener('click', function () {
    modal.style.display = "none";
}, false);

//when the user clicks anywhere outside of the modal, close it 
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}