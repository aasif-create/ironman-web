const corners = Array.from(document.querySelectorAll('.corner'));
const reactor = document.getElementById('reactor');
const backIntroBtn = document.getElementById('backIntroBtn');

if(backIntroBtn){
  backIntroBtn.addEventListener('click', ()=> location.href='index.html');
  backIntroBtn.addEventListener('keydown', e => {
    if(e.key==='Enter' || e.key===' '){
      e.preventDefault();
      backIntroBtn.click();
    }
  });
}

function go(h){
  if(!h) return;
  location.href = h;
}

corners.forEach(corner => {
  const target = corner.querySelector('button.action').dataset.target;
  corner.addEventListener('click', () => go(target));
  corner.addEventListener('keydown', e => {
    if(e.key==='Enter' || e.key===' '){
      e.preventDefault();
      corner.click();
    }
  });
});

if(reactor){
  reactor.addEventListener('click', ()=>go(reactor.dataset.target));
  reactor.addEventListener('keydown', e=>{
    if(e.key==='Enter'||e.key===' '){
      e.preventDefault();
      reactor.click();
    }
  });
}

window.addEventListener('load', ()=>{
  corners.forEach((c,i)=>c.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:540,delay:120*i,fill:'forwards',easing:'cubic-bezier(.2,.9,.3,1)'}));
  if(reactor && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    reactor.animate([{transform:'scale(.98)'},{transform:'scale(1.02)'},{transform:'scale(.98)'}],{duration:2400,iterations:Infinity,easing:'ease-in-out'});
  }
});
