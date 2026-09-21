const menu=document.getElementById('menu'),nav=document.getElementById('nav'),theme=document.getElementById('theme');
menu.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
theme.onclick=()=>{document.body.classList.toggle('light');theme.textContent=document.body.classList.contains('light')?'☀':'☾'};
document.getElementById('year').textContent=new Date().getFullYear();
