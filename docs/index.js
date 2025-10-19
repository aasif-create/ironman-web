const btn = document.getElementById('welcomeBtn');
const video = document.getElementById('introVideo');
const bgImg = document.getElementById('bgImg');
btn.addEventListener('click', async () => {
  btn.classList.add('pop');
  setTimeout(async () => {
    btn.style.display = 'none';
    video.classList.add('show');
    try { await video.play(); }
    catch (err) { try { video.muted = true; await video.play(); } catch { window.location.href = '../home_page/home.html'; return; } }
  }, 160);
});

video.addEventListener('ended', () => window.location.href = '../home_page/home.html');
video.addEventListener('error', () => window.location.href = '../home_page/home.html');

btn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); } });

function applyFit() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (vh > vw) {
    bgImg.style.objectFit = 'contain';
    bgImg.style.objectPosition = 'center center';
    video.style.objectFit = 'contain';
    video.style.objectPosition = 'center center';
    bgImg.style.transform = 'translateY(0)';
  } else {
    bgImg.style.objectFit = 'cover';
    bgImg.style.objectPosition = 'center top';
    video.style.objectFit = 'cover';
    video.style.objectPosition = 'center center';
    bgImg.style.transform = 'translateY(0)';
  }
  bgImg.style.width = '100%';
  bgImg.style.height = '100%';
  video.style.width = '100vw';
  video.style.height = '100vh';
}
window.addEventListener('load', applyFit);
window.addEventListener('resize', applyFit);
window.addEventListener('orientationchange', applyFit);
document.addEventListener('visibilitychange', () => { if (document.hidden && !video.paused) video.pause(); });
