fetch('resources/js/products.json').
then((response) => {
    console.log(response)
    return response.json();
}).then((data) => {
    localStorage.setItem('produtos', JSON.stringify(data));
    if(!localStorage.getItem('cart')) localStorage.setItem('cart',"[]");
});
const products = JSON.parse(localStorage.getItem('produtos'));
const priceSmall = products[0].price;
const priceMedium = products[1].price;
const priceBig = products[2].price;
let cart = JSON.parse(localStorage.getItem('cart'));

function addProduct(id) {
    
    const product = products.find((product) => product.id === id);
    if(cart.length === 0) {
        cart.push(product);
    } else if(cart.length !== 0) {
        /*const res = cart.find((element) => {element.id === id});*/
        for(let products of cart) {
            if(products.quantity) {
                products.quantity++;
                if(products.price === priceSmall) {
                    products.price = priceSmall * products.quantity;
                } else if(products.price === priceMedium) {
                    products.price = priceMedium * products.quantity;
                } else if(products.price === priceBig) {
                    products.price = priceBig * products.quantity;
                }
            }
        }
    } 
    localStorage.setItem('cart', JSON.stringify(cart));
}
function removeProduct(id) {
    cart = cart.filter(product => product.id !== id)
    localStorage.setItem('cart', JSON.stringify(cart));
}
function updateQuantity(id, quantity) {
    
    for(let product of cart) {
        if(product.id === id) {
            product.quantity = quantity;
            product.price *= quantity
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}
function getTotal() {
    console.log(cart);
    const sum = cart.reduce((prev, current) => {return prev + current.price}, 0);
    console.log(sum)
}