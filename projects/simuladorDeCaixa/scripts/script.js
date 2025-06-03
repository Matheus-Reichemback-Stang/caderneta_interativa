const regex = /[a-z]/;

const button = document.getElementById("btn");
const input = document.getElementById("value");
const bills = document.getElementsByClassName("bills");

function exchangeCalculator(value) {
    const rest100 = value % 100;
    const rest50 = rest100 % 50;
    const rest20 = rest50 % 20;
    const rest10 = rest20 % 10;
    const rest5 = rest10 % 5;
    const rest2 = rest5 % 2;

    const bills100 = value / 100;
    const bills50 = rest100 / 50;
    const bills20 = rest50 / 20;
    const bills10 = rest20 / 10;
    const bills5 = rest10 / 5;
    const bills2 = rest5 / 2;
    const bills1 = rest2 / 1;

    return [bills100, bills50, bills20, bills10, bills5, bills2, bills1]
}

function validationOfBills (exchange) {
    for(let i = 0; i < bills.length; i++){
            const bill = bills[i].querySelector('span');
            bill.innerText = parseInt(exchange[i])
            // const value = bill.getAttribute('data-bill');
            // if(value == "100"){
            //     bill.innerText = parseInt(bills100);
            // } else if(value == "50"){
            //     bill.innerText = parseInt(bills50);
            // } else if(value == "20") {
            //     bill.innerText = parseInt(bills20);
            // } else if(value == "10"){
            //     bill.innerText = parseInt(bills10);
            // } else if(value == "5"){
            //     bill.innerText = parseInt(bills5);
            // } else if(value == "2") {
            //     bill.innerText = parseInt(bills2);
            // } else {
            //     bill.innerText = parseInt(bills1);
            // }
        }
}

button.addEventListener('click', function() {
    const stringValue = input.value.trim();
    
    if(regex.test(stringValue.toLowerCase())){
        alert("Não é permitido letras");
    }
    else if(stringValue == ""){
        alert("É necessário preencher o campo");
    }
    else {
        const value = parseInt(stringValue);

        const exchange = exchangeCalculator(value);
        console.log(exchange)

        validationOfBills(exchange)

    }
})