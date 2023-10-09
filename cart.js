let cart_btn = document.querySelectorAll('.add_btn'),
    list_container = document.querySelector('#added_items'),
    count = 0,
    total = 0;
console.log(cart_btn)

cart_btn.forEach((btn) => {
    btn.addEventListener('click', function () {

        count += 1;
        updateCount();

        // For image
        let product = btn.closest('.pro1').querySelector('.img').getAttribute('src');
        let li = document.createElement('li');

        let img = document.createElement('img');
        img.src = product;
        li.appendChild(img);
        list_container.appendChild(li);


        // For remove button
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);


        // For price
        let price = btn.closest('.pro1').querySelector('.price');
        // console.log(price)
        let productPrice = parseFloat(price.innerText)
        // console.log(productPrice)

        total += productPrice;

        console.log(total);
        updateTotal();

    })
})

list_container.addEventListener('click', function (e) {
    // debugger;
    if (e.target.tagName == 'SPAN') {

        e.target.parentElement.remove();

        count -= 1;
        updateCount();

        let price = document.getElementsByClassName('price');
        console.log(price);

        let productPrice = parseFloat(price[0].innerText);
        console.log(productPrice);
        total -= productPrice;

        let productPrice1 = parseFloat(price[1].innerText);
        console.log(productPrice1);
        total -= productPrice1;

        let productPrice2 = parseFloat(price[2].innerText);
        console.log(productPrice2);
        total -= productPrice2;

        let productPrice3 = parseFloat(price[3].innerText);
        console.log(productPrice3);
        total -= productPrice3;



        total -= productPrice;
        console.log(total);

        // Array.from(price).forEach((p) => {
        //     let productPrice = parseFloat(p.innerText);
        //     console.log(productPrice);

        //     total -= productPrice;
        //     console.log(total);
        // })



        // for (var i = 0; i < price.length; i++) {
        //     debugger;
        //     let productPrice = parseFloat(price[i].innerText)
        //     console.log(productPrice);
        //     total -= productPrice;
        //     console.log(total);
        // }


        updateTotal();

    }
})




function updateCount() {
    let countDisplay = document.getElementById('counter');
    countDisplay.innerText = count;
}


function updateTotal() {
    let subtotal = document.querySelector('#total_price');
    subtotal.innerText = total;

    // console.log(subtotal);
    // console.log(total);
}



var removerCartItemButtons = document.getElementsByClassName('btn-danger');


for (var i = 0; i < removerCartItemButtons.length; i++) {
    var button = removerCartItemButtons[i];

    button.addEventListener('click', function (e) {
        var buttonClicked = e.target;
        buttonClicked.parentElement.parentElement.remove()
    })
}




