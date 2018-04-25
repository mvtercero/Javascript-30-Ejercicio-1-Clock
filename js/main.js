'use strict';

const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds(); //segundos del minuto actual
    const secondsDegrees = ((seconds / 60)* 360) + 90; //segundos divididos por 60 multiplicados por 360: 360º son los grados que tiene una ciruncferencia en el sistema hexadecimal y una vuelta completa equivale a 60 unidades de segundo
    secondHand.style.transform = "rotate(" + secondsDegrees + "deg)";

    const mins = now.getMinutes(); 
    const minsDegrees = ((mins / 60)* 360) + 90;
    minHand.style.transform = "rotate(" + minsDegrees + "deg)";

    const hour = now.getHours();
    const hourDegrees = ((mins / 12) * 360) + 90;
    hourHand.style.transform = "rotate(" + hourDegrees + "deg)";

}

setInterval (setDate, 1000);
