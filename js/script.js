'use strict';
document.addEventListener('DOMContentLoaded', () => {

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd'),
      inputEur = document.querySelector('#eur'),
      inputCny = document.querySelector('#cny'),
      inputKzt = document.querySelector('#kzt'),
      inputTry = document.querySelector('#try');

inputRub.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', 'JSON/current.json');//метод для запроса(самые частоиспользуемые GET и POST), путь к серверу(УРЛ), асинхронность, логин, пароль
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');//метод для(тип контента, какой тип?кодировка)
    request.send();//данные на сервер
    request.addEventListener('load', ()=>{
        if (request.status === 200) {
            // console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value/data.current.usd).toFixed(2);
            inputEur.value = (+inputRub.value/data.current.eur).toFixed(2);
            inputCny.value = (+inputRub.value/data.current.cny).toFixed(2);
            inputKzt.value = (+inputRub.value/data.current.kzt).toFixed(2);
            inputTry.value = (+inputRub.value/data.current.try).toFixed(2);
        } else {
            inputUsd.value = "Что-то не так..."
        }
    });
});

});