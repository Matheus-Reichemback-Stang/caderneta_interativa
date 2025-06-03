document.getElementById('convert').onclick = tempconvert;  //manipulação de DOM
document.getElementById('clean').onclick = clearform; //defini para que quando clicar chame estas funções

function tempconvert(){
    var fahrenheit = document.getElementById("fahrenheit").value; //estou armazenando dentro da variavel o valor do input
    var celsius = document.getElementById("celsius").value;

    //se(condicao){bloco de codigo}else{caso não}
    //
    if(isNaN(fahrenheit) || isNaN(celsius)){
        alert("Digite um valor válido!")
        return
    }else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }else if(celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    }

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
}

function clearform(){
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}

