const els = Array.from(document.querySelectorAll('.action'));
const reactor = document.getElementById('reactor');
function go(h){
  if(!h) return;
  location.href = h;
}
els.forEach(b=>{
  b.addEventListener('click',()=>go(b.dataset.target));
  b.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' ') { e.preventDefault(); b.click(); } });
  b.addEventListener('pointerdown',()=>b.animate([{transform:'scale(.96)'},{transform:'scale(1)'}],{duration:150,fill:'forwards'}));
});
if(reactor){
  reactor.addEventListener('click',()=>go(reactor.dataset.target));
  reactor.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' ') { e.preventDefault(); reactor.click(); } });
}
window.addEventListener('load',()=>{
  const corners = document.querySelectorAll('.corner');
  corners.forEach((c,i)=>c.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:540,delay:120*i,fill:'forwards',easing:'cubic-bezier(.2,.9,.3,1)'}));
  if(reactor && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    reactor.animate([{transform:'scale(.98)'},{transform:'scale(1.02)'},{transform:'scale(.98)'}],{duration:2400,iterations:Infinity,easing:'ease-in-out'});
  }
});
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.querySelectorAll('*').forEach(n=>n.style.animationDuration='0.001ms');
}
