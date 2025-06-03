let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    resultado.innerHTML = "Por favor, digite um número entre 1 e 100.";
    return;
  }

  tentativas++;

  if (palpite === numeroSecreto) {
    resultado.innerHTML = '🎉 Parabéns! Você acertou o número <strong>' + numeroSecreto + '</strong> em <strong>' + tentativas + '</strong> tentativa(s)!';
    document.getElementById("reiniciar").style.display = "inline-block";

    // Confete dourado
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#c89b3c', '#ffdc73', '#fff8dc']
    });

  } else if (palpite < numeroSecreto) {
    resultado.innerHTML = "📉 O número é maior!";
  } else {
    resultado.innerHTML = "📈 O número é menor!";
  }

  document.getElementById("palpite").value = "";
}

// Atalho: Enter envia palpite
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("palpite").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      verificarPalpite();
    }
  });
});

// Reinicia o jogo
function reiniciarJogo() {
  window.location.reload();
}