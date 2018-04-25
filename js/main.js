'use strict';

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds(); //segundos del minuto actual
    const secondsDegrees = ((seconds / 60)* 360); //segundos divididos por 60 multiplicados por 360
}

setInterval (setDate, 1000);
