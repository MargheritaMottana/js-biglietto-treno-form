// Km utente

const km = prompt('Quanti km devi percorrere?');
console.log('km', km, typeof km);
// trasformare valore in numero
const kmNumber = parseInt(km);
console.log('kmNumber', kmNumber, typeof kmNumber);

// Età utente

const age = prompt('Qual è la tua età?');
console.log('age', age, typeof age);
// trasformare valore in numero
const ageNumber = parseInt(age);
console.log('ageNumber', ageNumber, typeof ageNumber);

// Verifico che l'utente mi abbia dato dati validi (numeri)

if (isNaN(kmNumber) || isNaN(ageNumber)) {
    alert('Scrivi usando solo numeri')
}

else {

    // Calcolo il prezzo base del biglietto

    let price = kmNumber * 0.21;
    console.log('price', price, typeof price);

    if (ageNumber < 18) {
        console.log('Minorenne sconto del 20%');

        price *= 0.8;
        console.log('price', price, typeof price)
    }
    else if (ageNumber > 65) {
        console.log('Over 65 sconto 40%');

        price *= 0.6;
        console.log('price', price, typeof price)
    }

    // Scrittura in console del prezzo finale
    alert('Il prezzo del biglietto è di €' + price.toFixed(2));

}

// dichiato il bottone
const myForm = document.querySelector('form')

// ascolto il click sul bottone
// alla funzione do un nome, lo riprendo per "prevenire" il comportamento di default 
myForm.addEventListener('submit', function (event) {

    // prevengo il comportamento
    event.preventDefault();

    // esegui le regole seguenti (recupera dato dall'input)
    const kmInput = document.getElementById('km');
    console.log('kmInput', kmInput, typeof kmInput);
    console.log('kmInput.value', kmInput.value, typeof kmInput.value);

    const ageInput = document.getElementById('age');
    console.log('ageInput', ageInput, typeof ageInput);
    console.log('ageInput.value', ageInput.value, typeof ageInput.value);

})