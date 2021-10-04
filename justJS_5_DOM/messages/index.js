'use strict';

const noMessagesEl = document.querySelector('.noMessages');
const messagesEl = document.querySelector('.messages');
const textareaEl = document.querySelector('textarea');
const nameInputEl = document.querySelector('input');
const errorTextareaEl = document.querySelector('.errorTextarea');
const errorInputEl = document.querySelector('.errorInput');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');

const messageElClassName = 'message';

sendBtn.addEventListener('click', function(){
    textareaError();
    inputError();

    hideNoMessagesText();

    const messageMarkup = getMessageMarkup(textareaEl.value, nameInputEl.value, getTime());
    messagesEl.insertAdjacentHTML('beforeend', messageMarkup);

    textareaEl.value='';
})

function getMessageMarkup(text, author, time){
    return `<div class="message"
        <div>${author}: ${text}  
            <span class="messageTime">${time}</span></div>
    </div>`;
}

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`
}

function textareaError(){
    if(textareaEl.value === ''){
        errorTextareaEl.textContent = 'Сообщение не может быть пустым';
        return;
    } else {
        errorTextareaEl.textContent = '';
    }
}

function inputError(){
    if(nameInputEl.value === ''){
        errorInputEl.textContent = 'Имя не может быть пустым';
        return;
    } else {
        errorInputEl.textContent = '';
    }
}

function hideNoMessagesText(){
    noMessagesEl.style.display = 'none';
}