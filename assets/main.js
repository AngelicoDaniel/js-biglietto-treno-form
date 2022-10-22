function generaBiglietto(){

    const MoneyPerKm = '0.21';
    let valueKm = document.getElementById('km').value;
    let valueage = document.getElementById('age').value;
    let price = valueKm * MoneyPerKm;
    
    if (valueage == 'minorenne') {
        price = price * 0.8;
        console.log('minorenne')

    } else if ( valueage == 'over65'){
        price = price * 0.6;
        console.log('over65')
    } else {
        finalPrice = price
        console.log('maggiorenne')
    }
    
    document.getElementById('finalPrice').innerHTML = ` ${price.toFixed(2)} €`

    //nome e cognome
    let name = document.getElementById('name').value;

    document.getElementById('nome').innerHTML = `${name}`

    //carrozza
    let carrozza = Math.floor(Math.random() * 9) +1;

    document.getElementById('carrozza').innerHTML = `${carrozza}`

    //CPcode
    let CPcode = Math.floor(Math.random() * 9999) +1000;

    document.getElementById('CPcode').innerHTML = `${CPcode}`

    }

//funzione ticket reset

function ticketReset(){
    document.getElementById('result').value = ''
    }
