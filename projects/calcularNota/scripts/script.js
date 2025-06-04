function calcular() {
  let n1 = parseFloat(document.getElementById('nota_1').value);
  let n2 = parseFloat(document.getElementById('nota_2').value);
  let n3 = parseFloat(document.getElementById('nota_3').value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    alert("Por favor, preencha todas as notas corretamente.");
    return;
  }

  if (n1 > 10 || n2 > 10 || n3 > 10 || n1 < 0 || n2 < 0 || n3 < 0) {
    alert("As notas devem estar entre 0 e 10.");
    return;
  }

  let media = (n1 + n2 + n3) / 3;
  document.getElementById("media").textContent = media.toFixed(2);

  let statusText = document.getElementById("status");

  if (media < 6) {
    statusText.textContent = "❌ Reprovado! Bora estudar mais!";
    statusText.style.color = "red";
  } else if (media < 8) {
    statusText.textContent = "✅ Aprovado! Bom trabalho!";
    statusText.style.color = "orange";
  } else {
    statusText.textContent = "🎉 Aprovado com excelência! Você arrasou! ❤️";
    statusText.style.color = "green";

    // 🎊 Confete!
    confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
    });

  }
}
