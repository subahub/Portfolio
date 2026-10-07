const root=document.documentElement, theme=document.getElementById('theme'), menu=document.getElementById('menu'), links=document.getElementById('links');
const saved=localStorage.getItem('theme'); if(saved) root.dataset.theme=saved;
function themeIcon(){theme.textContent=root.dataset.theme==='dark'?'☾':'☼'} themeIcon();
theme.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme);themeIcon()});
menu.addEventListener('click',()=>links.classList.toggle('open')); links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;document.getElementById('progress').style.width=(scrollY/h*100)+'%'});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));

const glow=document.querySelector('.cursor-glow');if(glow){document.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'})}
