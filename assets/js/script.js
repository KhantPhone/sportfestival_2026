


// MARQUEE
document.querySelectorAll('.marquee__track').forEach(track => {
    track.innerHTML += track.innerHTML;
});


//SWIPER
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,        
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    768: {              
      slidesPerView: 2,
    },
    1024: {             
      slidesPerView: 2,
    }
  }
});