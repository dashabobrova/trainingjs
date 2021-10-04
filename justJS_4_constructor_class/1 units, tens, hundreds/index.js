'use strict'

function getNumberRank(num){ 
        // проверка на целостность и диапазон
    if( !Number.isInteger(num) || num<0 || num>999 ) {
        console.log('Необходимо ввести целое число в диапазоне [0, 999]');
        return {};
    }

    return {
        hundreds: Math.floor(num/10) % 10,
        tens: Math.floor(num/100),
        units: num % 10,
    }
}

console.log(getNumberRank(999))