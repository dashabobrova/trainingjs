'use strict'

/* конструктор Product, который принимает параметры name
и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. */

class Product {
    constructor(name, price) {
        this.name = name,
        this.price = price
    }

    make25PercentDiscount(){
        let discPrice = this.price/100*75;
        console.log(`Цена товара "${this.name}" со скидкой ${discPrice}`);
    }
}

const prod1 = new Product('Банан', 100);
prod1.make25PercentDiscount();