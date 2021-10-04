'use strict';

const productsEl = document.querySelector(".products");

function renderCard() { 
    let markupDiv = '';
    products.forEach(prod => { 
        markupDiv += getProductMarkup(prod);
    })
    productsEl.insertAdjacentHTML('beforeend', markupDiv);
}

function getProductMarkup(product) { // по очереди приходит каждый продукт(=объект из массива по ключу) из категории (для удобства)
return `
    <div class="product">
        <div>${product.name}</div>
        <img src="${product.img}" alt="${product.name}">
        <div>${product.price}</div>
        <button data-productId="${product.id}">В корзину</button>
    </div>
    `;
}

function addToBasketEventListner(){
    const addBtnEls = document.querySelectorAll('button[data-productId]');
    addBtnEls.forEach(btn => btn.addEventListener('click', addToBasketHandler));
};

function addToBasketHandler(event){
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductToBasket(productId)
}

renderCard();
addToBasketEventListner();