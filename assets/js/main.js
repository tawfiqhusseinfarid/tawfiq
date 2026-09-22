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
const typedElement = document.getElementById('typed');

if (typedElement) {
  const phrases = [
    'Java & Spring Boot',
    'Angular & TypeScript',
    'REST APIs & Databases',
    'Full-Stack Solutions'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      typedElement.textContent = currentPhrase.substring(0, charIndex);

      if (charIndex === currentPhrase.length) {
        deleting = true;
        setTimeout(typeEffect, 1400);
        return;
      }

      setTimeout(typeEffect, 55);
    } else {
      charIndex--;
      typedElement.textContent = currentPhrase.substring(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;

        setTimeout(typeEffect, 150);
        return;
      }

      setTimeout(typeEffect, 30);
    }
  }

  typeEffect();
}
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