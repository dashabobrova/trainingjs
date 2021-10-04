'use strict';

const products = document.querySelectorAll('.product');

const fromInput = document.getElementById('from');
const toInput = document.getElementById('to');

fromInput.addEventListener('change', changePriceHandler);
toInput.addEventListener('change', changePriceHandler);

function changePriceHandler(){
    const fromPrice = fromInput.value;
    const toPrice = toInput.value;

    if(fromPrice === '' && toPrice === ''){
        reset();
    } else if(fromPrice !== '' && toPrice === ''){
        showProductsWithToPrice();
    } else if(fromPrice === '' && toPrice !== ''){
        showProductsWithFromPrice();
    } else if (fromPrice !== '' && toPrice !== ''){
        showProductsWithBothPrices();
    }
}

function hideProduct(product){
    product.style.opacity = '0.3'; // display none
}

function showProduct(product){
    product.style.opacity = '1'; // display block
}

function isProductHodden(product){ // возращает true или false
    return product.style.opacity = '0.3';
}

// если продукт скрыт, то показываем
function reset(){ 
    products.forEach(product => {
        if(isProductHodden(product)){
            showProduct(product);
        }
    });
}

function showProductsWithToPrice(){
    const fromPrice = Number(fromInput.value);

    products.forEach(product => {
        const productPrice = Number(product.querySelector('.price').textContent.trim());
        if(productPrice >= fromPrice){
            showProduct(product)
        } else {
            hideProduct(product);
        }
    })
}

function showProductsWithFromPrice(){
    const toPrice = Number(toInput.value);

    products.forEach(product => {
        const productPrice = Number(product.querySelector('.price').textContent.trim());
        if(productPrice <= toPrice){
           showProduct(product);
        } else {
            hideProduct(product);
        }
    })
}

function showProductsWithBothPrices(){
    const fromPrice = Number(fromInput.value);
    const toPrice = Number(toInput.value);

    if(fromPrice>toPrice){
        alert('Цена от должна быть меньше цены до');
        fromInput.value='';
        toInput.value='';
        reset();
        return; // reset()
    }

    products.forEach(product => {
        const productPrice = Number(product.querySelector('.price').textContent.trim());
        if(productPrice >= fromPrice && productPrice <= toPrice){
           showProduct(product);
        } else {
            hideProduct(product);
        }
    })
}