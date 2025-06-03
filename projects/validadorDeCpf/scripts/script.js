// Criando Regex(s) para validação de número e caracter.
const regexForCharacters = /[a-z]/;
const regexForNumbers = /^[0-9]{11}$/;

// Requisitando os campos necessários.
const cpf = document.getElementById("cpf");
const form = document.getElementById("form");
const submitButton = document.getElementById("btn");
const answer = document.getElementById("answer");

// Função que reseta a Resposta.
function resetAnswer(){
    answer.innerText = "";
    answer.classList.remove("fail");
    answer.classList.remove("success");
}

// Função de define o texto da resposta a aplica a classe.
function setAnswer(responseText, className){
    resetAnswer();
    answer.style.display = "block";
    answer.innerText = responseText;
    answer.classList.add(className);
}

// Função que faz a validação do cpf.
function cpfValidation(value) {
    if(regexForCharacters.test(value)){
        setAnswer("Não é permitido o uso de letras", "fail");
    }
    else if(value.length == 11){
        const result = regexForNumbers.test(value)
        if(result){
            setAnswer("O CPF é Válido", "success");
        } else {
            setAnswer("O CPF é inválido", "fail");
        }
    } 
    else if (value.length < 11){
        setAnswer("Falta números no campo!", "fail");
    }
    else {
        setAnswer("Há mais números que o necessário!", "fail");
    }
}

// Criando interação no formulário toda vez que o botão
// do tipo submit for clicado.
form.addEventListener("submit", function(e){

    // Evita o carregamento da página.
    e.preventDefault();
    
    // Resgata apenas o valor do campo cpf.
    const value = cpf.value.trim();
    
    // Invocando/Chamando a função que valida o cpf.
    cpfValidation(value);
    
    // Resetando os dados após a conclusão da validação.
    value = "";
    cpf.value = "";
})
