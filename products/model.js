// hacemos el modeling de product
export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    //metodo a json
    toJSON() {
        return {
            name: this.name,
            price: this.price
        };
    }
}