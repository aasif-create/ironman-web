const btn = document.getElementById('welcomeBtn');
btn.addEventListener('click', () => {
  btn.classList.add('pop');
  setTimeout(() => { location.href = 'home.html'; }, 550);
});
btn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    btn.click();
  }
});
