function toggleSection(id, button) {
  const section = document.getElementById(id);
  section.classList.toggle('ativo');
  button.classList.toggle('ativo');

  const icon = button.querySelector('.icon');
  if (section.classList.contains('ativo')) {
    icon.textContent = '⬆️';
  } else {
    icon.textContent = '⬇️';
  }
}
