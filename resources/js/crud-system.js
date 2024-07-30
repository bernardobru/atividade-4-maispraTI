class Purchase {
    constructor(date, name, quantity, value) {
        this.date = date;
        this.name = name;
        this.quantity = quantity;
        this.value = value;
    }
    validatePurchase() {
        for(let items in this) {
            if(this[items] === undefined || this[items] === '') return false;
        }
        return true;
    }
}
class Database {
    constructor() {
        const id = localStorage.getItem('id');
        if(id === null) localStorage.setItem('id', 0);
    }
    createProduct(purchase) {
        const id = getNextId();
        localStorage.setItem(id, JSON.stringify(purchase));
        localStorage.setItem('id', id);
    }
    getProducts() {
        const products = new Array();
        const id = localStorage.getItem('id');
        for(let index = 1; index <= id; index++) {
            const product = JSON.parse(localStorage.getItem(index));
            if(product === null) continue;
            product.id = index;
            products.push(product)
        }
        return products;
    }
    deleteProduct(id){
        localStorage.removeItem(id);
    }
    /* searchProducts(products) {
        let filteredProducts = new Array();
        filteredProducts = this.getProducts();
        if(products.date !== '') {
            filteredItems = filteredItems.filter(i => i.date === items.date);
        }
        if(products.name !== '') {
            filteredItems = filteredItems.filter(i => i.name === items.name);
        }
        if(products.quantity !== '') {
            filteredItems = filteredItems.filter(i => i.quantity === items.quantity);
        }
        if(products.value !== '') {
            filteredItems = filteredItems.filter(i => i.value === items.value);
        }
        return filteredProducts;
    } */
}
const database = new Database();
function getNextId() {
    const nextId = localStorage.getItem('id');
    return parseInt(nextId) + 1;
}
function addProduct(name, value) {
    const newDate = new Date();
    const date = newDate.toUTCstring();
    const name = name;
    const quantity = getElementById('quantidade');
    const value = value;
    const purchase = new Purchase(date, name, quantity, value);
    if(purchase.validatePurchase()) database.createProduct(purchase);
    onclick = window.location.reload();
}
function loadPurchases(purchase) {
    if(purchase === undefined) purchase = database.getProducts();
    const listProducts = document.getElementById('listProducts');
    listProducts.innerHTML = '';
    purchase.forEach((products) => {
        const row = listProducts.insertRow();
        row.insertCell(0).innerHTML = products.date;
        row.insertCell(1).innerHTML = products.name;
        row.insertCell(2).innerHTML = products.quantity;
        row.insertCell(3).innerHTML = products.value;
        const deleteButton = document.createElement('button');
        deleteButton.id = products.id;
        deleteButton.innerHTML = 'Excluir do carrinho';
        deleteButton.onclick = () => {
            const id = products.id;
            database.deleteProduct(id);
            window.location.reload;
        }
        const updateButton = document.createElement('button');
        updateButton.innerHTML = 'Atualizar carrinho';
        updateButton.onclick = () => {
        
        }
        row.insertCell(4).append(deleteButton)
        row.insertCell(5).append(updateButton)
    });
}
document.addEventListener('DOMContentLoaded', () => {
    if(document.body.contains(document.getElementById('listProducts'))){
        loadPurchases();
    }
});