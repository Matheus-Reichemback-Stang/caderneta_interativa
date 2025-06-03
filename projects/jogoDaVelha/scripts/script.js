document.addEventListener("DOMContentLoaded", function() {
    // Capturando elementos
    const tiles = Array.from(document.querySelectorAll('.tile')); // Um array dos quadrados/lajes do jogo
    const playerDisplay = document.querySelector('.display-player'); // Texto acima dos quadrados que cita o turno de cada jogador
    const resetButton = document.querySelector('#reset'); // Botão que se torna o reset
    const announcer = document.querySelector('.announcer'); // Área para anunciar o resultado

    // Variáveis Importantes
    let board = ['', '', '', '', '', '', '', '', '',]; // Registra as jogadas no tabuleiro
    let currentPlayer = 'X'; // Diz quem é o jogador atual
    let isGameActive = true; // Boolean que cita se o jogo está ativo ainda

    // Mensagens
    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    // Array multidimensional que contém todas as possíveis vitórias
    /*  
        [0] [1] [2]
        [3] [4] [5]  O tabuleiro possui essas posições, com base nela
        [6] [7] [8] foi construído os padrões de vitória.
    */  
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    // Verifica se há uma jogada que possibilita ganhar o jogo ou se há um empate
    function handleResultValidation() {
        let roundDown = false;
        for(let i = 0; i <= 7; i++){
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if(a === '' || b === '' || c === '') {
                continue;
            }
            if(a === b && b === c) {
                roundDown = true;
                break;
            }
        }

        if(roundDown) {
            announce(currentPlayer === 'X'? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

        if(!board.includes('')){
            announce(TIE);
        }
    }

    // Tem o objetivo de anunciar o resultado da rodada
    function announce(type) {
        if(type == PLAYERO_WON){
            announcer.innerHTML = 'O jogador <span class="playerO" >O</span> ganhou!';
        } else if(type == PLAYERX_WON) {
            announcer.innerHTML = 'O jogador <span class="playerX" >X</span> ganhou!';
        } else {
            announcer.innerText = 'Empate';
        }
        announcer.classList.remove('hide');
    }

    function isValidAction(tile){
        if(tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    }

    // Atualiza o valor do quadrado/laje presente no tabuleiro
    function updateBoard(index) {
        board[index] = currentPlayer;
    }

    // Tem o objetivo de mudar a vez de quem joga
    function changePlayer() {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    // Tem o objetivo de especificar o que ocorre em cada clique no board(tabuleiro)
    function userAction(tile, index) {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    // Tem o objetivo de resetar o jogo;
    function resetBoard (){
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if(currentPlayer === 'O'){
            changePlayer();
        }

        for(let i = 0; i < tiles.length; i++){
            const tile = tiles[i];
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO')
        }
    }

    // Implementando a função userAction em cada Tile(laje/quadrado)
    for(let index = 0; index < tiles.length; index++){
        const tile = tiles[index];
        tile.addEventListener('click', function() {
            userAction(tile, index)
        })
    }

    // Adicionar um evento de click no botão 'reset' para resetar.
    resetButton.addEventListener('click', resetBoard)
})