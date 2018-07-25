let btn = document.querySelector('.js-btn');
let menu = document.querySelector('.mobile__menu');
let header = document.querySelector('header');
let mobileWraper = document.createElement('div');
header.appendChild(mobileWraper);

function init() {
  btn.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menu.classList.toggle('disabled');
    btn.classList.toggle('menu-close');
    btn.classList.toggle('menu-open');
    mobileWraper.classList.toggle('mobile__wraper');
        
  });
}
document.addEventListener('DOMContentLoaded', init);
