fetch('resources/js/products.json')
.then((response) => {
    console.log(response)
    return response.json();
})
.then((data) => {
    localStorage.setItem('produtos', JSON.stringify(data));
    if(!localStorage.getItem('cart')) localStorage.setItem('cart',"[]");
})
.catch(error => console.error('Um erro ocorreu ao requisitar a API', error));

const products = JSON.parse(localStorage.getItem('produtos'));
let cart = JSON.parse(localStorage.getItem('cart'));
function addProduct(id) {
    const product = products.find(product => product.id === id);
    if(cart.length === 0) {
        product.quantity++;
        cart.push(product);
    } else if(cart.find(product => product.id === id)) {
        product.quantity++;
        product.quantityPrice = product.price * product.quantity;
    } else {
        product.quantity++;
        cart.push(product);
    }
    const totalPrice = product.quantityPrice;
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById(`price${id}`).innerHTML = `Quantidade: ${product.quantity}\nTotal: R$ ${totalPrice},00`;
}
function removeProduct(id) {
    cart = cart.filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById(`price${id}`).innerHTML = `Quantidade: 0\nTotal: R$ 0,00`;
}
function updateQuantity(id, quantity) {
    let totalPrice = 0;
    let quantityProduct = 0;
    for(let product of cart) {
        if(product.id === id) {
            product.quantity = quantity;
            product.quantityPrice = product.price * quantity;
            totalPrice = product.quantityPrice;
            quantityProduct = product.quantity;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById(`price${id}`).innerHTML = `Quantidade: ${quantityProduct}\nTotal: R$ ${totalPrice},00`;
}
function getTotal() {
    console.log(cart);
    const sum = cart.reduce(prev, current => {return prev + current.price}, 0);
    console.log(sum)
}
function purchase(id) {
    const purchaseDone = cart.find(product => product.id === id); 
    console.log(purchaseDone)
    purchaseDone === undefined ? alert('Precisa adicionar ao carrinho para concluir a compra!') : alert('Obrigado por comprar da gente!');
}