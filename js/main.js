(()=>{
const d=document;d.documentElement.classList.add('js');
const burger=d.querySelector('.burger'),nav=d.querySelector('nav.main');
burger?.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
d.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');burger?.setAttribute('aria-expanded','false')}});
const page=(location.pathname.split('/').pop()||'index').replace('.html','');
nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href').replace('.html','')===page)a.setAttribute('aria-current','page')});
d.querySelectorAll('.year').forEach(y=>y.textContent=new Date().getFullYear());
// hide social links that are still placeholders
d.querySelectorAll('.social a[href^="YOUR_"]').forEach(a=>a.remove());
// scroll reveal
if(!('IntersectionObserver' in window)){d.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'))}else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
d.querySelectorAll('.reveal').forEach(el=>io.observe(el))}
})();
