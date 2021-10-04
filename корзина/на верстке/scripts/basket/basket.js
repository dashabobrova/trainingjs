'use strict';

let basketCounter = document.querySelector('.cartIconWrap span');
let basketEl = document.querySelector('.basket');
let openBasketBtn = document.querySelector('.cartIconWrap');
let basketTotalEl = document.querySelector('.basketTotal');
let basketTotalValueEl = document.querySelector('.basketTotalValue');

openBasketBtn.addEventListener('click', function(){
    basketEl.classList.toggle('hidden');
})

let basket = {};

function addProdunctIntoBasket(productId){
    basketCounter.textContent++;
    addProductToBasketObj(productId);
    renderProductIntoBasket(productId);
    calculateAndRenderTotalBasketSum();
};

function addProductToBasketObj(productId){
    if(!(productId in basket)){
        basket[productId]=1;
    } else {
        basket[productId]++;
    }
};

function renderProductIntoBasket(productId){
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if(productExist){
        increaseProductCount(productId);
        recalcSumForProduct(productId);
    } else {
        renderNewProductInBasket(productId);
    }
};

function renderNewProductInBasket(productId){
    let resultbasket = `
    <div class="basketRow">
        <div>${products[productId].name}</div>
        <div>
            <span class="productCount" data-productId="${productId}">1</span> шт.
        </div>
        <div>$${products[productId].price}</div>
        <div>
            $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
        </div>
    </div>
    `
    basketTotalEl.insertAdjacentHTML('beforebegin', resultbasket)
};

function increaseProductCount(productId){
    let productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
};

function recalcSumForProduct(productId){
    let productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPrice = (basket[productId] * products[productId].price).toFixed(2);
    productTotalRowEl.textContent = totalPrice;
};

function calculateAndRenderTotalBasketSum(){
    let totalSum=0;
    for(let productId in basket){
        totalSum+= basket[productId] * products[productId].price;
        basketTotalValueEl.textContent = totalSum.toFixed(2);

    }
}