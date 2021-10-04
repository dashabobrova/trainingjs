"use strict";

/* 6**. - остальные задания уж слишком элементарные, не вижу смысла их сейчас делать

    Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
    положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
    "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
    "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
    "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
    То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
    числа. 
*/

const getCase = number => {
    if(isNaN(number)){
        alert('Некорректное значение. Попробуйте еще раз');
        makeQuestion();
        return;
    }

    const prevLast = findThePrevLastNum(number);

    if ( prevLast == 1 ){
        return 'рублей';
    }

    let str = String(number); // у числа нет length 
    let theLastNum = str.charAt(str.length-1);

    switch(Number(theLastNum)){
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return 'рублей';
        case 1:
            return 'рубль';
        case 2:
        case 3:
        case 4:
            return 'рубля';
    }    
}

const findThePrevLastNum = number => { 
    let str = String(number);
    let thePrevLastNum = str.charAt(str.length-2);

    if ( thePrevLastNum !== '') {
        return Number(thePrevLastNum);
    }
    return null;
}

const makeQuestion = () => {
    const number = parseInt(prompt('Сколько денег вы хотите положить на банковский счет?'));
    let result = getCase(number);

    if (result !== undefined) {
        alert(`Ваша сумма в ${number} ${result} успешно зачислена.`)
    }
} 

makeQuestion();





