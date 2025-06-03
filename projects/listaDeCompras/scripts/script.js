document.addEventListener("DOMContentLoaded", function() {
    // Elementos HTML capturados
    const addButtons = document.getElementsByClassName("btn");
    const cartIcon = document.getElementById("cartIcon")
    const cart = document.getElementById("cart")
    const cards = document.getElementsByClassName("card")

    // Criando variáveis 
    const cartItems = [];
    const totalValue = [];

    // Adicionando evento de click nos botões de adicionar ao carrinho
    for(let i = 0; i < addButtons.length; i++){
        const button = addButtons[i]
        button.addEventListener("click", function(){
            const parent = button.parentElement;
            const id = parent.getAttribute("data-id")
            const result = checkItensInTheCard(id)
            if(result){
                alert("Não sei como você fez isso, mas este item já foi adicionado no carrinho!")
            } else {
                cartItems.push(parent)
                const price = parent.getElementsByClassName("card__price");
                const priceData = parseFloat(price[0].getAttribute("data-price"))
                totalValue.push(priceData)
                changeAddButtonEffect(button, true, "0.8", "none", "Já está no carrinho")
                updateCart()
            }
        })
    }

    function changeAddButtonEffect(addButton, disabled, opacity, pointerEvents, text){
        addButton.disabled = disabled;
        addButton.style.opacity = opacity;
        addButton.style.pointerEvents = pointerEvents;
        addButton.innerHTML = text;
    }

    // Função que checa se já foi adicionado algum item no carrinho.
    function checkItensInTheCard(id) {
        for(let i = 0; i< cartItems.length; i++){
            if(cartItems[i].getAttribute('data-id') == id){
                return true
            } 
        }
        return false;
    }

    // Função que encontra o card pelo id e permite o uso de outras funções
    function findCard (id){
        for(let i = 0; i< cards.length; i++){
            if(cards[i].getAttribute('data-id') == id){
                return cards[i];
            } 
        }
    }

    // Adicionando evento de clique que abre e fecha o carrinho
    cartIcon.addEventListener("click", function() {
        cart.classList.toggle("activeCart")
        updateCart()
    })

    function updateCart() {
        if(cart.classList.contains("activeCart")){
            if(cartItems.length >= 1){
                let htmlCode = "";
                let value = 0;
                for(let i = 0; i < cartItems.length; i++){
                    const card = findCard(cartItems[i].getAttribute("data-id"))
                    const id = card.getAttribute("data-id")
                    const img = card.querySelector("img")
                    const title = card.querySelector(".card__title")
                    const price = card.querySelector(".card__price")
                    htmlCode += ` 
                        <div class="cartItem" data-id="${id}">
                            <img src="${img.src}" alt="${img.alt}">
                            <div class="cartItem__infos">
                                <h4>${title.textContent}</h4>
                                <p>${price.textContent}</p>
                            </div>
                            <div class="removeButton">
                                <img src="./img/icons/trash.svg" alt="Ícone de lixeira">
                            </div>
                        </div>
                    `
                }
                for(let i = 0; i < totalValue.length; i++){
                    value += totalValue[i]
                }
                cart.innerHTML = `
                    <h2>Itens no Carrinho</h2>
                    ${htmlCode}
                    <button id="payButton">Pagar R$ ${value.toFixed(2)}</button>
                `
                const removeButtons = document.getElementsByClassName("removeButton")
                for (let i = 0; i < removeButtons.length; i++) {
                    const button = removeButtons[i];
                    button.addEventListener("click", function(){
                        const parent = button.parentElement;
                        const cardParent = findCard(parent.getAttribute("data-id"));
                        const indexPosition = cartItems.indexOf(cardParent);
                        cartItems.splice(indexPosition, 1);
                        totalValue.splice(indexPosition, 1);
                        value = 0;
                        for(let i = 0; i < totalValue.length; i++){
                            value += totalValue[i]
                        }
                        const addButton = cardParent.querySelector("button");
                        changeAddButtonEffect(addButton, false, "1", "auto", "adicionar")
                        updateCart();
                    })
                }
                const payButton = document.getElementById("payButton")
                payButton.addEventListener("click", function() {
                    for(let i = 0; i < cartItems.length; i++){
                        const card = findCard(cartItems[i].getAttribute("data-id"))
                        const addButton = card.querySelector('button')
                        changeAddButtonEffect(addButton, false, "1", "auto", "adicionar")
                    }
                    cartItems.splice(0, cartItems.length)
                    totalValue.splice(0, totalValue.length);
                    value = 0;
                    updateCart()
                    cart.classList.remove("activeCart")
                    alert("Parabéns! Você completou o site!")
                })
            } else {
                cart.innerHTML = `
                    <h2>O carrinho está vazio!</h2>
                `
            }
            
        }
    }

    // for (let i = 0; i < removeButtons.length; i++) {
    //     const button = removeButtons[i];
    //     button.addEventListener("click", function() {
    //         const parent = button.parentElement
    //     })
    // }
})


// <div class="cartItem" data-id="1">
//     <img src="./img/content/headset.png" alt="Imagem de Item no Carrinho">
//     <div class="cartItem__infos">
//         <h4>Product Name</h4>
//         <p>R$ 3.000,00</p>
//     </div>
//         <div class="removeButton">
//         <img src="./img/icons/trash.svg" alt="Ícone de lixeira">
//     </div>
// </div>