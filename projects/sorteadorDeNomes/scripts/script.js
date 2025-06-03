// Regex para números
const regexForNumbers = /[0-9]/;

// Resgatando os Elementos
const inputName = document.getElementById("name");
const addButton = document.getElementById("addButton");
const drawButton = document.getElementById("drawButton");

// Criando variável
let listOfNames = [];

// Evento de clique no botão de adicionar
addButton.addEventListener("click", function() {
    // Pegando o valor do input sem espaços nas bordas e em caixa baixa
    valueInInputName = inputName.value.trim().toLowerCase()

    // Validando para ver se há números
    if(regexForNumbers.test(valueInInputName)){
        alert("Não é permitido o uso de números!");
    } // Validando se o campo foi preenchido
    else if(valueInInputName.length == 0){
        alert("É preciso preencher o campo")
    }
    else {
        // Verificando se o nome já está na lista
        const result = checkNamesInList(valueInInputName)
        if(result == true){
            alert("O nome " + valueInInputName + " já foi adicionado!")
        } 
        else{
            listOfNames.push(valueInInputName);
            inputName.value = "";
        }
    }
})

// Função que retorna um boolena que responde se o nome já está na lista
function checkNamesInList(valueInInputName) {
    for(let x = 0; x < listOfNames.length; x++){
        if(listOfNames[x] == valueInInputName){
            return true;
        }
    }
    return false;
}

// Evento de clique no botão de adicionar
drawButton.addEventListener("click", function() {
    // Gerando o índice do nome sortido
    const nameIndex = Math.floor(Math.random() * listOfNames.length);
    alert("O nome sortido foi: " + listOfNames[nameIndex])
})

