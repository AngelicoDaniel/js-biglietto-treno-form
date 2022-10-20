function generaBiglietto(){

    const MoneyPerKm = '0.21';
    let valueKm = document.getElementById('km').value;
    let valueage = document.getElementById('age').value;
    let price = valueKm * MoneyPerKm;
    let name = document.getElementById('name');

    
    
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
    document.getElementById('name').innerHTML = `${name}`

    }

    

    // let carrozza = document.getElementById('generaPrezzo')
    
    // document.addEventListener('click', function()  {
    //     alert( generaNumeroRandom(1, 8) );
    // })

    // function generaNumeroRandom(min, max){
    //     return Math.floor(Math.random() * max) + min;
    // }