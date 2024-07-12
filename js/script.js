// km utente

const km = prompt('Quanti km devi percorrere?');
console.log('km', km, typeof km);
// trasformare valore in numero
const kmNumber = parseInt(km);
console.log('kmNumber', kmNumber, typeof kmNumber);

// Nome utente

const age = prompt('Qual è la tua età?');
console.log('age', age, typeof age);
// trasformare valore in numero
const ageNumber = parseInt(age);
console.log('ageNumber', ageNumber, typeof ageNumber);

// Calcolo il prezzo base del biglietto

let price = kmNumber * 0.21;
console.log('price', price, typeof price);

if (ageNumber < 18) {
    console.log('Minorenne sconto del 20%');

    /* 
    Sconto del 20% - 4 soluzioni:
    prezzo discounted = (prezzo base / 100) * 20%;
    prezzo discounted = prezzo base * (1 - 0.2);
    prezzo discounted = prezzo base * 0.8;
    prezzo discounted *= 0.8;
    */

    price *= 0.8;
    console.log('price', price, typeof price)
}
else if (ageNumber > 65) {
    console.log('Over 65 sconto 40%');

    /* 
    Sconto del 40% - 4 soluzioni:
    prezzo discounted = (prezzo base / 100) * 40%;
    prezzo discounted = prezzo base * (1 - 0.4);
    prezzo discounted = prezzo base * 0.6;
    prezzo discounted *= 0.6;
    */

    price *= 0.6;
    console.log('price', price, typeof price)
}

// Scrittura in console del prezzo finale
alert('Il prezzo del biglietto è di €' + price.toFixed(2));