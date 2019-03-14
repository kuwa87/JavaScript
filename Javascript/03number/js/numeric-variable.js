function calculate() {


    //create 3 variables to store the information needed

    var price; //how much
    var quantity; //how many
    var total; //price * nquantity

    //assign values

    price = 5;
    // quantity = 14;
    quantity = document.getElementById('qty').value;

    //calculate the total price
    total = price * quantity;

    //get the element with the ID you want to print the output
    var el = document.getElementById('cost');
    // el.textContent = '$' + total;
    el.textContent = '$' + total;
    //more secure

    //el.innerHTML = '$' + total;
    //not secure
}
