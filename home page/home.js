const buttons = document.querySelectorAll('.nav-btn');
buttons.forEach(btn=>{
  btn.addEventListener('click',()=>{const tgt=btn.dataset.target;if(tgt)location.href=tgt});
  btn.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ') {e.preventDefault();btn.click()}});
  btn.addEventListener('pointerdown',()=>btn.animate([{transform:'scale(.96)'},{transform:'scale(1)'}],{duration:180,fill:'forwards'}));
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')document.querySelectorAll('.nav-btn').forEach(b=>b.blur());
});
window.addEventListener('load',()=>{
  const nodes = document.querySelectorAll('.node');
  nodes.forEach((n,i)=>n.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:600,delay:120*i,fill:'forwards'}));
  const core = document.querySelector('.diamond');
  core.animate([{transform:'rotate(45deg) scale(.98)'},{transform:'rotate(45deg) scale(1.02)'},{transform:'rotate(45deg) scale(.98)'}],{duration:2400,iterations:Infinity});
});
