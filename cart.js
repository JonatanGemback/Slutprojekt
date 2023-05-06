function addToCart(name, price, picture) {

    // Get the cart from local storage  

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the item to the cart  

    cart.push({
        name: name,
        price: price,
        picture: picture
    });

    // Save the updated cart to local storage  

    localStorage.setItem('cart', JSON.stringify(cart));
}
