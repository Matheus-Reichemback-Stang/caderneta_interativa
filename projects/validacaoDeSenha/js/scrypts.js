document.getElementById('passwordForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const password = document.getElementById('password').value.trim();
  const feedback = document.getElementById('feedback');

  // Limpa o feedback com transição suave
  feedback.style.opacity = '0';

  setTimeout(() => {
    feedback.innerHTML = '';

    if (!password) {
      const p = document.createElement('p');
      p.textContent = 'Por favor, digite uma senha.';
      p.classList.add('negative');
      feedback.appendChild(p);
      feedback.style.opacity = '1';
      return;
    }

    // Critérios da senha
    const criteria = {
      comprimento: {
        valid: password.length >= 8,
        message: 'Pelo menos 8 caracteres.'
      },
      maiuscula: {
        valid: /[A-Z]/.test(password),
        message: 'Pelo menos uma letra maiúscula.'
      },
      minuscula: {
        valid: /[a-z]/.test(password),
        message: 'Pelo menos uma letra minúscula.'
      },
      numero: {
        valid: /[0-9]/.test(password),
        message: 'Pelo menos um número.'
      },
      especial: {
        valid: /[\W_]/.test(password),
        message: 'Pelo menos um caractere especial (ex: !, @, #, $, etc).'
      }
    };

    const erros = Object.values(criteria)
      .filter(crit => !crit.valid)
      .map(crit => crit.message);

    if (erros.length === 0) {
      const p = document.createElement('p');
      p.textContent = 'Senha forte!';
      p.classList.add('positive');
      feedback.appendChild(p);
    } else {
      const p = document.createElement('p');
      p.textContent = 'A senha precisa atender aos seguintes critérios:';
      p.classList.add('negative');
      feedback.appendChild(p);

      const ul = document.createElement('ul');
      erros.forEach(msg => {
        const li = document.createElement('li');
        li.textContent = msg;
        ul.appendChild(li);
      });
      feedback.appendChild(ul);
    }

    feedback.style.opacity = '1';

  }, 300);

  // Mostrar/Ocultar senha
  document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
});

});
