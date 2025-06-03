const container = document.querySelector(".container");
const botaoReiniciar = document.querySelector("button");
let cartas;
let primeiraCarta = "";
let segundaCarta = "";

//imagens
const items = [
    {nome: "bufos", imagem: "assets/bufosRegularis.jpg"},
    {nome: "cat", imagem: "assets/burpCat.jpeg"},
    {nome: "cavalo", imagem: "assets/cavalo.jpg"},
    {nome: "finger", imagem: "assets/finger.png"},
    {nome: "seguraOGrosso", imagem: "assets/seguraOGrosso.png"},
    {nome: "luigi", imagem: "assets/luigi.png" },
    {nome: "okGoogle", imagem: "assets/okGoogle.jpg"},
    {nome: "saitama", imagem: "assets/saitamaPuto.jpg"},
];

botaoReiniciar.addEventListener("click", () => location.reload());

function criarCartas() {
    let itemsDuplicado = [...items, ...items];

    //organizar as imagens aleatroiamente
    let memes = itemsDuplicado.sort(() => Math.random() - 0.5);

    memes.map((meme) => {
    container.innerHTML += `<div class="carta" data-carta=${meme.nome}>
    <div class="atras">?</div>
    <div class="frente">
    <img src=${meme.imagem} width="144px" height="144px" />
    </div>
    </div>`;
    });
}
criarCartas();

function virarcarta(){
    cartas = document.querySelectorAll(".carta");
    
    cartas.forEach((carta) => {
        carta.addEventListener("click", () => {
            if(primeiraCarta == "") {
                carta.classList.add("carta-virada");
                primeiraCarta = carta;
            }else if (segundaCarta == "") {
                carta.classList.add("carta-virada");
                segundaCarta = carta;
                checarCarta();
            }
        })
    })
}
virarcarta();

function checarCarta(){
    const primeiroMeme = primeiraCarta.getAttribute("data-carta");
    const segundoMeme = segundaCarta.getAttribute("data-carta");
    
    if(primeiroMeme == segundoMeme){
        primeiraCarta = "";
        segundaCarta = "";
    }else{
        setTimeout (() => {
        primeiraCarta.classList.remove("carta-virada");
        segundaCarta.classList.remove("carta-virada");

        primeiraCarta = "";
        segundaCarta = "";
        }, 500)
        
    }
}