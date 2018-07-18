let btn = document.querySelector('.js-btn');
let menu = document.querySelector('.mobile_menu');
let main = document.querySelector('main');
let mobileWraper = document.createElement('div');
main.appendChild(mobileWraper);

function init() {
  btn.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menu.classList.toggle('disabled');
    btn.classList.toggle('menu-close');
    btn.classList.toggle('menu-open');
    mobileWraper.classList.toggle('mobile_wraper');
        
  });
}
document.addEventListener('DOMContentLoaded', init);
