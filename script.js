
function toggleMenu(){document.getElementById('nav-menu').classList.toggle('active');}
const topBtn=document.getElementById('back-to-top');window.addEventListener('scroll',()=>{topBtn.style.display=window.scrollY>300?'block':'none';});topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
