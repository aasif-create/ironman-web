const btn = document.getElementById('welcomeBtn');
const video = document.getElementById('introVideo');
const fallback = document.getElementById('fallbackLink');
video.src = 'intro.mp4';
btn.addEventListener('click', () => {
  btn.classList.add('pop');
  setTimeout(() => {
    btn.style.display = 'none';
    fallback.style.display = 'none';
    video.style.display = 'block';
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => { window.location.href = 'movies.html'; });
    }
  }, 160);
});
video.addEventListener('ended', () => { window.location.href = 'movies.html'; });
video.addEventListener('error', () => { window.location.href = 'movies.html'; });
btn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    btn.click();
  }
});
