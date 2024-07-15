// dichiaro il bottone
const myForm = document.querySelector('form');

// ascolto il click sul bottone
// alla funzione do un nome, lo riprendo per "prevenire" il comportamento di default 
myForm.addEventListener('submit', function (event) {

    // prevengo il comportamento
    event.preventDefault();

    // Km utente
    // esegui le regole seguenti (recupera dato dall'input)
    const kmInput = document.getElementById('km');

    const km = kmInput.value; // estrae valore contenuto nell'elemento
    console.log('km', km, typeof km);

    const kmNumber = parseInt(km);
    console.log('kmNumber', kmNumber, typeof kmNumber);

    // Età utente
    // esegui le regole seguenti (recupera dato dall'input)
    const ageInput = document.getElementById('age');

    const age = ageInput.value; // estrae valore contenuto nell'elemento
    console.log('age', age, typeof age);

    const ageNumber = parseInt(age);
    console.log('ageNumber', ageNumber, typeof ageNumber);

    if (isNaN(ageNumber) || isNaN(kmNumber)) {
        alert('Scrivi in numeri')
    }
    else {

        // Calcolo il prezzo base del biglietto

        let price = kmNumber * 0.21;
        console.log('price', price, typeof price);

        if (ageNumber < 18) {
            console.log('Minorenne sconto del 20%');

            price *= 0.8;
            console.log('price', price, typeof price);
        }
        else if (ageNumber > 65) {
            console.log('Over 65 sconto 40%');

            price *= 0.6;
            console.log('price', price, typeof price);
        };

        // Scrittura in console del prezzo finale
        console.log('price', price, typeof price)

        const resultSpan = document.getElementById('result');
        resultSpan.innerHTML = price.toFixed(2);

    };

});

