// Add a  checked symbol when clicking on a list item
var list = document.querySelector('ul');

/////1
list.addEventListener('click', function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked');

    }
}, false);
////1


////2
// function checkItem(ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');

//     }
// }
// list.addEventListener('click', checkItem, false)
////2


// create a new list item when clicking on the Add btn

function newElement() {
    // 1 create < li >
    var elLi = document.createElement('li');

    // 2 getting
    var inputValue = document.getElementById('myInput').value;


    // 3
    var text = document.createTextNode(inputValue);


    // 4
    elLi.appendChild(text)

    if (inputValue == '') {
        alert("You must write soomething");

    } else {
        // 5
        document.getElementById("myUl").appendChild(elLi);
    }

    //6
    document.getElementById("myInput").value = "";

    //7 close button
    var span = document.createElement("span");
    var close = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(close);

    elLi.appendChild(span);

    // get all elements with class="close"
    var closebtns = document.getElementsByClassName('close');
    var i;

    // loop through the elements, and hide the parent, whem clicked on
    for (i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function () {
            this.parentElement.style.display = "none";
        });

    }


}

var addBtn = document.getElementById('add');
addBtn.addEventListener('click', newElement, false);


// 1.
// create < li >

//     まずはliを、ulの中に設置する
/* create the <li> element 名前をつけている*/
    //タグネームが大文字になるのはタグネームを探すときだけ この場合は小文字


// 2.
// inputValue = "mikka"
    //getting mikkaを取得している


// 3.
// textNode = inputValue
/*assining text as input value*/
    //declearing input value as text 割り当てている


// 4.
//     < li ></li >
    //combining 合わせている
/* <li>textNode</li>*/
    //apend -add after text
    //ul の中のli の中で、一番下にliをたす
    //appendix
    //opposit は prepend

    // 5
    // liをulの中に設置する

    //6
    // リセットする
