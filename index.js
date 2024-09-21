class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity)); 
        }
    }
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    displayItems() {
        if (this.items.length === 0) {
            console.log("The cart is empty.");
            return;
        }
        console.log("Shopping Cart Items:");
        this.items.forEach(item => {
            console.log(`${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`);
        });
    }

}



//----------------------------------------------------------
const product1 = new Product(1, "Laptop", 999.99);
const product2 = new Product(2, "Mouse", 25.50);
const product3 = new Product(3, "Keyboard", 45.00);

const cart = new ShoppingCart();

cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

cart.displayItems();
console.log(`Total: $${cart.getTotal().toFixed(2)}`);

cart.removeItem(2); 

cart.displayItems();
console.log(`Total: $${cart.getTotal().toFixed(2)}`);
