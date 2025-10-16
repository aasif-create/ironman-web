const btn = document.getElementById('welcomeBtn');
const video = document.getElementById('introVideo');
video.src = 'video/IRONMANCLIP.mp4';
btn.addEventListener('click', async () => {
  btn.classList.add('pop');
  setTimeout(async () => {
    btn.style.display = 'none';
    video.style.display = 'block';
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
