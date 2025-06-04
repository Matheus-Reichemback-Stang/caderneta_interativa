
// Elementos das páginas
const initialPage = document.getElementById("initialPage");
const admName = document.getElementById("admName");
const admPassword = document.getElementById("admPassword");
const accessButton = document.getElementById("btn");
const projectButtons = document.getElementsByClassName("projectButton")
const screenIframe = document.getElementById("screen")


const admNameStorage = localStorage.getItem('user_name');
const admPasswordStorage = localStorage.getItem('user_password');

if(admNameStorage != null && admPasswordStorage != null){
    admName.value = admNameStorage;
    admPassword.value = admPasswordStorage;
}

// Elementos do botão que acessa os perfis
const profilesButton = document.getElementById("profilesButton")
const profiles = document.getElementById("profiles")



// Botão que mostra os perfis dos desenvolvedores 
profilesButton.addEventListener('click', function() {
    profiles.classList.toggle('activeProfiles')
    profilesButton.classList.toggle('filter')
    if(profiles.classList.contains('activeProfiles')){
        profilesButton.innerHTML = `<img src="./assets/icons/people_with_pencil.svg" alt="ícone de pessoas">`
    } else{
        profilesButton.innerHTML = `<img src="./assets/icons/people.svg" alt="ícone de pessoas com traço cortando">`
    }
})

// Adiciona um evento no botão de acessar na página inicial
accessButton.addEventListener("click", function() {
    if(admNameStorage != null && admPasswordStorage != null){
        if(admName.value.trim() == "" || admPassword.value.trim() == ""){
        alert("Há campos não preenchidos!")
        } else if(admName.value == admNameStorage && admPassword.value == admPasswordStorage){
            initialPage.style.display = "none";
            document.getElementById("contentPage").style.display = "grid";
        } else {
            alert("O nome ou senha está inválido!")
        }
    } else {
        if(admName.value.trim() == "" || admPassword.value.trim() == ""){
        alert("Há campos não preenchidos!")
        } else {
            localStorage.setItem("user_name", admName.value.trim());
            localStorage.setItem("user_password", admPassword.value.trim());
            initialPage.style.display = "none";
            document.getElementById("contentPage").style.display = "grid";
        }
    }
    
})

// Percorre a lista de botões e adiciona um evento de clique em
// cada um deles, e especifica o que deve ocorrer quando o evento
// for acionado
for(let x = 0; x < projectButtons.length; x++){
    const button = projectButtons[x]
    button.addEventListener("click", function(){
        removeActivatedProjectButton()
        button.classList.add("activated")
        const path = button.getAttribute("data-path");
        screenIframe.src = `./projects/${path}/index.html`;
    })
}

// Remove a classe que especifica o botão selecionado
function removeActivatedProjectButton() {
    for(let x = 0; x < projectButtons.length; x++){
        if(projectButtons[x].classList.contains("activated")){
            projectButtons[x].classList.remove("activated")
        }
    }
}


