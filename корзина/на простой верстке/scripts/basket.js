'use strict';

const basketEl = document.querySelector('.basket');
const basketTotalEl = document.querySelector('.totalPrice');

function addProductToBasket(productId){
    console.log(productId);
    addToBusketObj(productId);
    renderProductInBasket(productId); 
};

const basket = {};

function addToBusketObj(productId){
    if(!(productId in basket)){
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
};

function renderProductInBasket(productId){
    const productsExist = document.querySelector(`.productCount[data-productId="${productId}"]`)
    if(productsExist){
        increaseCount(productId);
        changeTotalcount(productId);
        changeTotalBasketPrice(productId);
    } else {
        rendernewProductInBasket(productId);
        changeTotalBasketPrice(productId);
    }
};

function rendernewProductInBasket(productId){
    let result = '';
    result += markupBasket(productId);
    basketEl.insertAdjacentHTML('beforeend', result)
};

// products[productId] - индекс (совпадает с id) 

function markupBasket(productId){
    return `<li>
        <div>"${products[productId].name}"</div>
        <div>${products[productId].price} р.</div> 
        <div class="productCount" data-productId="${productId}">1</div>
        <div class="totalCount" data-productId="${productId}">${products[productId].price}</div>
    </li>
    `
};

function increaseCount(productId){
    const countText = document.querySelector(`.productCount[data-productId="${productId}"]`);
    countText.textContent++;
};

function changeTotalcount(productId){
    const totalText = document.querySelector(`.totalCount[data-productId="${productId}"]`);
    let amountProd = products[productId].price * basket[productId];
    totalText.textContent = amountProd;
};

function changeTotalBasketPrice(productId){
    let totalBasketPrice = 0;
    for (productId in basket){
        totalBasketPrice += products[productId].price * basket[productId];
    };
    basketTotalEl.textContent=totalBasketPrice;
};