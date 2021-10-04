'use strict';

const pathToImages = 'images';
const pathToProductsImg = `${pathToImages}/featured`;
const featuredItemsEl = document.querySelector('.featuredItems');

function insertProductsIntoPage(products, featuredItemsEl){
    let result = '';
    products.forEach(prod => {
        result += getProductMarkup(prod);
    })
    featuredItemsEl.insertAdjacentHTML('afterbegin', result);
}

function getProductMarkup(product) { // по очереди приходит каждый продукт(=объект из массива по ключу) из категории (для удобства)
    return `
            <div class="featuredItem">

            <div class="featuredImgWrap">
                <img src="${pathToProductsImg}/${product.image}" alt="${product.name}">
                <div class="featuredImgDark">
                    <button data-productId="${product.id}">
                        <img src="${pathToImages}/cart.svg" alt="">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div class="featuredData">
                <div class="featuredName">
                    ${product.name}
                </div>
                <div class="featuredText">
                    ${product.description}
                </div>
                <div class="featuredPrice">
                    ${product.price}
                </div>
            </div>

        </div>
        `;
};

function addEventListenersForAddToCartsButtons(){
    const addToCartsBtn = document.querySelectorAll('button[data-productId]');
    console.log(addToCartsBtn)
    addToCartsBtn.forEach(btn => btn.addEventListener('click', addedProductHandler) )
};

function addedProductHandler(event){
    const productId = event.currentTarget.getAttribute('data-productId');
    addProdunctIntoBasket(productId);
}

insertProductsIntoPage(products, featuredItemsEl);
addEventListenersForAddToCartsButtons();