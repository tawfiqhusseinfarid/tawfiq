const header=document.getElementById('header');
const menuBtn=document.getElementById('menuBtn');
const navMenu=document.getElementById('navMenu');
menuBtn?.addEventListener('click',()=>{navMenu.classList.toggle('open');menuBtn.innerHTML=navMenu.classList.contains('open')?'<i class="uil uil-times"></i>':'<i class="uil uil-bars"></i>'});
document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>{navMenu.classList.remove('open');menuBtn.innerHTML='<i class="uil uil-bars"></i>'}));
window.addEventListener('scroll',()=>{
 header.classList.toggle('scrolled',scrollY>30);
 const sections=[...document.querySelectorAll('section[id]')];
 const y=scrollY+130;
 sections.forEach(s=>{
  const link=document.querySelector(`.nav-link[href="#${s.id}"]`);
  if(link) link.classList.toggle('active',y>=s.offsetTop&&y<s.offsetTop+s.offsetHeight);
 });
});
new Typed('#typed',{strings:['Java & Spring Boot','Angular & TypeScript','REST APIs & Databases','full-stack solutions'],typeSpeed:55,backSpeed:30,backDelay:1700,loop:true});
const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const currentYear = document.getElementById('currentYear');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}