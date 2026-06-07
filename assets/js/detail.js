

console.log('script.js loaded, hash is:', window.location.hash);

window.addEventListener('load', () => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', window.location.pathname);
    console.log('hash stripped, url now:', window.location.href);
});

// compe
(function () {
  'use strict';

  // 操作するHTML要素の取得 .switch内のli
  const button = document.querySelectorAll('.switch li');
  const contents = document.querySelectorAll('.contents');

  // それぞれのliにイベントリスナーを追加
  // クリックされたら
  for (let j = 0; j < button.length; j++) {
    button[j].addEventListener('click', () => {
      // すべてのliから.activeを削除    
      for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('active');
      }
      // クリックされたliに .active をつける
      button[j].classList.add('active');

      // すべてのcontentsからactiveを削除
      for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
      }

      // 対応するcontentsにactiveを追加
      contents[j].classList.add('active');
    });
  }




})();


// NAV LINKS
window.addEventListener('load', () => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', window.location.pathname); // removes #spot
    });
});


//HEADER
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('navHamburger');

hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', open);
    document.body.classList.toggle('menu-open', open);
    document.documentElement.classList.toggle('menu-open', open);
});

/*preloader*/

 $(window).on('load',function(){
 		$(".loader").fadeOut(1000);
 		$(".content").fadeIn(1000);
 })


//sticky
$(function () {
  const $bar = $('.switch__sticky');
  const $wrap = $('.attractions-wrapper');
  const $footer = $('footer');

  function toggleBar() {
    const wrap = $wrap[0].getBoundingClientRect();
    const footer = $footer[0].getBoundingClientRect();
    const vh = window.innerHeight;

    const wrapInView = wrap.top < vh && wrap.bottom > 0;
    const footerVisible = footer.top < vh;  

    $bar.toggleClass('is-visible', wrapInView && !footerVisible);
  }

  $(window).on('scroll resize', toggleBar);
  toggleBar();
});