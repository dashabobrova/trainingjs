'use strict'

function startGame(){ 
    let riddle = getRandomNumberAsArray();
    while(true){ // бесконечный цикл; выход при угадывании
        let answer = prompt('Угадайте 4-х значное число').split("");
        let result = getBullsAndCowsCount(riddle, answer);
        alert(
            `Ваш ответ ${answer}, быков:${result.bullsCount}, коров:${result.cowsCount}`
        )
        if(riddle.toString() === answer.toString()){
            alert('Вы победили!')
            break;
        }
    }
    alert(`Загадка: ${riddle}`)
}

function getRandomNumberAsArray(){ // случайное число в виде массива, где цифры не повторяются
    let generated = String(Math.random() * 1000000000000000000); // преобразование в строку, чтоюы в дальнейшем использовать метод includes
    let result = [];
    for (let value of generated){
        if(!result.includes(value)){ // если массив не содержит цифру, то добавляем ее в массив
            result.push(value);
        }
        if(result.length==4){
            return result
        }
    }
}

function getBullsAndCowsCount(riddle, answer){
    let bullsCount = getBullsCount(riddle, answer);
    let cowsCount = getCowsCount(riddle, answer);
    return {
        'bullsCount': bullsCount,
        'cowsCount': cowsCount-bullsCount,
    }
}

function getBullsCount(riddle, answer){
    let count = 0;
    for (let i = 0; i < riddle.length; i++){
        if(riddle[i] == answer[i]){
            count++;
        }
    }
    return count;
}

function getCowsCount(riddle, answer){
    let count = 0;
    for (let value of riddle){
        if(answer.includes(value)){
            count++;
        }
    }
    return count;
}

startGame(); 