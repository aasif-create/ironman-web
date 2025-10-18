const buttons = Array.from(document.querySelectorAll('.nav-btn'));
const reactor = document.getElementById('reactor');
function navigateTo(href){
  if(!href) return;
  const a = document.createElement('a');
  a.href = href;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
buttons.forEach(btn=>{
  btn.addEventListener('click',()=>navigateTo(btn.dataset.target));
  btn.addEventListener('keydown',e=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); btn.click(); } });
  btn.addEventListener('pointerdown',()=>btn.animate([{transform:'scale(.96)'},{transform:'scale(1)'}],{duration:160,fill:'forwards'}));
});
reactor.addEventListener('click',()=>navigateTo('become.html'));
reactor.addEventListener('keydown',e=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); reactor.click(); } });
window.addEventListener('load',()=>{
  const nodes = document.querySelectorAll('.nav-btn');
  nodes.forEach((n,i)=>n.animate([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:520,delay:120*i,fill:'forwards',easing:'cubic-bezier(.2,.9,.3,1)'}));
  reactor.animate([{transform:'scale(.96)'},{transform:'scale(1)'}],{duration:900,iterations:1,easing:'ease-out'});
});
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.querySelectorAll('*').forEach(el=>el.style.animationDuration='0.001ms');
}
