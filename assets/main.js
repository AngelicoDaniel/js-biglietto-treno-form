function generaBiglietto(){

    const MoneyPerKm = '0.21';
    let valueKm = document.getElementById('km').value;
    let valueage = document.getElementById('age').value;
    let price = valueKm * MoneyPerKm;

    
    
    if (valueage <= 18) {
        price = price * 0.8;
        console.log('minorenne')
    } else if (valueage >= 65){
        price = price * 0.6;
        console.log('over65')
    } else {
        finalPrice = price
        console.log('default')
    }
    
    document.getElementById('finalPrice').innerHTML = `il prezzo finale è: ${price.toFixed(2)}`

    //nome e cognome
    let name = document.getElementById('name').value;

    document.getElementById('nome').innerHTML = `${name}`

    //carrozza
    let carrozza = Math.floor(Math.random() * 8) +1;

    document.getElementById('carrozza').innerHTML = `${carrozza}`

    //CPcode


    }

    
