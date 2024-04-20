if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

//var num = 0;
function ready() {
    /*  var removeCartItemButton = document.getElementsByClassName(
        'removeCartItemProduct'
    );
    console.log(removeCartItems);

    for (var i = 0; i < removeCartItemButton.length; i++) {
        var button = removeCartItemButton[i];
        button.addEventListener('click', removeCartItem);
    }*/

    var addCartButton = document.getElementsByClassName('cartItemButton');
    for (var i = 0; i < addCartButton.length; i++) {
        var button = addCartButton[i];
        button.addEventListener('click', addCartClicked);
        console.log('addCartClicked')
        debugger;
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function addCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement;
    var getDressName = shopItem.getElementsByClassName('dressName')[0]
        .innerText;
    var getpriceVal = shopItem.getElementsByClassName('priceVal')[0].innerText;
    var getImgSrc = shopItem.getElementsByClassName('imgName')[0].src;
    debugger;
    addItemToCart(getDressName, getpriceVal, getImgSrc);
}

function addItemToCart(getDressName, getpriceVal, getImgSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cartSection')[0];
    var cartNames = cartItems.getElementsByClassName('cartDressName');

    //********used for latest code */
    var cartRowContents = `<div class="cartItemCenter">
                            <img class="cartImage" src="${getImgSrc}"style=width:100px; height:100px;">
                            <span class="cartDressName">${getDressName}</span>                            
                            <span class="cartPrice">${getpriceVal}</span>
                            <button class="removebutton" type="button">REMOVE</button>                                                                                                
                            </div>`;

    cartRow.innerHTML = cartRowContents;
    cartItems.prepend(cartRow);
    cartRow
        .getElementsByClassName('removebutton')[0]
        .addEventListener('click', removeCartItem);
    updateCartTotal();
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cartSection')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cartPrice')[0];
        // var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        // var quantity = quantityElement.value
        total = total + price;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('carttotalprice')[0].innerText =
        '$' + total;
}
