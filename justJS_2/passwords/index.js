"use strict";

/* Генерация случайных паролей  */

let symbols = '123456789!@#$%^&*()-_=+;:][{}/.,qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
let password = '';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min )) + min; // случайное число от min до max, не включая max 
}

const generatePass = (passLength) => { 
    let symbolPosition = getRandomInt( 0, symbols.length + 1 ); // поиск случайного индекса символа
    password += symbols.charAt(symbolPosition); // в строку password добавляется 1 символ

    passLength--;
    if (passLength != 0) generatePass(passLength); // рекурсия
}

const askLength = () => {
    return parseInt(prompt('Длинна пароля'));
}

generatePass(askLength()); // вызов с аргументом (длина пароля, введенная пользователем)
alert(`Ваш пароль: ${password}`);
