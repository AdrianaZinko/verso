  const hamburher=document.querySelector('.header__burger')
const menu = document.querySelector('.header__body')
 hamburher.addEventListener('click',()=>{
hamburher.classList.toggle('active')
menu.classList.toggle('active')
 })
 arrowTop.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
  });
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};