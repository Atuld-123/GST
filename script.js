
function toggleMenu(){document.getElementById('nav-menu').classList.toggle('active');}
const topBtn=document.getElementById('back-to-top');window.addEventListener('scroll',()=>{topBtn.style.display=window.scrollY>300?'block':'none';});topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
let currentSlide=0;const slides=document.querySelectorAll('.review-card');setInterval(()=>{slides[currentSlide].classList.remove('active');currentSlide=(currentSlide+1)%slides.length;slides[currentSlide].classList.add('active');},3000);
