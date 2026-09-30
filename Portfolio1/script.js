const menu=document.getElementById('menu'),nav=document.getElementById('nav'),theme=document.getElementById('theme');
const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
function setTheme(light){document.body.classList.toggle('light',light);theme.textContent=light?'☀':'☾';theme.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode')}
setTheme(store.get('theme')==='light');
theme.onclick=()=>{const light=!document.body.classList.contains('light');setTheme(light);store.set('theme',light?'light':'dark')};
menu.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
document.getElementById('year').textContent=new Date().getFullYear();
const links=[...document.querySelectorAll('nav a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
links.forEach(a=>{const s=document.querySelector(a.getAttribute('href'));if(s)io.observe(s)});
