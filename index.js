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
function adjustFocalMode() {
  const bg = document.querySelector('.bg');
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const aspect = vw / vh;
  if (aspect < 1.2 || vw <= 900) {
    bg.style.backgroundSize = 'contain';
    bg.style.backgroundPosition = 'center center';
    video.style.objectFit = 'contain';
    video.style.objectPosition = 'center center';
  } else {
    bg.style.backgroundSize = 'cover';
    bg.style.backgroundPosition = 'center top';
    video.style.objectFit = 'cover';
    video.style.objectPosition = 'center center';
  }
}
window.addEventListener('load', adjustFocalMode);
window.addEventListener('resize', adjustFocalMode);
window.addEventListener('orientationchange', adjustFocalMode);
window.addEventListener('pageshow', adjustFocalMode);
window.addEventListener('resize', () => {
  const bg = document.querySelector('.bg');
  if (window.innerWidth <= 480) bg.style.backgroundPosition = 'center center';
  else bg.style.backgroundPosition = (window.innerWidth > 900) ? 'center top' : 'center center';
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden && !video.paused) video.pause();
});
