
// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});});});
// Back to Top
const topBtn=document.getElementById('back-to-top');window.addEventListener('scroll',()=>{topBtn.style.display=window.scrollY>300?'block':'none';});topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
// Reveal on Scroll
const reveals=document.querySelectorAll('.reveal');window.addEventListener('scroll',()=>{reveals.forEach(r=>{if(r.getBoundingClientRect().top<window.innerHeight-50){r.classList.add('active');}});});
// Carousel
let currentSlide=0;const slides=document.querySelectorAll('.review-card');setInterval(()=>{slides[currentSlide].classList.remove('active');currentSlide=(currentSlide+1)%slides.length;slides[currentSlide].classList.add('active');},4000);
// Contact Form Popup
const form=document.getElementById('contact-form');form.addEventListener('submit',e=>{e.preventDefault();fetch(form.action,{method:'POST',body:new FormData(form)}).then(()=>{document.getElementById('thankyou-message').classList.remove('hidden');form.reset();});});
