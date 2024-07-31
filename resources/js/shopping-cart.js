fetch('resources/js/products.json').
then((response) => {
    console.log(response)
    return response.json();
}).then((data) => {
    localStorage.setItem('produtos', JSON.stringify(data));
    if(!localStorage.getItem('cart')) localStorage.setItem('cart',"[]");
});
const products = JSON.parse(localStorage.getItem('produtos'));
const cart = JSON.parse(localStorage.getItem('cart'));
function addProduct(id) {
    const product = products.find((product) => product.id === id);
    if(cart.length === 0) {
        cart.push(product);
    } else {
        const res = cart.find((element) => {element.id === id}); 
        if(res === undefined) cart.push(product);
    } 
    localStorage.setItem('cart', JSON.stringify(cart));
}
function removeProduct(id) {
    const temp = cart.filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(temp));
}
function updateQuantity(id, quantity) {
    for(let product of cart) {
        if(product.id === id) product.quantity = quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}
function getTotal() {
    const temp = cart.map((product) => {
        parseFloat(product.price);
    });
    const sum = temp.reduce((prev, next) => {prev + next;}, 0);
    console.log(sum)
}
