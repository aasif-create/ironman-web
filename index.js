// index.js
const btn = document.getElementById('welcomeBtn');
const video = document.getElementById('introVideo');
btn.addEventListener('click', async () => {
  btn.classList.add('pop');
  setTimeout(async () => {
    btn.style.display = 'none';
    video.classList.add('show');
    try {
      await video.play();
    } catch (err) {
      try {
        video.muted = true;
        await video.play();
      } catch (err2) {
        window.location.href = 'movies.html';
        return;
      }
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
window.addEventListener('resize', () => {
  const bg = document.querySelector('.bg');
  if (window.innerWidth <= 480) bg.style.backgroundPosition = 'center center';
  else bg.style.backgroundPosition = 'center top';
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden && !video.paused) video.pause();
});
