window.onload = function () {

    // Get the cart from local storage    

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Loop through the items and display them in the cart    

    const cartItems = document.getElementById('cart-items');
    console.log(document.getElementById('cart-items'));
    if (cartItems) {
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td class="cart-image"><img src="${item.picture}" alt="${item.name}" /></td>
                `;
            cartItems.appendChild(row);
        });
    } else {
        console.log("cart-items not found");
    }

}

function clearCart() {
    cart = []
    localStorage.clear()
    console.log("itemscleared")
    const cartItems = document.getElementById('cart-items');
    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }
}

function kop() {
    alert('TACK FÖR DITT KÖP')
    clearCart()
}